import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../utils";

type Props = {
  imgUrl: string;
  right: number;
  top: number;
};

export const CircleButton = ({ imgUrl, handlePress, ...props }: Props) => {
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
