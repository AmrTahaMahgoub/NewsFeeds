import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";

const HidePassword = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 16 12" {...props}>
    <Path
      id="Hide"
      d="M9.986,22.135l.909-.909a2.989,2.989,0,0,1-3.669,3.669l.909-.909a1.991,1.991,0,0,0,1.852-1.852Zm5.951-.378A10.472,10.472,0,0,0,13.3,18.823l-.728.728A10.007,10.007,0,0,1,14.912,22,8.6,8.6,0,0,1,8,26a7.347,7.347,0,0,1-1.68-.2l-.822.822A8.47,8.47,0,0,0,8,27c5.234,0,7.829-4.563,7.937-4.757a.5.5,0,0,0,0-.486Zm-2.083-4.9-11,11a.5.5,0,0,1-.707-.707l1.4-1.4a10.492,10.492,0,0,1-3.483-3.5.5.5,0,0,1,0-.486C.171,21.563,2.766,17,8,17a8.42,8.42,0,0,1,3.528.765l1.619-1.619a.5.5,0,1,1,.707.707ZM4.292,25l1.266-1.266a3,3,0,0,1,4.178-4.178l1.024-1.024A7.362,7.362,0,0,0,8,18a8.6,8.6,0,0,0-6.912,4,9.817,9.817,0,0,0,3.2,3Zm1.992-1.992L9.01,20.283A1.977,1.977,0,0,0,8,20a2,2,0,0,0-2,2,1.977,1.977,0,0,0,.283,1.009Z"
      transform="translate(0 -16)"
      fill="#676767"
    />
  </Svg>
);

export default HidePassword;