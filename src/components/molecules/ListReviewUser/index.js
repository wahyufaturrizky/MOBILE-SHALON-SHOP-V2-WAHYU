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

const pratik = require("../../../../assets/contacts/pratik.png");
const sanket = require("../../../../assets/contacts/sanket.png");
const megha = require("../../../../assets/contacts/megha.png");
const atul = require("../../../../assets/contacts/atul.png");
const saurabh = require("../../../../assets/contacts/saurabh.png");
const varun = require("../../../../assets/contacts/varun.png");

const datas = [
  {
    img: pratik,
    text: "Kumar Pratik",
    note: "★★★★★",
    time: "14 Nov 2019",
    comment: "The place was clean great.",
    social: " Review from Google"
  },
  {
    img: sanket,
    text: "Kumar Sanket",
    note: "★★★★★",
    time: "14 Nov 2019",
    comment: "The place was clean great.",
    social: " Review from Google"
  },
  {
    img: megha,
    text: "Megha",
    note: "★★★★★",
    time: "14 Nov 2019",
    comment: "The place was clean great.",
    social: " Review from Google"
  },
  {
    img: atul,
    text: "Atul Ranjan",
    note: "★★★★★",
    time: "14 Nov 2019",
    comment: "The place was clean great.",
    social: " Review from Google"
  },
  {
    img: saurabh,
    text: "Saurabh Sahu",
    note: "★★★★★",
    time: "14 Nov 2019",
    comment: "The place was clean great.",
    social: " Review from Google"
  },
  {
    img: varun,
    text: "Varun Sahu",
    note: "★★★★★",
    time: "14 Nov 2019",
    comment: "The place was clean great.",
    social: " Review from Google"
  }
];

const ListReviewUser = (props) => {
  return (
    <View>
      <ListItem style={{marginLeft: 0, marginTop: 24}}>
        <Left>
          <Body style={{marginLeft: 0}}>
            <H2 style={{fontWeight: "bold"}}>
              Reviews ({props.TotalReview})
            </H2>
          </Body>
        </Left>
        <Right>
          <Text style={{fontWeight: "bold", color: "#FF3466", fontSize: 14}}>
            {props.TotalRating}
          </Text>
        </Right>
      </ListItem>
  
      <List dataArray={datas} renderRow={data=>
        <ListItem style={{marginLeft: 0}} avatar>
          <Left>
            <Thumbnail small source={data.img} />
          </Left>
  
          <Body>
            <Text>
              {data.text}
            </Text>
            <Text style={{color: "#FF3466"}} numberOfLines={1} note>
              {data.note}
            </Text>
            <Text style={{marginTop: 8}} numberOfLines={1} note>
              {data.comment}
            </Text>
            <Text style={{fontSize:12, color: "#BDBDBD", marginTop: 8}} numberOfLines={1} note>
              <Icon style={{fontSize:12, color: "#BDBDBD"}} type="AntDesign" name="google" />
              {data.social}
            </Text>
          </Body>

          <Right>
            <Text note>
              {data.time}
            </Text>
          </Right>
        </ListItem>}
        />

        <Button full bordered style={{marginTop: 24, borderColor: "#FF3466", borderRadius: 4}}>
          <Text style={{color: "#FF3466", fontWeight: "bold"}}>Views all reviews</Text>
        </Button>
    </View>
  )
}

export default ListReviewUser;