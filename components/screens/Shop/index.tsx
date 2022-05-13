import React from 'react';
import {Background} from "../../UI";
import {SafeAreaView} from "react-native-safe-area-context";
import Header from "./Header";
import Body from "./Body";
import {ScrollView} from "react-native";
import Tabs from "../../tabs/Tabs";

const Shop = () => {
  return (
    <Background type="pink">
      <SafeAreaView style={{
        flex: 1
      }}>
        <ScrollView>
          <Header />
          <Body />
        </ScrollView>
        <Tabs />
      </SafeAreaView>
    </Background>
  );
};

export default Shop;