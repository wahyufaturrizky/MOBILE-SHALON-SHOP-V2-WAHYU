import React from "react";

import {
  Text,
  Body,
  Button
} from "native-base";

const ButtonBookingDate = (props) => {
  return (
    <Button bordered
      style={{marginTop: 18, borderColor: "#BDBDBD", width: 60, height: 80, borderRadius: 8, padding: 8, marginRight: 16}}
      >

      <Body>
        <Text style={{color: "#BDBDBD"}}>{props.Day}</Text>
        <Text style={{color: "#BDBDBD", fontWeight: "bold", fontSize: 24}}>{props.Date}</Text>
        <Text style={{color: "#BDBDBD"}}>{props.Month}</Text>
      </Body>
    </Button>
  )
}

export default ButtonBookingDate;