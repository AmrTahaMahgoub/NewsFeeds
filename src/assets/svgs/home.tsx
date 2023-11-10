import * as React from "react";
import Svg, {SvgProps, G, Path} from "react-native-svg";

const Home = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 16 16" {...props}>
    <G id="home">
      <Path
        id="Vector"
        d="M0,2V0"
        transform="translate(8 10)"
        fill="none"
        stroke={props.color || "#cbcbcb"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
      <Path
        id="Vector-2"
        data-name="Vector"
        d="M5.382.424l-4.62,3.7a2.249,2.249,0,0,0-.74,1.94l.887,5.307a2.127,2.127,0,0,0,2.027,1.713H10.4a2.139,2.139,0,0,0,2.027-1.713l.887-5.307a2.286,2.286,0,0,0-.74-1.94L7.955.431A2.15,2.15,0,0,0,5.382.424Z"
        transform="translate(1.331 1.456)"
        fill="none"
        stroke={props.color || "#cbcbcb"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
      <Path
        id="Vector-3"
        data-name="Vector"
        d="M0,0H16V16H0Z"
        fill="none"
        opacity={0}
      />
    </G>
  </Svg>
);

export default Home;
