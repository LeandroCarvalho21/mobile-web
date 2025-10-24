import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function Alterar() {
    const [nome, setAlterarNome] = useState("")
    const [telefone, setAlterarTelefone] = useState("")


    return (
        <View style={estilo.container}>
            <Text style={estilo.title}>Editar contato</Text>
            <View>
                <TextInput
                    value={nome}
                    onChangeText={(text) => setNome(limitarParaTexto(text.trimStart()))}
                    maxLength={50}
                    placeholder="Digite seu nome "
                />
            </View>

            <View>
                <Text>Telefone:</Text>
                <TextInput
                    value={telefone}
                    onChangeText={(texto) => setTelefone(texto.replace(/[^0-9]/g, ''))}
                    keyboardType="numeric"
                    maxLength={11}
                    placeholder="Digite o telefone"
                />
            </View>


            <Text>
                Alterar
            </Text>






        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: "red",
    },

    title: {
        fontSize: 25,
        textAlign: "center",
        margin: 20,
    }




})
