import React from "react";

import {
  Tabs,
  ScrollableTab,
  Tab
} from "native-base";

const ListTabMenu = () => {
  return (
    <Tabs tabBarUnderlineStyle={{backgroundColor: "#FF3466"}} renderTabBar={()=>
      <ScrollableTab />}>
      <Tab activeTabStyle={{backgroundColor: '#fff'}} tabStyle={{backgroundColor: '#fff'}} textStyle={{color: '#BDBDBD'}} activeTextStyle={{color: '#FF3466', fontWeight: 'bold'}} heading="Hair">

      </Tab>
      <Tab activeTabStyle={{backgroundColor: '#fff'}} tabStyle={{backgroundColor: '#fff'}} textStyle={{color: '#BDBDBD'}} activeTextStyle={{color: '#FF3466', fontWeight: 'bold'}} heading="Nail">

      </Tab>
      <Tab activeTabStyle={{backgroundColor: '#fff'}} tabStyle={{backgroundColor: '#fff'}} textStyle={{color: '#BDBDBD'}} activeTextStyle={{color: '#FF3466', fontWeight: 'bold'}} heading="Face">

      </Tab>
      <Tab activeTabStyle={{backgroundColor: '#fff'}} tabStyle={{backgroundColor: '#fff'}} textStyle={{color: '#BDBDBD'}} activeTextStyle={{color: '#FF3466', fontWeight: 'bold'}} heading="Message">

      </Tab>
      <Tab activeTabStyle={{backgroundColor: '#fff'}} tabStyle={{backgroundColor: '#fff'}} textStyle={{color: '#BDBDBD'}} activeTextStyle={{color: '#FF3466', fontWeight: 'bold'}} heading="Ear">

      </Tab>
    </Tabs>
  )
}

export default ListTabMenu;