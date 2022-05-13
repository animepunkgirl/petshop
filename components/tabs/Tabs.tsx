import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Tab} from "@Types/Tab";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {Colors} from "@config";

const tabs: Tab[] = [
  {
    name: "Pet Shop",
    icon: <MaterialIcons name="pets" size={24} color={Colors.WHITE} />
  },
  {
    name: "Messages",
    icon: <Feather name="message-circle" size={24} color={Colors.WHITE} />
  },
  {
    name: "Rating",
    icon: <AntDesign name="staro" size={24} color={Colors.WHITE} />
  },
  {
    name: "Rating2",
    icon: <AntDesign name="staro" size={24} color={Colors.WHITE} />
  }
]

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Pet Shop")
  return (
    <View style={styles.container}>
      {tabs.map(tab =>
        <TouchableOpacity
          key={tab.name}
          style={tab.name === activeTab ? [styles.tab, styles.activeTab] : styles.tab}
          onPress={() => setActiveTab(tab.name)}
        >
          {tab.icon}
        </TouchableOpacity>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DARKBLUE,
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  tab: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: Colors.ORANGE,
    borderRadius: 100,
    position: "relative",
    top: -40
  }
})

export default Tabs;