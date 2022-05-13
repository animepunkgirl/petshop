import React, {FC} from 'react';
import { AntDesign } from '@expo/vector-icons';
import {Colors} from "@config";

interface Props {
  itemId: string
}

const MakeFavorite: FC<Props> = ({ itemId }) => {
  const isFavorite = false

  if(isFavorite)
    return <AntDesign name="heart" size={27} color={Colors.PINK} />

  return <AntDesign name="hearto" size={27} color={Colors.GRAY} />
};

export default MakeFavorite;