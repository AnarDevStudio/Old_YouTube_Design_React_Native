import { View, Text, Image } from "react-native";

export default function VideoContainer() {
  return (
    <View className="w-full p-2">
        <View className="w-full h-auto aspect-video bg-gray-300 rounded-lg overflow-hidden">
            <Image className="w-full h-full" source={{ uri: "https://i.ytimg.com/vi/sm5Y7Vtuihg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCJDzi4G3VudZfNqPR460A1WC_a2w" }} />
        </View>
        <View className="flex-row items-start gap-2 mt-2">
            <View className="flex-1">
                <Text className="font-bold text-sm">Video Title</Text>
                <Text className="text-xs text-gray-500">Channel Name</Text>
                <Text className="text-xs text-gray-500">1M views · 1 day ago</Text>
            </View>
        </View>
    </View>
  );
}