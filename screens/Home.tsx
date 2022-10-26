import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FocusedStatusBar } from "../components";
import { COLORS } from "../utils";

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
