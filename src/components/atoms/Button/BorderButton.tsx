import React, {FC, memo} from "react";
import {TouchableOpacityProps} from "react-native";
import {Colors, Spacing} from "../../../styles";
import Text from "../Text/Text";
import {ButtonProps} from "./Button";
import {ScaleButton} from "./ScaleButton";
import styles from "./styles";
import Svgs from "../../../assets/svgs";

const BorderButton: FC<TouchableOpacityProps & ButtonProps> = memo(
  ({text, iconName, iconContainerStyle, ...props}) => {
    return (
      <ScaleButton
        {...props}
        style={[
          styles.borderButtonContainer,
          {borderColor: Colors.BLACK},
          props.style,
        ]}>
        {iconName && (
          <Svgs
            name={iconName}
            style={[{marginLeft: Spacing.S16}, iconContainerStyle]}
            {...props.iconStyle}
          />
        )}
        {text && (
          <Text
            fontSize="FS14"
            fontFamily={"MEDIUM"}
            color={props.color || "PRIMARY"}
            {...props.textStyle}
            style={{
              paddingHorizontal: Spacing.S8,
            }}>
            {text}
          </Text>
        )}
        {props.children}
      </ScaleButton>
    );
  },
);

export {BorderButton};
