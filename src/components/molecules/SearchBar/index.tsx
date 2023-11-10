import React, {FC, memo} from "react";
import {View, ViewProps} from "react-native";
import {Input} from "../../../components";

import {styles} from "./styles";

type SearchBarProps = {
  onComparison?: () => void;
  onFilter?: () => void;
  placeholder?: string;
  onSearch?: (text: string) => void;
  onFocus?: () => void;
  autoFocus?: boolean;
};

const SearchBar: FC<ViewProps & SearchBarProps> = ({
  //   onComparison,
  //   onFilter,
  placeholder,
  onSearch,
  style,
  onFocus,
  autoFocus,
  ...props
}) => {
  return (
    <View {...props} style={[styles.headerContainer, style]}>
      <Input
        onFocus={onFocus}
        autoFocus={autoFocus}
        onChangeText={onSearch}
        placeholder={placeholder || "Search"}
        style={styles.searchInput}
        icon="search"
      />

      {/* {onComparison && <Button
               onPress={onComparison}
               iconName='comparison'
           />} */}
      {/* {onFilter && <Button onPress={onFilter} iconName="filter" />} */}
    </View>
  );
};

export default memo(SearchBar);
