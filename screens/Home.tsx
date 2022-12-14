import { FlatList, SafeAreaView, View } from "react-native";
import { useState } from "react";
import { FocusedStatusBar, HomeHeader, NFTCard } from "../components";
import { COLORS, NFTData } from "../utils";

type Props = {};

const Home = (props: Props) => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value: any) => {
    if (!value.length) return setNftData(NFTData);
    const filteredData = nftData.filter((data) =>
      data.name.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredData) setNftData(filteredData);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar mode="light" backgroundColor={COLORS.primary} />
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ backgroundColor: COLORS.primary, height: 300 }}></View>
          <View style={{ backgroundColor: "#98C1D9", flex: 1 }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
