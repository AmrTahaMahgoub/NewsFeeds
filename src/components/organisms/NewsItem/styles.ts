import { StyleSheet } from "react-native";
import { getHeight, getWidth, scale } from "../../../styles/dimensions";
import { Colors, Spacing } from "../../../styles";

export const styles = StyleSheet.create({
    image: {
      width: getWidth(110),
      height: getHeight(110),
      borderRadius: scale(16),
      marginBottom:Spacing.S4,
    },
    card:{
      flexDirection:"row",
      height: getHeight(140),
      width: '100%',
      paddingVertical: Spacing.S8,
      marginVertical: Spacing.S8,
      borderColor:Colors.GRAY_EEEEEE,
      borderWidth:1,
      justifyContent:"center",
      alignContent:"center",
      paddingHorizontal:Spacing.S16
  
    },
    publishedAt: {
      color: 'gray',
    },
  });