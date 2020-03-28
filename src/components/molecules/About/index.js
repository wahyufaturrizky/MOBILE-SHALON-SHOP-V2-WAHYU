import React from "react";

import {
  View,
  StyleSheet,
} from "react-native";

import {Text} from "native-base";

import TitleSection from "../../atoms/TitleSection";
import ListItemSalon from "../../atoms/ListItemSalon";
import CardComponent from "../../atoms/CardComponent";

const About = () => {
  return (
    <View>
      <TitleSection TextTitleSection="About" />

      <Text style={{marginTop: 18, color: "#828282"}}>
        Living up to our name Kit and Kito the team is higly energetic and creative.
        We believe that if it matters to you, it matter to us. Keeping up to speed with
        the market lates trends, Kit and Kito Salon recognizes the need for constant
        improvements, Our team receives regular training from hairdresses all
        around the.. <Text style={{color: "#FF3466",fontWeight: "100" }}> Read more</Text>
      </Text>

      <CardComponent />

      <ListItemSalon LabelIcon="03-13 Bugis Junction 200 Victoria St Singapore 188021" colorLabel={stylesMe.Gray}
        nameIcon="shop" typeIcon="Entypo" />
      <ListItemSalon LabelIcon="11am - 9.30pm (Today)" colorLabel={stylesMe.Pink} nameIcon="clockcircle"
        typeIcon="AntDesign" />
      <ListItemSalon LabelIcon="+65 6644 9876" colorLabel={stylesMe.Pink} nameIcon="phone" typeIcon="Entypo" />
      <ListItemSalon LabelIcon="www.kitandkitosalon.com" colorLabel={stylesMe.Pink} nameIcon="web"
        typeIcon="MaterialCommunityIcons" />
      <ListItemSalon LabelIcon="Credit Cards, Fave Pay, Grab Pay and Cash accepted" colorLabel={stylesMe.Gray}
        nameIcon="payment" typeIcon="MaterialIcons" />
    </View>
  )
}

const stylesMe = StyleSheet.create({
  Pink: {
    color: "#FF3466"
  },
  Gray: {
    color: "#828282"
  }
});

export default About;