import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const Details = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
