import { StyleSheet } from "react-native";
import { getHeight, getWidth, scale } from "../../../styles/dimensions";
import { Colors, Spacing } from "../../../styles";

export const styles = StyleSheet.create({
    image: {
      width: getWidth(260),
      height: getHeight(150),
      borderRadius: scale(8),
      marginBottom:Spacing.S4,
    },
    card:{
      height: getHeight(220),
      width: '100%',
      paddingVertical: Spacing.S16,
      marginVertical: Spacing.S4,
      borderColor:Colors.GRAY_EEEEEE,
      borderWidth:1,
      justifyContent:"space-between",
      alignContent:"center",
      alignItems:"center",

  
    }
  });