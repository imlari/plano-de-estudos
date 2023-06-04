import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/pages/Home";

export const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
