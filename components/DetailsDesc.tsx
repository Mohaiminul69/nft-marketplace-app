import { Text, View } from "react-native";
import React, { Fragment, useState } from "react";
import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, FONTS, SIZES } from "../utils";
import { NFTItem } from "../typing";

type Props = { data: NFTItem };

const DetailsDesc = ({ data }: Props) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <Fragment>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>

      <View
        style={{
          marginVertical: SIZES.extraLarge * 1.5,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              onPress={() => {
                if (readMore) setText(data.description.slice(0, 100));
                else setText(data.description);
                setReadMore(!readMore);
              }}
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
            >
              {readMore ? " Show Less" : " ReadMore"}
            </Text>
          </Text>
        </View>
      </View>
    </Fragment>
  );
};

export default DetailsDesc;
