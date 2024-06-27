import React from 'react';
import {Layer, Rectangle} from 'recharts';
import NodeButton from './NodeButton';

interface CustomNodeProps {
    x: number;
    y: number;
    width: number;
    height: number;
    index: number;
    payload: any;
    containerWidth: number;
    activeNodes: any[];
}

const CustomNode: React.FC<CustomNodeProps> = (props) => {
    const {x, y, width, height, index, payload, containerWidth} = props;
    const isOut = x + width + 6 > containerWidth;
    const isDemo = payload.isDemo;

    return (
        <Layer key={`CustomNode${index}`} style={{cursor: 'pointer'}}>
            <Rectangle x={x} y={y} width={width} height={height} fill='#394EFF' fillOpacity='1'/>

            {/*<foreignObject*/}
            {/*  x={isOut ? x - 6 : x + width + 5}*/}
            {/*  y={0}*/}
            {/*  height={48}*/}
            {/*  style={{ width: '150px', padding: '2px' }}*/}
            {/*>*/}
            {/*  <NodeDropdown payload={payload} />*/}
            {/*</foreignObject>*/}

            {!isDemo ? (
                <foreignObject
                    x={isOut ? x - 6 : x + width + 5}
                    y={y + 5}
                    height="25"
                    style={{width: "150px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}
                >
                    <NodeButton payload={payload}/>
                </foreignObject>
            ) : (
                <foreignObject
                    x={isOut ? x - 6 : x + width + 5}
                    y={y + 5}
                    height="28"
                    style={{width: "70px", whiteSpace: "nowrap"}}
                >
                    <div className={'p-1 bg-white rounded border'}>{payload.name}</div>
                </foreignObject>
            )}
        </Layer>
    );
}

export default CustomNode;
