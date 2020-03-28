import React from "react";

import {View} from "react-native";

import ButtonBookingDate from "../../atoms/ButtonBookingDate";
import ButtonBookingDateActive from "../../atoms/ButtonBookingDateActive";

const ListBookingDate = () => {
  return (
    <View style={{flexDirection: "row"}}>
      <ButtonBookingDateActive Day="Fri" Date="22" Month="OCT" />
      <ButtonBookingDate Day="Sat" Date="23" Month="OCT" />
      <ButtonBookingDate Day="Sun" Date="24" Month="OCT" />
      <ButtonBookingDate Day="Mon" Date="25" Month="OCT" />
      <ButtonBookingDate Day="Tue" Date="26" Month="OCT" />
      <ButtonBookingDate Day="Thu" Date="27" Month="OCT" />
      <ButtonBookingDate Day="Wed" Date="28" Month="OCT" />
    </View>
  )
}

export default ListBookingDate;