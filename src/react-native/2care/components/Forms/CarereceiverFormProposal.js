import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const CarereceiverFormProposal = () => {
  const [formData, setFormData] = useState({
    date: "",
    start_time: "",
    end_time: "",
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const CustomLabel = ({ text }) => {
    return (
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.proposalText}>Monte sua proposta</Text>
        <View style={styles.inputContainer}>
          <CustomLabel text="Data" />
          <TextInput
            style={styles.input}
            value={formData.date}
            onChangeText={(text) => handleChange("date", text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inlineInputContainer}>
            <View style={styles.inlineInput}>
              <CustomLabel text="Hora inicial" />
              <TextInput
                style={styles.input}
                value={formData.start_time}
                onChangeText={(text) => handleChange("start_time", text)}
              />
            </View>
            <View style={styles.inlineInput}>
              <CustomLabel text="Hora final" />
              <TextInput
                style={styles.input}
                value={formData.end_time}
                onChangeText={(text) => handleChange("end_time", text)}
              />
            </View>
          </View>
        </View>
        
        <View style={styles.valueContainer}>
          <Text style={styles.labelText}>Valor por hora do cuidador:</Text>
          <Text style={styles.valueText}>R$200,00</Text>
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.labelText}>Total de horas:</Text>
          <Text style={styles.infoText}>0 horas</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.labelText}>Valor total a pagar:</Text>
          <Text style={styles.infoText}>R$00,00</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable onPress={() => console.log("Enviar proposta")}>
          <Text style={styles.buttonText}>Enviar proposta</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "10%",
    marginTop: 40,
    alignItems: "center",
    width: "100%",
  },
  form: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  proposalText: {
    color: "#000000",
    fontSize: 20,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    position: "relative",
    width: "100%",
  },
  inlineInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inlineInput: {
    width: "48%",
  },
  labelContainer: {
    position: "absolute",
    backgroundColor: "#D2DAC3",
    paddingLeft: 2,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 8,
    top: -10,
    left: 10,
    opacity: 0.7,
    height: "auto",
    textAlign: "center",
    width: "auto",
    borderRadius: 5,
  },
  labelText: {
    color: "#000000",
    fontSize: 13,
    lineHeight: 2,
    fontWeight: 400,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 3,
  },
  input: {
    width: "100%",
    borderWidth: 0,
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    backgroundColor: "white",
    fontSize: 17,
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#ED8733",
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
    width: 170,
    marginBottom: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  valueText: {
    color: "#000000",
    fontSize: 13,
    lineHeight: 2,
    fontWeight: 400,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    color: "#000000",
    fontSize: 13,
    lineHeight: 2,
    fontWeight: 400,
  },
});

export default CarereceiverFormProposal;