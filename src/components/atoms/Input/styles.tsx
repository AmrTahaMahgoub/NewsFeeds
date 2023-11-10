import {StyleSheet} from "react-native";
import {Colors, Spacing, Typography} from "../../../styles";
import {getHeight, scale} from "../../../styles/dimensions";

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: getHeight(48),
    borderWidth: 1,
    borderColor: Colors.GRAY_474C5C,
    borderRadius: getHeight(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: Spacing.S11,
    backgroundColor: Colors.WHITE,
    marginTop: Spacing.S16,
  },
  inputStyle: {
    height: "100%",
    fontFamily: Typography.REGULAR,
    fontSize: Typography.FS14,
    flex: 1,
    paddingLeft: Spacing.S16,
    paddingRight: Spacing.S16,
    paddingVertical: 0,
    marginVertical: 0,
    color: Colors.GRAY_1E103A,
  },
  passwordButton: {
    paddingRight: Spacing.S20,
  },
  passwordIcon: {
    width: scale(20),
    height: scale(15),
  },
  error: {
    paddingTop: Spacing.S8,
    paddingLeft: Spacing.S35,
    width: "100%",
    textAlign: "left",
  },
});
export default styles;
