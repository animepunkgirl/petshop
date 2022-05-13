import React, {FC, ReactNode} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {Colors} from "../../config";

interface Props {
  variant: "black",
  title: ReactNode,
  padding: {
    vertical: number,
    horizontal: number
  }
}

const Button: FC<Props> = ({title, variant, padding}) => {

  const underlayColor = () => {
    if(variant === "black")
      return Colors.GRAY
  }

  return (
    <TouchableHighlight
      onPress={() => console.log("Pressed")}
      underlayColor={underlayColor()}
      style={[
          styles.button,
          styles[`${variant}Button`],
          {
            paddingHorizontal: padding.horizontal,
            paddingVertical: padding.vertical
          }
      ]}
    >
      <View>
        <Text style={[styles.title, styles[`${variant}Title`]]}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  },
  title: {
    textAlign: "center"
  },
  blackButton: {
    backgroundColor: Colors.BLUE,
    borderRadius: 50,
  },
  blackTitle: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: "bold"
  }
})

export default Button;