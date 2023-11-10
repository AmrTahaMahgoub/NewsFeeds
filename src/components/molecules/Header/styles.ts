import {StyleSheet} from "react-native";
import {getHeight, getWidth} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    //backgroundColor: "white",
    paddingHorizontal: 0,
  },
  iconContainer: {
    marginLeft: 0,
  },
  title: {
    flex: 3,
    textAlign: "center",
    marginRight: Spacing.S40,
  },
  iconStyle: {
    width: getWidth(27),
    height: getHeight(27),
    color: Colors.BLACK,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backText: {
    color: Colors.PRIMARY,
    marginRight: Spacing.S4,
  },
  input: {
    width: getWidth(330),
    marginHorizontal: Spacing.S16,
    alignSelf: "center",
    borderColor:Colors.BLACK
  },
});