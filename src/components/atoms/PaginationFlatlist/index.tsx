import {FlatListProps, StyleSheet, View} from "react-native";
import React from "react";
import {FlatList} from "react-native-gesture-handler";
import {getHeight} from "../../../styles/dimensions";

type PaginationFlatlistProps = {
  onLoadMore: () => void;
};
const PaginationFlatlist: React.FC<
  FlatListProps<any> & PaginationFlatlistProps
> = ({onLoadMore, ...props}) => {
  return (
    <View style={styles.content}>
      <FlatList
        scrollEventThrottle={0.00016}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.16}
        //  ListFooterComponent={
        //    // <Loader isLoading={isLoading} style={{paddingTop: getHeight(20)}} />
        //  }
        showsVerticalScrollIndicator={false}
        style={styles.listStyle}
        contentContainerStyle={styles.listContentContainer}
        {...props}
      />
    </View>
  );
};

export default PaginationFlatlist;

const styles = StyleSheet.create({
  content: {
    width: "100%",
  },
  listContentContainer: {
    paddingBottom: getHeight(60),
  },
  listStyle: {width: "100%", minHeight: "100%"},
});
