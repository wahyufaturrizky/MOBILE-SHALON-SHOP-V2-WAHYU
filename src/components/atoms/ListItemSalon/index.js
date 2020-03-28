import React from "react";

import {
  Text,
  Body,
  ListItem,
  Left,
  Icon,
  Right
} from "native-base";

const ListItemSalon = (props) => {
  return (
    <ListItem style={{marginLeft: 0,  marginTop: 16}} icon>
      <Left>
        <Icon style={{fontSize: 20}} type={props.typeIcon} name={props.nameIcon} />
      </Left>

      <Body>
        <Text style={props.colorLabel}>{props.LabelIcon}</Text>
      </Body>
      <Right />
    </ListItem>
  )
}

export default ListItemSalon;