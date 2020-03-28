import React from "react";
import { Platform } from "react-native";

import {
  ListItem,
  Left,
  Icon,
  Right,
  Text,
  Body,
  H2
} from "native-base";

const TitleShop = (props) => {
  return (
    <ListItem style={{marginLeft: 0}}>
      <Left>
        <Body style={{marginLeft: 0}}>
          <H2 style={{fontWeight: "bold"}}>
            {props.nameShop}
          </H2>
          <Text style={{color: "#FF3466"}}>
            {props.rateShop}
            <Text style={{fontWeight: "100", color: "#FF3466"}}>58 Reviews</Text>
          </Text>
        </Body>
      </Left>
      <Right>
        <Icon style={{color: "#FF3466", fontSize: 40, width: 40, height: 40}} type="MaterialIcons" name="location-on" />
      </Right>
    </ListItem>
  )
}

export default TitleShop;