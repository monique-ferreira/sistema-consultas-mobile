import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#8FC5FF" },
    content: { flexGrow: 1, justifyContent: "center", padding: 24 },
    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1A2E4A",
        textAlign: "center",
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 14,
        color: "rgba(26,46,74,0.7)",
        textAlign: "center",
        marginBottom: 32,
    },
    formulario: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 24,
    },
    label: { fontSize: 14, fontWeight: "600", color: "#555", marginBottom: 6 },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        fontSize: 15,
        marginBottom: 16,
        color: "#333",
    },
    erroTexto: {
        color: "#c0392b",
        fontSize: 13,
        marginBottom: 12,
        textAlign: "center",
    },
    botao: {
        backgroundColor: "#2563A8",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        marginTop: 4,
    },
    botaoDesabilitado: { opacity: 0.6 },
    botaoTexto: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
