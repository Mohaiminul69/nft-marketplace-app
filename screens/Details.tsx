import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { FlatList, View, Image, Text } from "react-native";
import {
  CircleButton,
  DetailsBids,
  DetailsDesc,
  FocusedStatusBar,
  RectButton,
  SubInfo,
} from "../components";
import { NFTItem } from "../typing";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../utils";

type Props = {
  route: any;
  navigation: any;
};

const DetailsHeader = ({
  data,
  navigation,
}: {
  data: NFTItem;
  navigation: any;
}) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      top={50}
      left={15}
    />
    <CircleButton imgUrl={assets.heart} top={50} right={15} />
  </View>
);

const Details = ({ route, navigation }: Props) => {
  const { data } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <FocusedStatusBar />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={(bid) => <DetailsBids bid={bid.item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bids
                </Text>
              )}
            </View>
          </Fragment>
        )}
      />
    </View>
  );
};

export default Details;
