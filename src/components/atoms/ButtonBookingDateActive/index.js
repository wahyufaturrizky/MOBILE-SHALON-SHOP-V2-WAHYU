import React from "react";

import {
  Text,
  Body,
  Button
} from "native-base";

const ButtonBookingDateActive = (props) => {
  return (
    <Button bordered
      style={{marginTop: 18, borderColor: "#FF3466", width: 60, height: 80, borderRadius: 8, padding: 8, marginRight: 16}}
      >

      <Body>
        <Text style={{color: "#FF3466"}}>{props.Day}</Text>
        <Text style={{color: "#FF3466", fontWeight: "bold", fontSize: 24}}>{props.Date}</Text>
        <Text style={{color: "#FF3466"}}>{props.Month}</Text>
      </Body>
    </Button>
  )
}

export default ButtonBookingDateActive;