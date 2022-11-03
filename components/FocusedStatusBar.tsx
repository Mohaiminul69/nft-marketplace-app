import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

type Props = {
  mode: string;
};

const FocusedStatusBar = ({ mode }: Props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar style={mode} /> : null;
};

export default FocusedStatusBar;
