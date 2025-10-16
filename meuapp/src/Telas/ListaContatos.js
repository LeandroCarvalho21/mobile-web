import { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import axios from 'axios';



export default function ListaContatos() {
    const [contatos, setContatos] = useState([]);

    // Função para buscar contatos do servidor 
    const listaContatos = () => {
        axios
            .get("http://10.0.2.2:3000/contatos")
            .then((resposta) => {
                setContatos(resposta.data)

            })
            .catch((error) => {
                console.error("Erro ao buscar contatos", error)
                
            });
    }
    //Use o useEffect para buscar dados
    <Text>Lista Contatos</Text>
    useEffect(() => {
        listaContatos()
    }, [])

    return (
        <View>
        </View>
    )
}
