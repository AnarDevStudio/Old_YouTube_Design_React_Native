import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  return (
    <View className="h-16 bg-red-600 flex-row items-center justify-between px-4 w-full">
      
      <Text className="font-bold text-xl text-white">
        YouTube
      </Text>

      <View className="flex-row items-center gap-6">
        <FontAwesome name="video-camera" size={20} color="white" />
        <FontAwesome name="search" size={20} color="white" />

        <View className="w-8 h-8 rounded-full overflow-hidden">
          <Image
            source={{ uri: "https://avatars.githubusercontent.com/u/105328380?v=4" }}
            className="w-full h-full"
          />
        </View>
      </View>
    </View>
  );
}