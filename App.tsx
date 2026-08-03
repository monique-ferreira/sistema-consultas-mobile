import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Especialidade } from "./src/types/especialidade";
import { Paciente } from "./src/types/paciente";
import { listarPacientes } from "./src/services/pacienteService";
import { Medico } from "./src/interfaces/medico";
import { listarMedicos } from "./src/services/medicoService";
import { Consulta } from "./src/interfaces/consulta";

export default function App() {
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    try {
      setCarregando(true);
      setErro(null);

      const [listaMedicos, listaPacientes] = await Promise.all([
        listarMedicos(),
        listarPacientes(),
      ]);

      setMedicos(listaMedicos);
      setPacientes(listaPacientes);
    } catch (error) {
      setErro(
        "Não foi possível carregar os dados.\nVerifique se o backend está rodando em http://localhost:8080"
      );
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <FlatList
        contentContainerStyle={styles.scrollContent}
        data={[]}
        renderItem={null}
        ListHeaderComponent={
          <>
            {/* Cabeçalho */}
            <View style={styles.header}>
              <Text style={styles.titulo}>Sistema de Consultas</Text>
              <Text style={styles.subtitulo}>Dados do Backend</Text>
            </View>

            {/* Indicador de carregamento */}
            {carregando && (
              <ActivityIndicator
                size="large"
                color="#fff"
                style={{ marginTop: 40 }}
              />
            )}

            {/* Mensagem de erro */}
            {erro && (
              <View style={styles.erroContainer}>
                <Text style={styles.erroTexto}>{erro}</Text>
              </View>
            )}

            {/* Lista de Médicos */}
            {!carregando && !erro && (
              <>
                <Text style={styles.secaoTitulo}>
                  👨‍⚕️ Médicos ({medicos.length})
                </Text>
                {medicos.map((medico) => (
                  <View key={medico.id} style={styles.card}>
                    <Text style={styles.cardNome}>{medico.nome}</Text>
                    <Text style={styles.cardInfo}>CRM: {medico.crm}</Text>
                    <Text style={styles.cardInfo}>
                      {medico.especialidade?.nome ?? " - "}
                    </Text>
                    <View
                      style={[
                        styles.badge,
                        medico.ativo ? styles.badgeAtivo : styles.badgeInativo,
                      ]}
                    >
                      <Text style={styles.badgeTexto}>
                        {medico.ativo ? "Ativo" : "Inativo"}
                      </Text>
                    </View>
                  </View>
                ))}

                {/* Lista de Pacientes */}
                <Text style={[styles.secaoTitulo, { marginTop: 24 }]}>
                  👤 Pacientes ({pacientes.length})
                </Text>
                {pacientes.map((paciente) => (
                  <View key={paciente.id} style={styles.card}>
                    <Text style={styles.cardNome}>{paciente.nome}</Text>
                    <Text style={styles.cardInfo}>CPF: {paciente.cpf}</Text>
                    <Text style={styles.cardInfo}>{paciente.email}</Text>
                    {paciente.telefone && (
                      <Text style={styles.cardInfo}>
                        Tel: {paciente.telefone}
                      </Text>
                    )}
                  </View>
                ))}
              </>
            )}
          </>
        }
      />
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
    color: "#91C787",
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#91c787",
    marginBottom: 12,
  },
  card: {
    width: "80%",
    padding: 24,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#d4d4d4",
  },
  cardNome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  cardInfo: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  badge: {
    alignSelf: "flex-start",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginTop: 8,
  },
  badgeAtivo: {
    backgroundColor: "#d4edda",
  },
  badgeInativo: {
    backgroundColor: "#f8d7da",
  },
  badgeTexto: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
  },
  erroContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "rgba(255, 80, 80, 0.2)",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 80, 80, 0.5)",
  },
  erroTexto: {
    fontSize: 14,
    color: "rgba(255, 80, 80, 1)",
    textAlign: "center",
    lineHeight: 22,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  subtitulo: {
    fontSize: 14,
    color: "#202020",
    opacity: 0.9,
  },
  rodape: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
  },
  rodapeTexto: {
    fontSize: 12,
    color: "#202020",
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 4,
  },
});
