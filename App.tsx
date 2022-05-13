import { StatusBar } from 'expo-status-bar';
import Shop from "@screens/Shop";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemInfo from "@screens/ItemInfo";
import linking, {RootStackParamList} from "@routes";
import {Provider} from "react-redux";
import {store} from "@store";

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer
        linking={linking}
      >
        <StatusBar
          style="auto"
        />
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Shop" component={Shop} />
          <Stack.Screen name="ItemInfo" component={ItemInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


