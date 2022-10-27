import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { NFTItem } from "../typing";
import { assets, COLORS, SHADOWS, SIZES } from "../utils";
import { CircleButton } from "../components";

type Props = {
  data: NFTItem;
};

const NFTCard = ({ data }: Props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        margin: SIZES.base,
        marginBottom: SIZES.extraLarge,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
    </View>
  );
};

export default NFTCard;

const styles = StyleSheet.create({});
