import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";
import {getHeight, getWidth} from "../../../styles/dimensions";

const styles = StyleSheet.create({
  defaultButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: getHeight(10),
  },
  standerButtonContainer: {
    width: "100%",
    height: getHeight(48),
    borderRadius: getHeight(12),
    backgroundColor: Colors.PRIMARY,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // overflow: "hidden",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#2626261F",
    elevation: 6,
  },

  dropdownButtonContainer: {
    width: getWidth(343),
    height: getHeight(48),
    borderWidth: 1,
    borderRadius: getHeight(24),
    borderColor: Colors.GRAY_F9F9F9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.S20,
    backgroundColor: Colors.GRAY_FBFBFB,
    marginTop: Spacing.S16,
  },

  borderButtonContainer: {
    // width: getWidth(343),
    height: getHeight(48),
    borderRadius: getHeight(24),
    backgroundColor: Colors.WHITE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },

  linearGradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: getHeight(24),
  },
  error: {
    paddingTop: Spacing.S8,
    paddingLeft: Spacing.S35,
  },
});
export default styles;
