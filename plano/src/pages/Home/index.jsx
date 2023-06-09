import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
export const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={homeStyles.HomeContainer}>
      <View style={homeStyles.ButtonContainer}>
        <TouchableOpacity style={homeStyles.ButtonHome}>
          <Text style={homeStyles.ButtonText}>Adicionar plano de estudos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.ButtonHome} onPress={() =>
          navigation.navigate("Meus Planos")} >
          <Text style={homeStyles.ButtonText}>Meus planos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.ButtonHome}>
          <Text style={homeStyles.ButtonText}>Editar plano</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.ButtonHome}>
          <Text style={homeStyles.ButtonText}>Excluir plano</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonContainer: {
    margin: "50px",
  },
  ButtonHome: {
    backgroundColor: "#00c9bc",
    height: "67px",
    width: "315px",
    alignItems: "center",
    justifyContent: "center",
    margin: "6px",
    borderRadius: "32px",
  },
  ButtonText: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "18px",
    color: "#ffffff",
  }
})