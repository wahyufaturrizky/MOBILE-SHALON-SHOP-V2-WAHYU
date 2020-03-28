import React from "react";
import { Root } from "native-base";
import {createStackNavigator, createAppContainer } from "react-navigation";
import Anatomy from "./screens/anatomy/";

const AppNavigator = createStackNavigator(
  {
    Anatomy: { screen: Anatomy },
  },
  {
    initialRouteName: "Anatomy",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;
