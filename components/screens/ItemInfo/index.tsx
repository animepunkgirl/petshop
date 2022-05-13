import React, { FC } from 'react';
import {Background, Button} from "@UI";
import {SafeAreaView} from "react-native-safe-area-context";
import {Image, StyleSheet, Text, View} from "react-native";
import {useAppSelector} from "@hooks/useStore";
import {Colors} from "@config";
import MakeFavorite from "../Shop/Body/MakeFavorite";
import AddToBasket from "./AddToBasket";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@routes";

type Props = NativeStackScreenProps<RootStackParamList, 'ItemInfo'>

const ItemInfo: FC<Props> = ({ route }) => {
  const item = useAppSelector(({shop}) => shop.selectedItem)

  if(!item)
    return null

  return (
    <Background type="custom" color={route.params.color!}>
      <SafeAreaView style={{
        flex: 1
      }}>
        <View style={styles.container}>
          <Text style={styles.description}>{item.description}</Text>
          <Image
            source={{
              uri: item.image
            }}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.badge}>
            <View style={styles.leftContent}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.details}>{item.breed.name}, {item.age}-year-old-{item.sex}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
            <View style={styles.rightContent}>
              <MakeFavorite itemId={item.id} />
            </View>
          </View>

          <View style={styles.actions}>
            <Button
              title={"Take me home"}
              variant="black"
              padding={{
                vertical: 13,
                horizontal: 25
              }}
            />
            <AddToBasket />
          </View>
          <View style={styles.bottomBackground} />
        </View>
      </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: "center",
  },
  description: {
    fontSize: 24,
    color: Colors.DARKBLUE,
    width: 300,
    fontWeight: "bold",
    textAlign: "center"
  },
  image: {
    marginTop: 10,
    height: 350,
    width: 350
  },
  badge: {
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 25,
    flexDirection: "row",
    width: 270,
    justifyContent: "space-between"
  },
  leftContent: {

  },
  rightContent: {

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.DARKBLUE
  },
  details: {
    color: Colors.GRAY,
    paddingVertical: 6
  },
  price: {
    fontSize: 27,
    fontWeight: "bold",
    color: Colors.DARKBLUE
  },
  actions: {
    justifyContent: "space-between",
    width: 270,
    marginTop: 30,
    flexDirection: "row"
  },
  bottomBackground: {
    backgroundColor: Colors.DARKBLUE,
    position: "absolute",
    bottom: -150,
    borderRadius: 100,
    width: 470,
    height: 320,
    elevation: -1,
    zIndex: -1
  }
})
export default ItemInfo;