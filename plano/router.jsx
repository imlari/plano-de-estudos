import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/pages/Home";
import { MyPlans } from "./src/pages/MyPlans";
import { NavigationContainer } from "@react-navigation/native";
import { AddPlans } from "./src/pages/AddPlans";

export const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="/" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Meus Planos" component={MyPlans} />
        <Stack.Screen name="Adicionar Plano" component={AddPlans} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
