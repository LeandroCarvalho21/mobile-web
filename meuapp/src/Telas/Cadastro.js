import { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Alert, TouchableOpacity } from 'react-native'
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

    //Remove números e caracteres especiais, mantém letras, espaços e acentos
    const limitarParaTexto = (texto) => {
        return texto.replace(/[^a-zA-ZÀ-ÿ\u00C0-\u00FF\s]/g, '');
    };

    return (
        <View style={estilo.container}>

            <View style={estilo.cardNome}>
                <Text style={estilo.label}>Nome:</Text>
                <TextInput
                    style={estilo.input}
                    value={nome}
                    onChangeText={(text) => setNome(limitarParaTexto(text.trimStart()))}
                    maxLength={50}
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

            <TouchableOpacity onPress={() => (enviarContato(),
                navigation.navigate("ListaContatos")
            )}
                style={estilo.button}>
                <Text style={estilo.textButton}>Clique Aqui</Text>
            </TouchableOpacity>

        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        padding: 20,
        height: "80%",
        justifyContent: "center",
        margin: 8,
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
        borderWidth: 2,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: "#fff",
        width: "100%",
    },

    button: {
        backgroundColor: "#b9b8b8ff",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
    },

    textButton: {
        fontSize: 16,
        fontWeight: "bold",
    }
})