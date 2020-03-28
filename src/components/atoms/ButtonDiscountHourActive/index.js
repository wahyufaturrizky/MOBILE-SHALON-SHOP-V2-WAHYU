import React from "react";

import {
  Text,
  Body,
  Button
} from "native-base";

const ButtonDiscountHourActive = (props) => {
  return (
    <Button bordered
      style={{marginTop: 18, backgroundColor: "#FF3466", borderColor: "#FF3466", width: 90, height: 70, borderRadius: 8, padding: 8, marginRight: 16}}
      >

      <Body>
        <Text style={{color: "#fff"}}>{props.Time}</Text>
        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 24}}>{props.Discount}</Text>
      </Body>
    </Button>
  )
}

export default ButtonDiscountHourActive;