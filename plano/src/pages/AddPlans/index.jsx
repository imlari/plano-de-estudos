import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export const AddPlans = () => {

    const [codigo, setCode] = useState("");
    const [field, setField] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const navigation = useNavigation();

    const handleInputChange = (setState) => (state) => {
        setState(state);
    }

    const handleAddPlan = () => {
    
        console.log("adiconando");
    
    const planDate = {
      codigo,
      field,
      name,
      date,
      description,
    };

    axios.post('https://63d1757ed5f0fa7fbdcbd27f.mockapi.io/studies-plans', planDate)
      .then(response => {
          console.log('Plano adicionado com sucesso:', response.data);
          navigation.goBack();
      })
      .catch(error => {
        console.error('Erro ao adicionar plano:', error);
      });
    };
    
    return (
        <View style={addPlansStyles.AddPlansContainer}>
            <Text style={addPlansStyles.AddPlansTitle}>Plano de estudo</Text>
            <View style={addPlansStyles.Content}>
                <TextInput style={addPlansStyles.PlanItem} placeholder="Código" onChangeText={handleInputChange(setCode)}
        value={codigo}/>
                <TextInput style={addPlansStyles.PlanItem} placeholder="Name" onChangeText={handleInputChange(setName)}
        value={name}/>
                <TextInput style={addPlansStyles.PlanItem} placeholder="Área" onChangeText={handleInputChange(setField)}
        value={field}/>
                <TextInput style={addPlansStyles.PlanItem} placeholder="Data de criação" onChangeText={handleInputChange(setDate)}
        value={date} />
                <TextInput style={addPlansStyles.PlanItem} placeholder="Descrição" onChangeText={handleInputChange(setDescription)}
        value={description} />
            </View>

            <View style={addPlansStyles.ButtonContainer}>

            <TouchableOpacity style={addPlansStyles.AddPlanButton} onPress={handleAddPlan} >
                <Text style={addPlansStyles.ButtonText}>Adicionar</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const addPlansStyles = StyleSheet.create({
  AddPlansContainer: {
        flex: 1,
        width: "100%",
        paddingHorizontal: "40px",
        backgroundColor: "#fff",
    },
    AddPlansTitle: {
        fontSize: "28px",
        fontWeight: 600,
        color: "#007B73",
    },
    Content: {
        paddingTop: "30px",
        gap: "14px",
    },
    PlanItem: {
        width: "100%",
        height: "67px",
        backgroundColor: "#FBFAFA",
        color: "#D1D1D1",
        borderRadius: "32px",
        flexDirection: "row",
        paddingLeft: "30px",
        fontSize: "18px",
        alignItems: "center",
        boxShadow: "0 0px 2px rgba(0,0,0, 0.25)"
    },
    AddPlanButton: {
        justifySelf: "center",
        backgroundColor: "#00c9bc",
        height: "60px",
        width: "240px",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "30px",
    },
        ButtonText: {
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "22px",
        color: "#ffffff",
    },
    ButtonContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: "30px",
        }
})