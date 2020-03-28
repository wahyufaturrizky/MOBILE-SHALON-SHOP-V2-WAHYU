import React from "react";

import {
  View,
  ScrollView
} from "react-native";

import TitleSection from "../../atoms/TitleSection";
import ListBookingDate from "../../molecules/ListBookingDate";
import ListDiscountHour from "../../molecules/ListDiscountHour";

const DailyDealsComponent = () => {
  return (
    <View>
      <TitleSection TextTitleSection="Daily Deals" />

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ListBookingDate />
      </ScrollView>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ListDiscountHour />
      </ScrollView>
    </View>
  )
}

export default DailyDealsComponent;