import React, { Component } from "react";

import {ScrollView} from "react-native";
import {
  Container,
  Content
} from "native-base";

import styles from "./styles";

// Components
import TitleShop from "../../components/molecules/TitleShop";
import ListReviewUser from "../../components/molecules/ListReviewUser";
import ResultDiscountAndHour from "../../components/molecules/ResultDiscountAndHour";
import ProviderComponent from "../../components/molecules/ProviderComponent";
import ViewTheMenu from "../../components/molecules/ViewTheMenu";
import About from "../../components/molecules/About";
import DailyDealsComponent from "../../components/molecules/DailyDealsComponent";
import ListTabMenu from "../../components/molecules/ListTabMenu";
import HeaderCaouselBanner from "../../components/molecules/HeaderCaouselBanner";



class Anatomy extends Component {

  render() {
    return (
      <Container style={styles.container}>

        <ScrollView>

          <HeaderCaouselBanner />

          <Content padder>
            <TitleShop nameShop="Kit & Salon" rateShop="★★★★★ " />

            <ListTabMenu />

            <DailyDealsComponent />

            <ProviderComponent />

            <ViewTheMenu />
  
            <About />

            <ListReviewUser TotalReview="54" TotalRating="★★★★★" />

            <ResultDiscountAndHour ResultDiscount="55%" ResultTime="12:00pm" />
          </Content>

        </ScrollView>
      </Container>
    );
  }
}

export default Anatomy;
