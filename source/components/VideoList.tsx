import { FlatList, View } from "react-native";
import VideoContainer from "./VideoContainer";

export default function VideoList() {
  const videos = Array.from({ length: 8 }, (_, i) => ({
    id: i.toString(),
  }));

  return (
    <View className="flex-1 p-2">
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VideoContainer />
        )}
      />
    </View>
  );
}