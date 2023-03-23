import { Svg, Circle} from "react-native-svg";
import React from "react"

export default function MyCircle({ color, size}) {
        return (
      <Svg 
      style={{position: "absolute", top: -size, left: -size}} 
        // width={size}
        // height={size}
        viewport="0 0 24 24"
        fill="none"
      >
        <Circle cx={size} cy={size} r={size/2} stroke={color} stroke-width="0.5" fill="none"/>
      </Svg>
    );
}
