import React, { Component } from "react";

import Carousel from 'react-native-banner-carousel';

import { 
  Image,
  View,
  Dimensions } from 'react-native';

import {
  Header,
  Button,
  Icon,
  Left,
  Right,
} from "native-base";

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
  "../../../assets/img/banner01.jpg",
  "../../../assets/img/banner01.jpg",
  "../../../assets/img/banner01.jpg"
];

class HeaderCaouselBanner extends Component {
  renderPage(image, index) {
		return (
				<View key={index}>
						<Image style={{ width: BannerWidth, height: BannerHeight }} source={require("../../../assets/img/banner01.jpg",)} />
						<View style={{width: '100%', height: 280, borderRadius: 4, backgroundColor: 'black', position: 'absolute', opacity: 0.5}}></View>
				</View>
		);
  }
  render() {
    return (
    <View>
      <Carousel autoplay autoplayTimeout={5000} loop index={0} pageSize={BannerWidth}>
        {images.map((image, index) => this.renderPage(image, index))}
      </Carousel>
  
      <View style={{position: "absolute",left: 8, right: 8}}>
        <Header style={{paddingLeft: 0}} transparent androidStatusBarColor="#fff">
          <Left>
            <Button style={{paddingLeft: 0}} transparent>
              <Icon style={{color: "#fff"}} name="ios-arrow-back" />
            </Button>
          </Left>
  
          <Right>
            <Button style={{paddingRight: 0}} transparent onPress={()=> this.props.navigation.goBack()}>
              <Icon style={{color: "#fff"}} name="md-share" />
              <Icon style={{color: "#fff", marginLeft: 18, paddingRight: 0}} type="MaterialIcons"
                name="favorite-border" />
            </Button>
          </Right>
        </Header>
      </View>
    </View>
    )
  }
}

export default HeaderCaouselBanner;