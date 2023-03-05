import React from "react";
import { numberFormat } from "../../helpers/format";
import { Text } from "../global-styles-module";
import { CardContent } from "./styles-module";

export const Card = (props) => {
  const value = numberFormat(props.value);

  return (
    <div>
      <CardContent padding="16px">
        <Text size="16px" weight="400" mLeft="16px">
          {props.title}
        </Text>
        <Text size="24px" weight="600" mLeft="16px" lineHeight="0px" color="#263238">
          {value}
        </Text>
      </CardContent>
    </div>
  );
}

export default Card;
