import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


export default function Faq() {
  return (
    <>
      <View style={estilos.Duvidas}>
        <Text style={estilos.titleDuvidas}>Dúvidas Frequentes</Text>
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

    </>
  )
}

const estilos = StyleSheet.create({

  titleDuvidas: {
    textAlign: "center",
    fontSize: 29,
    fontWeight: "bold",
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
  }
})

