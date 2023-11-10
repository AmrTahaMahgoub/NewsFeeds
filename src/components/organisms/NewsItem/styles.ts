import { StyleSheet } from "react-native";
import { getHeight, getWidth, scale } from "../../../styles/dimensions";
import { Colors, Spacing } from "../../../styles";

export const styles = StyleSheet.create({
    image: {
      width: getWidth(200),
      height: getHeight(150),
      borderRadius: scale(25),
    },
    card:{
      height: getHeight(220),
      width: '100%',
      paddingVertical: Spacing.S16,
      paddingHorizontal: Spacing.S8,
      marginVertical: Spacing.S4,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor:Colors.GRAY_EEEEEE,
      borderWidth:1,
    
    }
  });