import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Button, Alert, ScrollView, TouchableOpacity, Image } from 'react-native'
import axios, { Axios } from 'axios';
import lixeira from "../../assets/lixeira.png"
import editar from "../../assets/editar.png"
import { useNavigation } from '@react-navigation/native';


export default function ListaContatos() {
    const [contatos, setContatos] = useState([]);
    const navigation = useNavigation();

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

    // Use o useEffect para buscar dados
    useEffect(() => {
        listaContatos();

    }, [])

    return (
        <ScrollView>
            <View style={estilos.container}>
                <Text style={estilos.titulo}>Contatos</Text>

                {contatos.length > 0 ? (
                    contatos.map((contato, index) => (
                        <View key={index} style={estilos.card}>
                            <Text style={estilos.contato}>Nome: {contato.nome}</Text>
                            <Text style={estilos.contato}>Telefone: {contato.telefone}</Text>
                            {/* <Button
                                title='Excluir'
                                onPress={() => deleteContato(contato.id)}
                            /> */}

                            <View style={estilos.editarExcuir}> 
                                <TouchableOpacity onPress={() => deleteContato(contato.id)}>
                                    <View style={estilos.lixeiraView}>
                                        <Image
                                            source={lixeira}
                                            style={{ width: 15, height: 25, padding: 4, }}
                                        />
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.navigate("Alterar")
                                }>
                                    <View style={estilos.lixeiraView}>
                                        <Image
                                            source={editar}
                                            style={{ width: 25, height: 25, padding: 4, }}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))

                ) : (
                    <Text> Nenhum contato disponivel </Text>
                )}
            </View>
        </ScrollView >
    )
}

const estilos = StyleSheet.create({
    container: {
        alignItems: "center",
    },

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
        alignItems: "center",
        gap: 8,

    },

    contato: {
        textAlign: "center",
    },

    editarExcuir: {
        flexDirection: "row",
        gap:50,
        
    }
})
