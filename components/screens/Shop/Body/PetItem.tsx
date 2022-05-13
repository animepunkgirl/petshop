import React, { FC } from 'react';
import {Image, Text, View, StyleSheet, Pressable, PressableStateCallbackType} from "react-native";
import {Pet} from "@Types/Pet";
import {Colors} from "@config";
import useRandomColor from "@hooks/useRandomColor";
import MakeFavorite from "./MakeFavorite";
import useLinkToProps from "@hooks/useLinkToProps";
import {useAppDispatch} from "@hooks/useStore";
import {selectItem} from "@store";
import {LINKS} from "@routes";

interface Props {
  item: Pet
}
const PetItem: FC<Props> = ({ item }) => {
  const color = useRandomColor()
  const linkTo = useLinkToProps()
  const dispatch = useAppDispatch()

  const getContainerStyles = ({ pressed }: PressableStateCallbackType) => {
    if(!pressed)
      return [styles.container, { backgroundColor: color }]

    return [styles.container, { backgroundColor: color }, styles.pressedContainer]
  }

  const handlePress = () => {
    dispatch(selectItem(item))
    linkTo(LINKS.ItemInfo, {
      color
    })
  }

  return (
    <Pressable
      style={getContainerStyles}
      onPress={handlePress}
    >
      {({pressed}) => (
        <>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.previewImage}
              source={{
                uri: item.image
              }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.details}>{item.breed.name}, {item.age}-year-old-{item.sex}</Text>
            <View style={styles.footer}>
              <Text style={styles.price}>${item.price}</Text>
              <MakeFavorite itemId={item.id} />
            </View>
          </View>
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 50,
    borderRadius: 25,
    margin: 10
  },
  pressedContainer: {
    transform: [ { scale: 0.95 } ],
    opacity: 0.85
  },
  imageWrapper: {
    alignItems: "center"
  },
  previewImage: {
    height: 125,
    width: 125,
    transform: [ { scale: 1.5 }, { translateY: -20 } ]
  },
  info: {
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: "hidden"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.DARKBLUE
  },
  details: {
    color: Colors.GRAY,
    paddingVertical: 3
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  price: {
    fontSize: 27,
    fontWeight: "bold",
    color: Colors.DARKBLUE
  }
})
export default PetItem;