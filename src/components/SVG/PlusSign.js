import { Svg, Path } from "react-native-svg";

export default function PlusSign({ color, size,}) {
  return (
    <Svg 
    style={{position: "absolute", top: - size/2, left: -size/2}}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
    >
      <Path
        d="M4 12H20M12 4V20"
        stroke={color}
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
