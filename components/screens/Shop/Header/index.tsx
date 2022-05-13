import React from 'react';
import Search from "./Search";
import {StyleSheet, View} from "react-native";
import OpenBasket from "./OpenBasket";

const Header = () => {
  return (
    <View style={styles.header}>
      <Search />
      <OpenBasket />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    background: "green"
  }
})

export default Header;