import React from 'react'
import { StyleSheet, Text, View } from "react-native"

export default function Header() {
    return (
        <View style={estilos.topo}>
            <Text style={estilos.TituloHeader}>
                Fut Popeto
            </Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        backgroundColor: "#d7d7de",
        height: 120,
        borderBottomWidth: 2,

    },

    TituloHeader: {
        textAlign: "center",
        fontSize: 30,
        color: "#fd3f00bd",
        fontWeight: "bold",
        paddingTop:20,
    }
})