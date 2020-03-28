import React from "react";

import {
  Image
} from "react-native";

import {
  Card,
  CardItem,
  
} from "native-base";

import GImage from "../../../assets/img/googleMap.png";

const CardComponent = (props) => {
  return (
    <Card style={{marginTop: 16}}>
      <CardItem cardBody>
        <Image style={{
                      resizeMode: "cover",
                      width: null,
                      height: 200,
                      flex: 1
                    }} source={GImage} />
      </CardItem>
    </Card>
  )
}

export default CardComponent;