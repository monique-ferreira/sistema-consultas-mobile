import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Consulta } from "../interfaces/consulta";

type ConsultaCardProps = {
    consulta: Consulta;
    onConfirmar?: () => void;
    onCancelar?: () => void;
};

export default function ConsultaCard({
    consulta,
    onConfirmar,
    onCancelar,
}: ConsultaCardProps) {

    function formatarValor(valor: number): string {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }

    function formatarData(data: Date): string {
        return data.toLocaleDateString("pt-BR");
    }

    return (
        <View style={styles.card}>
            <View
                style={[
                    styles.statusBadge,
                    consulta.status === "confirmada" && styles.statusConfirmada,
                    consulta.status === "cancelada" && styles.statusCancelada,
                ]}>
                <Text style={styles.statusTexto}>
                    {consulta.status.toUpperCase()}
                </Text>
            </View>

            <View style={styles.secao}>
                <Text style={styles.label}>Médico</Text>
                <Text style={styles.valor}>{consulta.medico.nome}</Text>
                <Text style={styles.info}>CRM: {consulta.medico.crm}</Text>
                <Text style={styles.info}>{consulta.medico.especialidade.nome}</Text>
            </View>

            <View style={styles.secao}>
                <Text style={styles.label}>Paciente</Text>
                <Text style={styles.valor}>{consulta.paciente.nome}</Text>
                <Text style={styles.info}>CPF: {consulta.paciente.cpf}</Text>
                <Text style={styles.info}>Email: {consulta.paciente.email}</Text>
                {consulta.paciente.telefone && (
                    <Text style={styles.info}>Tel: {consulta.paciente.telefone}</Text>
                )}
            </View>

            <View style={styles.secao}>
                <Text style={styles.label}>Dados da Consulta</Text>
                <Text style={styles.valor}>Data: {formatarData(consulta.data)}</Text>
                <Text style={styles.valor}>Valor: {formatarValor(consulta.valor)}</Text>
                <Text style={styles.info}>Email: {consulta.paciente.email}</Text>
                {consulta.observacoes && (
                    <Text style={styles.observacoes}>{consulta.observacoes}</Text>
                )}
            </View>

            <View style={styles.acoes}>
                {consulta.status === "agendada" && (
                    <>
                        {onConfirmar && (
                            <View style={styles.button}>
                                <Button
                                    title="Confirmar Consulta"
                                    onPress={onConfirmar}
                                    color="#91C787"
                                />
                            </View>
                        )}
                        {onCancelar && (
                            <View style={styles.button}>
                                <Button
                                    title="Cancelar Consulta"
                                    onPress={onCancelar}
                                    color="#91C787"
                                />
                            </View>
                        )}
                    </>
                )}

                {consulta.status === "confirmada" && (
                    <View style={styles.mensagem}>
                        <Text style={styles.mensagemTexto}>
                            Consulta confirmada com sucesso!
                        </Text>
                    </View>
                )}

                {consulta.status === "cancelada" && (
                    <View style={styles.mensagemCancelada}>
                        <Text style={styles.mensagemTexto}>
                            Consulta cancelada!
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "80%",
        padding: 24,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#d4d4d4",

    },
    button: {
        marginTop: 8,
        borderRadius: 8,
        overflow: "hidden",
        color: "#91C787"

    },
})