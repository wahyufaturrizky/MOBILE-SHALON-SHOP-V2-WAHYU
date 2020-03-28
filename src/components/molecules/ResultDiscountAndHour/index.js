import React from "react";

import {View} from "react-native";

import {
  ListItem,
  Left,
  Icon,
  Right,
  Text,
  Body,
  H2,
  List,
  Thumbnail,
  Button
} from "native-base";

const ResultDiscountAndHour = (props) => {
  return (
    <ListItem style={{marginLeft: 0, marginTop: 24, borderTopColor: "#E0E0E0", borderTopWidth: 2}} avatar>
      <Left>
        <Icon style={{fontSize: 40, width: 40, height: 40}} name="md-pricetag" />
      </Left>

      <Body>
        <Text style={{fontWeight: "bold", color: "#FF3466"}}>
          {props.ResultDiscount}
          <Text style={{color: "#333333", fontWeight: "200"}}> discount</Text>
        </Text>
        <Text style={{color: "#FF3466", fontWeight: "bold"}} numberOfLines={1} note>
          <Text style={{color:"#333333", fontWeight:"normal"}}>at </Text>{props.ResultTime}
        </Text>
      </Body>

      <Right style={{paddingRight: 0}}>
        <Button full style={{backgroundColor: "#FF3466", borderRadius: 8, width: 150}}>
          <Text style={{color: "#fff", fontWeight: "200"}}>
            Next
          </Text>
        </Button>
      </Right>
    </ListItem>
  )
}

export default ResultDiscountAndHour;