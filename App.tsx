import {StatusBar, StyleSheet, View} from "react-native";
import React from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import NavigationApp from "./src/navigation";
import {Colors} from "./src/styles";
import {getHeight} from "./src/styles/dimensions";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import store from "./src/redux/store/configureStore";


const App = () => {
  return (
    <View style={styles.rootScreen}>
      <StatusBar
        translucent
        barStyle="dark-content"
        animated
        backgroundColor={"rgba(0,0,0,0)"}
      />
      <Provider store={store}>
   
          <GestureHandlerRootView style={{flex: 1}}>
            <NavigationApp />
          </GestureHandlerRootView>
      
      </Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingTop: getHeight(40),
  },
});
