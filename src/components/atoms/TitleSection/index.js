import React from "react";

import {H2} from "native-base";

const TitleSection = (props) => {
  return (
    <H2 style={{fontWeight: "bold", marginTop: 24}}>{props.TextTitleSection}</H2>
  )
}

export default TitleSection;