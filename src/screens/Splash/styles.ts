import {StyleSheet} from "react-native";
import {Colors} from "../../styles";
import { getHeight, getWidth } from "../../styles/dimensions";

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
    width: getWidth(150),
    height: getHeight(200),
  }
});
