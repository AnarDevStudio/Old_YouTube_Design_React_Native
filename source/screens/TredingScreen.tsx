import { View, Text } from "react-native";
import CatagoreList from "../components/CatagoreList";
import  VideoList from "../components/VideoList";

export default function TredingScreen() {
  return (
    <View className="w-screen">
      <CatagoreList />
      <VideoList />
    </View>
  );
}