import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./components/Tabs";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView className="flex-1 bg-white">
        <Tabs />
      </SafeAreaView>
    </NavigationContainer>
  );
}