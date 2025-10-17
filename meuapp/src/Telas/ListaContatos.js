import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import axios from 'axios';


export default function ListaContatos() {
    const [contatos, setContatos] = useState([]);

    // Funçaõ para buscar contatos do servidor
    const listaContatos = () => {
        axios
            .get("http://10.0.2.2:3000/contatos")
            .then((resposta) => {
                setContatos(resposta.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar contatos", error);
            });
    }

    // Use o useEffect para buscar dados
    useEffect(() => {
        listaContatos();
    }, [])

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Contatos</Text>
            {contatos.length > 0 ? (
                contatos.map((contato, index) => (
                    <View key={index} style={estilos.card}>
                        <Text style={estilos.contato}>Nome: {contato.nome}</Text>
                        <Text style={estilos.contato}>Telefone: {contato.telefone}</Text>
                    </View>
                ))

            ) : (
                <Text> Nenhum contato disponivel </Text>
            )}
        </View>
    )
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 25,
        textAlign: "center",
        margin: 20,
    },

    card: {
        backgroundColor: "#b8b8b8ff",
        padding: 4,
        margin: 8,
        borderWidth: 1,
        borderColor: "#f77c00c6",
        borderRadius: 4,
        width: 300,
        elevation: 10,
    },

    contato: {
        textAlign: "center",
    },

    container: {
        alignItems: "center",
    }
})


