import React, { useState } from 'react'
import { Button, Text, TextInput, View, StyleSheet, Alert } from 'react-native'
import Axios from 'axios';
import axios from 'axios';

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    const enviarContato = async () => {
        if (!nome || !telefone) {
            Alert.alert("Erro, por favor, preencha todos os campos");
            return;
        }
        const novoContato = { nome, telefone }
        axios
            .post(`http://10.0.2.2:3000/contatos/`, novoContato)


    }

    return (
        <View style={estilo.container}>
            <View style={estilo.cardNome}>
                <Text style={estilo.label}>Nome:</Text>
                <TextInput
                    style={estilo.input}
                    value={nome}
                    onChange={setNome}
                    placeholder="Digite seu nome "
                />
            </View>

            <View style={estilo.cardTelefone}>
                <Text style={estilo.label}>Telefone:</Text>
                <TextInput
                    style={estilo.input}
                    value={telefone}
                    onChange={setTelefone}
                    placeholder="Digite o telefone"
                />

            </View>

            <Button
                title='Cadastrar'
                onPress={enviarContato}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        padding: 20,
    },

    cardNome: {
        alignItems: "center",
    },

    cardTelefone: {
        alignItems: "center",
    },

    label: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: "bold",
        width: "100%",
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: "#fff",
        width: "100%",

    }
})