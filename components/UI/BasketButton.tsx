import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {Colors} from "../../config";

interface Props {
  variant?: "rounded" | "original"
}

const BasketButton: FC<Props> = ({variant}) => {
  const buttonStyles = () => {
    if(variant === "rounded")
      return [styles.button, styles.rounded]

    return styles.button
  }
  return (
    <TouchableOpacity
      style={buttonStyles()}
    >
      <FontAwesome
        name="shopping-basket"
        size={25}
        color={Colors.WHITE}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.YELLOW,
    padding: 10,
    borderRadius: 15
  },
  rounded: {
    borderRadius: 100
  }
})

export default BasketButton;