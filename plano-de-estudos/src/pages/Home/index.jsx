import { useNavigation } from "@react-navigation/native";
import {
  ButtonContainer,
  ButtonHome,
  ButtonText,
  HomeContainer,
  ImageContainer,
} from "./styles";
import { Image } from "react-native";

export const Home = () => {
  const navigation = useNavigation();

  return (
    <HomeContainer>
      <ImageContainer>
        <Image source={require("../../assets/images/IconHome.png")} />
      </ImageContainer>
      <ButtonContainer>
        <ButtonHome>
          <ButtonText>Adicionar plano de estudos</ButtonText>
        </ButtonHome>
        <ButtonHome onPress={() => navigation.navigate("MyPlans")}>
          <ButtonText>Meus planos</ButtonText>
        </ButtonHome>
        <ButtonHome>
          <ButtonText>Editar plano</ButtonText>
        </ButtonHome>
        <ButtonHome>
          <ButtonText>Excluir plano</ButtonText>
        </ButtonHome>
      </ButtonContainer>
    </HomeContainer>
  );
};
