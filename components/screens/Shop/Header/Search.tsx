import React, {useRef} from 'react';
import {TextInput, StyleSheet, View} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {Colors} from "@config";

const Search = () => {
  const inputRef = useRef<TextInput | null>(null)

  const handleViewTouch = () => {
    if(inputRef && inputRef.current)
      inputRef.current.focus()
  }

  return (
    <View style={styles.search} onTouchStart={handleViewTouch}>
      <AntDesign
        name="search1"
        size={27}
        color={Colors.GRAY}
        style={styles.icon}
      />
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#424242',
  }
})

export default Search;