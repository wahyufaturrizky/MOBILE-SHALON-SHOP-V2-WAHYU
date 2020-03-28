import React from "react";

import {
  Text,
  Body,
  Button
} from "native-base";

const ButtonDiscountHour = (props) => {
  return (
    <Button bordered
      style={{marginTop: 18, borderColor: "#BDBDBD", width: 90, height: 70, borderRadius: 8, padding: 8, marginRight: 16}}
      >

      <Body>
        <Text style={{color: "#FF3466"}}>{props.Time}</Text>
        <Text style={{color: "#FF3466", fontWeight: "bold", fontSize: 24}}>{props.Discount}</Text>
      </Body>
    </Button>
  )
}

export default ButtonDiscountHour;