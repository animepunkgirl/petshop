import React, {FC} from 'react';
import {LinearGradient} from "expo-linear-gradient";
import { Colors } from "../../../config";
import { FontAwesome } from '@expo/vector-icons'
import {View} from "react-native";

interface Props {
  type: "pink" | "custom"
  color?: string
}

const Background: FC<Props> = ({children, type, color}) => {
  if(type === "pink")
    return (
      <LinearGradient
        colors={[Colors.PINK, Colors.LIGHTPINK]}
        style={{
          flex: 1
        }}
      >
        {children}
      </LinearGradient>
    );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color
      }}
    >
      {children}
    </View>
  );
};

export default Background;