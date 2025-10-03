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
        <View>
            <Text>Teste</Text>
        </View>
    )
}
