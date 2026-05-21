import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import TredingScreen from "screens/TredingScreen";
import Header from "../components/Header";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function HomeWrapper() {
  return (
    <View className="flex-1">
      <Header />
      <HomeScreen />
    </View>
  );
}

function TrendingWrapper() {
  return (
    <View className="flex-1">
      <Header />
      <TredingScreen />
    </View>
  );
}

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeWrapper}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="home" size={25} color={focused ? "red" : "gray"} />
          ),
        }}
      />

      <Tab.Screen
        name="Trending"
        component={TrendingWrapper}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="fire" size={25} color={focused ? "red" : "gray"} />
          ),
        }}
      />

      <Tab.Screen
        name="Subscriptions"
        component={HomeWrapper}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="video-camera" size={25} color={focused ? "red" : "gray"} />
          ),
        }}
      />

      <Tab.Screen
        name="Library"
        component={HomeWrapper}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="folder" size={25} color={focused ? "red" : "gray"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}