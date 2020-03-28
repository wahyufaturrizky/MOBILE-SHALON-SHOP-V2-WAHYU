import React from "react";

import { 
  StyleSheet, 
	View } from 'react-native';

import TitleSection from "../../atoms/TitleSection";
import ListItemSalon from "../../atoms/ListItemSalon";

const ViewTheMenu = () => {
  return (
    <View>
      <TitleSection TextTitleSection="View the menu" />
      <ListItemSalon LabelIcon="www.kitandkitosalon.com/menu" colorLabel={stylesMe.Pink} nameIcon="book-open" typeIcon="FontAwesome5" />
    </View>
  )
}

export default ViewTheMenu;

const stylesMe = StyleSheet.create({
  Pink: {
    color: "#FF3466"
  },
  Gray: {
    color: "#828282"
  }
});