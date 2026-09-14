import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#8FC5FF" },
    listContent: { padding: 20, paddingBottom: 40 },
    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1A2E4A",
        marginBottom: 16,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 18,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cardNome: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        flex: 1,
    },
    cardSeta: { fontSize: 18, color: "#8FC5FF" },
    vazio: { color: "#1A2E4A", textAlign: "center", marginTop: 40, fontSize: 14 },
});
