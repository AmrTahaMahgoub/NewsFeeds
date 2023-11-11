import {StyleSheet} from "react-native";
import {Colors} from "../../styles";
import { getHeight, getWidth, scale } from "../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    width: scale(150),
    height: scale(150),
    borderRadius:scale(16),
    borderWidth:1,
    borderColor:Colors.GRAY_F7F8FA
  }
});
