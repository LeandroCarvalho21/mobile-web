import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

export default function ListaPessoas() {
    const pessoas = [
        {
            id: 1,
            nome: "Ana",
            idade: 30,
        },

        {
            id: 2,
            nome: "Bernardo",
            idade: 4,
        },

        {
            id: 3,
            nome: "Leandro",
            idade: 32,
        },
    ];

    return (

        <View style={estilos.container}>
            <Text style={estilos.titulo}>Lista de pessoas</Text>

            {pessoas.map((pessoas) => (
                <View style={estilos.card}>
                    <Text style={estilos.tituloPessoas}>ID: {pessoas.id}</Text>
                    <Text style={estilos.tituloPessoas}>Nome: {pessoas.nome}</Text>
                    <Text style={estilos.tituloPessoas}>Idade: {pessoas.idade}</Text>
                </View>
            ))}

        </View>
    )
}


const estilos = StyleSheet.create({

    container: {
        padding: 20,
        margin: 16,
    },

    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
    },

    card: {
        margin: 16,
        padding: 32,
        backgroundColor: "#bb2a2aff",
        borderRadius: 8,
        color: "#fff",
        borderWidth: 2,


    },
    tituloPessoas: {
        margin: 4,
        color: "#fff",
        fontSize:18,
    },






})