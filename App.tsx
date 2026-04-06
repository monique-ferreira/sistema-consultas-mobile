import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

type Consulta = {
  id: number;
  paciente: string;
  medico: string;
  data: string;
  status: "agendada" | "confirmada" | "cancelada" | "realizada";
};

export default function App() {
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    paciente: "Carlos Andrade",
    medico: "Dr. Roberto Silva",
    data: "28/02/2026",
    status: "agendada",
  });
  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada",
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sistema de Consultas</Text>
      <View style={styles.card}>
        <Text>Paciente: {consulta.paciente}</Text>
        <Text>Medico: {consulta.medico}</Text>
        <Text>Data: {consulta.data}</Text>
        <Text>Status: {consulta.status}</Text>
        { consulta.status === "agendada" && (
          <View style={styles.button}>
            <Button title="Confirmar Consulta" onPress={confirmarConsulta} color={"#91C787"}/>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
    textTransform: "uppercase",
    width: "60%",
    textAlign: "center",
    color: "#91C787"
  },
  card: {
    width: "80%",
    padding: 24,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#d4d4d4"
  },
  button: {
    marginTop: 8,
    borderRadius: 8,
    overflow: "hidden",
  }
});