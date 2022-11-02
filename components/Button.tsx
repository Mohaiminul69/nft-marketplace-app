import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../utils";

type CircleButtonProps = {
  imgUrl: string;
  right?: number;
  top?: number;
  left?: number;
  handlePress?: any;
};
type RectButtonProps = {
  minWidth: number;
  fontSize: number;
  handlePress?: any;
};

export const CircleButton = ({
  imgUrl,
  handlePress,
  ...props
}: CircleButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};
export const RectButton = ({
  minWidth,
  fontSize,
  handlePress,
  ...props
}: RectButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
