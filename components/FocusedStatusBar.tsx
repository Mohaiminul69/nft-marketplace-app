import { StyleSheet, Text, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

type Props = {
  backgroundColor: string;
};

const FocusedStatusBar = (props: Props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar backgroundColor="#61dafb" /> : null;
};

export default FocusedStatusBar;

const styles = StyleSheet.create({});
