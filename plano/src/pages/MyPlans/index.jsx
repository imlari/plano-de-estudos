import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export const MyPlans = () => {
   const [plans, setPlans] = useState([]);

  useEffect(() => {
    getPlans();
  }, []);

  const getPlans = () => {
    axios.get('https://63d1757ed5f0fa7fbdcbd27f.mockapi.io/studies-plans')
      .then(response => {
        setPlans(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar planos:', error);
      });
  };
  return (
    <View style={myPlansStyles.MyPlansContainer}>
      <Text style={myPlansStyles.PlanTitle}>Meus planos</Text>
      <View style={myPlansStyles.Content}>
        {plans.map(plan => (
          <View style={myPlansStyles.PlanItem} key={plan.id}>
            <Text style={myPlansStyles.NamePlan}>{plan.name}</Text>
            <Text style={myPlansStyles.Date}>{plan.date}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};


const myPlansStyles = StyleSheet.create({
  MyPlansContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: "20px",
    backgroundColor: "#fff",
  },
  Content: {
    paddingTop: "40px",
    gap: "14px",
  },
  PlanTitle: {
    fontSize: "28px",
    fontWeight: 600,
    color: "#007B73",
  },
  PlanItem: {
    width: "100%",
    height: "64px",
    backgroundColor: "#00C9BC",
    borderRadius: "8px",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "20px",
    alignItems: "center",
    boxShadow: "0 4px 4px rgba(0,0,0, 0.25)"
  },
  NamePlan: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: 600,
  },
  Date: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: 600,
  }
})