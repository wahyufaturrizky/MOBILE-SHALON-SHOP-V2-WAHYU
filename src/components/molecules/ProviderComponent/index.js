import React from "react";

import {View} from "react-native";

import {Text} from "native-base";

import TitleSection from "../../atoms/TitleSection";

const ProviderComponent = () => {
  return (
    <View>
      <TitleSection TextTitleSection="Provider's Condition" />

      <Text style={{marginTop: 24, color: "#828282"}}>
        Promotion discount applied to all services except blow
        and dry directors cut. All services includes wash and blow.
      </Text>
      <Text style={{marginTop: 18, color: "#828282"}}>
        We will hold appointment for 15...<Text style={{color: "#FF3466",fontWeight: "100" }}> Read more</Text>
      </Text>
    </View>
  )
}

export default ProviderComponent;