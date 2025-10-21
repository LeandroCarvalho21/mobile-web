import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Button, Alert, ScrollView } from 'react-native'
import axios, { Axios } from 'axios';

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

    // função para excuir
    const deleteContato = (id) => {
        axios
            .delete(`http://10.0.2.2:3000/contatos/${id}`)
            .then(() => {
                //Atualizar lista de contatos 
                setContatos(contatos.filter((contato) => contato.id !== id))
                Alert.alert("Sucesso", "Contato Excluido")
            })
            .catch((error) => {
                console.log("Erro excluir contato", error);
                Alert.alert("Erro, não foi possivel excluir");
            });
    }

    // função para adicionar um novo contato
    const addContato = (telefone) => {
        axios
            .put(`http://10.0.2.2:3000/contatos/${telefone}`)
            .then(() => {
                //adicionar novo contato
                setContatos(contatos.filter((contato) => contato.telefone == telefone))

                Alert.alert('Novo contato adicionado')
            })
            .catch((error) => {
                console.log("Erro, não foi possivel adicionar novo contato", error)
                Alert.alert("Erro, não foi possivel cadastrar um novo contato")
            })
    }

    // Use o useEffect para buscar dados
    useEffect(() => {
        listaContatos();

    }, [])

    return (
        <ScrollView>
            <View style={estilos.container}>
                <Text style={estilos.titulo}>Contatos</Text>

                <View>
                    <Button
                        title='Adicionar novo contato'
                        onPress={() => addContato(contato.telefone)}
                    />
                </View>

                {contatos.length > 0 ? (
                    contatos.map((contato, index) => (

                        <View key={index} style={estilos.card}>
                            <Text style={estilos.contato}>Nome: {contato.nome}</Text>
                            <Text style={estilos.contato}>Telefone: {contato.telefone}</Text>


                            <Button
                                title='Excluir'
                                onPress={() => deleteContato(contato.id)}
                            />
                        </View>
                    ))

                ) : (
                    <Text> Nenhum contato disponivel </Text>
                )}
            </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 25,
        textAlign: "center",
        margin: 20,
        textShadowColor: "red",
        textShadowOffset: { width: 10, height: 10, },
        shadowRadius: 10,
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
