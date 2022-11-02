import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Bid } from "../typing";
import { COLORS, FONTS, SIZES } from "../utils";
import { EthPrice } from "./SubInfo";

type Props = {
  bid: Bid;
};

const DetailsBids = ({ bid }: Props) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
        }}
      />

      <View>
        <Text
          style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Bid Placed by {bid.name}
        </Text>
        <Text
          style={{
            fontSize: SIZES.small - 2,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          Bid Placed by {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
};

export default DetailsBids;

const styles = StyleSheet.create({});
