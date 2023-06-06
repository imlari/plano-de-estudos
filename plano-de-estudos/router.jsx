import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/pages/Home";
import { MyPlans } from "./src/pages/MyPlans";
import { NavigationContainer } from "@react-navigation/native";

export const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="/" component={Home} />
        <Stack.Screen name="MyPlans" component={MyPlans} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
