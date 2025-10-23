import { Text, View, StyleSheet, ScrollView } from 'react-native'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Faq() {
  const [Faq, setFaq] = useState([]);

  const duvidasFaq = () => {
    axios
      .get("http://10.0.2.2:3000/faq")
      .then((respostafaq) => {
        setFaq(respostafaq.data)
      })
      .catch((error) => {
        console.error("Erro ao buscar duvidas", error);
      });
  }

  // Use o useEffect para buscar dados
  useEffect(() => {
    duvidasFaq();
  }, [])

  return (

    <ScrollView>

      <View style={estilos.Duvidas}>
        <Text style={estilos.titleDuvidas}>Dúvidas Frequentes</Text>
      </View>

      <View >
        {Faq.length > 0 ? (
          Faq.map((duvida, index) => (
            <View key={index} style={estilos.cardJson} >
              <Text style={estilos.perguntaJson}>{duvida.pergunta}</Text>
              <Text style={estilos.respostaJson}>{duvida.resposta}</Text>
            </View>
          ))
        ) : (<Text>Nenhuma Duvida</Text>

        )}
      </View>

      <View style={estilos.duvidasFaq}>
        <Text style={estilos.textFaq}>Qual a metodologia?</Text>
      </View>

      <View style={estilos.duvidasFaq}>
        <Text style={estilos.textFaq}>Qual é a duração do curso?</Text>
      </View>

      <View style={estilos.duvidasFaq}>
        <Text style={estilos.textFaq}>Tem certificado?</Text>
      </View>

      <View style={estilos.duvidasFaq}>
        <Text style={estilos.textFaq}>Tenho alguma garantia?</Text>
      </View>

      <View style={estilos.duvidasFaq}>
        <Text style={estilos.textFaq}>Será que relamente eu consigo aprender?</Text>
      </View>

    </ScrollView >
  )
}

const estilos = StyleSheet.create({

  titleDuvidas: {
    textAlign: "center",
    fontSize: 29,
    fontWeight: "bold",
    backgroundColor: "#9e9d9d65",
    padding: 30,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
  },

  Duvidas: {
    padding: 20,
    textDecorationLine: "underline",
  },

  duvidasFaq: {
    backgroundColor: "rgba(0, 85, 34, 0.18)",
    padding: 20,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    borderRadius: 4,
    borderColor: "rgba(0, 85, 34, 0.64)",
    borderWidth: 1,
    borderBottomWidth: 2,
  },

  textFaq: {
    color: "#3e3e3eff",
    fontSize: 17,
    textAlign: "center",
  },

  cardJson: {
    margin: 8,
    // borderWidth: 0.5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  perguntaJson: {
    backgroundColor: "#d3d3d3ff",
    padding: 4,
    textAlign: "center",
    borderTopRightRadius: 10,
    borderLeftWidth: 8,
    borderColor: "#9e9e9eff",

  },

  respostaJson: {
    backgroundColor: "rgba(0, 85, 34, 0.18)",
    padding: 7,
    textAlign: "center",
    borderBottomRightRadius: 10,
    borderLeftWidth: 8,
    borderColor: "#9e9e9eff",
    
  }
})