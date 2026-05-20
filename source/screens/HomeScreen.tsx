import { View, Text, ScrollView } from "react-native";

import VideoList from "../components/VideoList";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center w-screen">
      <ScrollView className="w-full">
        <VideoList />
      </ScrollView>
    </View>
  );
}