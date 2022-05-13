import {LinkingOptions} from "@react-navigation/native";

export type RootStackParamList = {
  Shop: undefined,
  ItemInfo: {
    color: string
  }
}

export const LINKS = {
  Shop: "/shop",
  ItemInfo: "/shop/item/:color"
}

const linking: LinkingOptions<any> = {
  prefixes: ['petShop://'],
  config: {
    initialRouteName: "Shop",
    screens: {
      Shop: LINKS.Shop,
      ItemInfo: LINKS.ItemInfo,
    }
  }
}

export default linking
