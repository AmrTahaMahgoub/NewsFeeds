import {StyleSheet} from "react-native";
import {getHeight} from "../../../styles/dimensions";
import {Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  headerContainer: {
    height: getHeight(40),
    marginTop: Spacing.S16,
    flexDirection: "row",
    paddingHorizontal: Spacing.S16,
  },
  searchInput: {
    height: getHeight(40),
    marginTop: 0,
    flex: 1,
    width: "100%",
  },
  titleAndGraduationIcon: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.S16,
    marginTop: getHeight(35),
  },
});
