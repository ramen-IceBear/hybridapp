import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import HomeScreen from "./app/screens/HomeScreen";
import DetailScreen from "./app/screens/DetailScreen";
import EditAddParty from "./app/screens/EditAddParty";
import EventListScreen from "./app/screens/EventListScreen";
import SendMailScreen from "./app/screens/SendMailScreen";

const Stack = createNativeStackNavigator();

function App() {
  const [loaded] = useFonts({
    InterBold: require("./app/assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./app/assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./app/assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./app/assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./app/assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Party Plan" component={HomeScreen} />
        <Stack.Screen name="Party Detail" component={DetailScreen} />
        <Stack.Screen name="Edit Add Party" component={EditAddParty} />
        <Stack.Screen name="EventListScreen" component={EventListScreen} />
        <Stack.Screen name="Send Mail" component={SendMailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
