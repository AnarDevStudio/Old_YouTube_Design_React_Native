import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function CategoryList() {
  return (
    <View className="w-screen p-2 flex-row p-2 flex-wrap gap-2">
        <View className="bg-gray-300 w-28 h-8 rounded-full m-2 rounded-l-full flex-row items-center">
            <FontAwesome name="home" size={25} color={"gray"} className="rounded-full bg-red-400 w-10 h-10 items-center text-center"/>
            <Text className="text-xs text-gray-500 pl-3">All</Text>
        </View>
        <View className="bg-gray-300 w-28 h-8 rounded-full m-2 flex-row items-center">
            <FontAwesome name="fire" size={25} color={"gray"} className="rounded-full bg-red-400 w-10 h-10 items-center text-center"/>
            <Text className="text-xs text-gray-500 pl-3">Trending</Text>
        </View>
        <View className="bg-gray-300 w-28 h-8 rounded-full m-2 flex-row items-center">
            <FontAwesome name="gamepad" size={25} color={"gray"} className="rounded-full bg-red-400 w-10 h-10 items-center text-center"/>
            <Text className="text-xs text-gray-500 pl-3">Gaming</Text>
        </View>
        <View className="bg-gray-300 w-28 h-8 rounded-full m-2 flex-row items-center">
            <FontAwesome name="folder" size={25} color={"gray"} className="rounded-full bg-red-400 w-10 h-10 flex items-center text-center"/>
            <Text className="text-xs text-gray-500 pl-3">Folder</Text>
        </View>
    </View>
  );
}