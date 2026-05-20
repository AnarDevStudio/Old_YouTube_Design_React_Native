import { ScrollView, View } from "react-native";
import VideoContainer from "./VideoContainer";
// Calisiyir
export default function VideoList() {
  return (
    <View className="w-screen p-2">
        <ScrollView className="w-full">
            <VideoContainer />
            <VideoContainer />
            <VideoContainer />
            <VideoContainer />
            <VideoContainer /> 
            <VideoContainer />
            <VideoContainer />
            <VideoContainer />
        </ScrollView>
    </View>
  );
}