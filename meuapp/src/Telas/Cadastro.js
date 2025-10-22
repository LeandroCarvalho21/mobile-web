import React, { useState } from 'react'
import { Button, Text, TextInput, View, StyleSheet, Alert } from 'react-native'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
    const navigation = useNavigation();
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
            .then((resposta) => {
                if (resposta.status === 201) {
                    Alert.alert("Sucesso, contato adicionado")
                    setNome("")
                    setTelefone("")

                } else {
                    Alert.alert("Erro, falha ao adicionar contato")
                }
            })

    }

    return (
        <View style={estilo.container}>
            <View style={estilo.cardNome}>
                <Text style={estilo.label}>Nome:</Text>
                <TextInput
                    style={estilo.input}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Digite seu nome "
                />
            </View>

            <View style={estilo.cardTelefone}>
                <Text style={estilo.label}>Telefone:</Text>
                <TextInput
                    style={estilo.input}
                    value={telefone}
                    onChangeText={(texto) => setTelefone(texto.replace(/[^0-9]/g, ''))}
                    keyboardType="numeric"
                    maxLength={11}
                    placeholder="Digite o telefone"
                />

            </View>

            <Button
                title='Cadastrar'
                onPress={() => (
                    navigation.navigate("ListaContatos")

                )}
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