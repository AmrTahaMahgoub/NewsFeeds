import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";
import {scale} from "../../../styles/dimensions";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: scale(6),
    overflow: "hidden",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: Colors.GRAY_F9F9F9,
  },
});

export default styles;
