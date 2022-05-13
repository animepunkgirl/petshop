import React, { useEffect } from 'react';
import API from "@api";
import PetItem from "./PetItem";
import {StyleSheet, View} from "react-native";
import {useAppDispatch, useAppSelector} from "@hooks/useStore";
import {addItems} from "@store";

const Body = () => {
  const pets = useAppSelector(({shop}) => shop.items)
  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      dispatch(addItems(await API.getPetList()))
    })()
  }, [])

  return (
    <View
      style={styles.container}
    >
      {pets.map(item =>
        <PetItem key={item.id} item={item}/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  }
})
export default Body;