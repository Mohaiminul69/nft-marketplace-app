import { StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

type Props = {};

const FocusedStatusBar = (props: Props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar style="auto" /> : null;
};

export default FocusedStatusBar;

const styles = StyleSheet.create({});
