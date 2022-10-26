import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FocusedStatusBar, HomeHeader } from "../components";
import { COLORS, NFTData } from "../utils";

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
