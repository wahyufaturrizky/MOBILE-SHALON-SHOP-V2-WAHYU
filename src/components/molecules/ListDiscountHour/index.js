import React from "react";

import {View} from "react-native";

import ButtonDiscountHour from "../../atoms/ButtonDiscountHour";
import ButtonDiscountHourActive from "../../atoms/ButtonDiscountHourActive";

const ListDiscountHour = () => {
  return (
    <View style={{flexDirection: "row", marginTop: 24}}>
      <ButtonDiscountHour Time="12:00pm" Discount="-45%" />
      <ButtonDiscountHourActive Time="1:00pm" Discount="-55%" />
      <ButtonDiscountHour Time="2:00pm" Discount="-49%" />
      <ButtonDiscountHour Time="3:00pm" Discount="-59%" />
      <ButtonDiscountHour Time="4:00pm" Discount="-69%" />
      <ButtonDiscountHour Time="5:00pm" Discount="-79%" />
      <ButtonDiscountHour Time="6:00pm" Discount="-89%" />
    </View>
  )
}

export default ListDiscountHour;