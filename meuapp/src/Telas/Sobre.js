import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import image1 from "../../assets/img-1.jpg"
import image2 from "../../assets/img-2.jpg"
import whatssApp from "../../assets/img-3.jpg"

export default function Sobre() {
  const info = {
    nomeApp: "Fut Popeto",
    versao: "1.0.0",
    desenvolvedor: "Leandro Carvalho",
  }


  return (
    <ScrollView >
      <View style={estilos.container}>

        <Text style={estilos.tituloSobre}>Sobre nós</Text>

        <Image source={image1} style={estilos.image} />

        <View style={estilos.line} />

        <Image source={image2} style={estilos.image} />

        <View style={estilos.line} />

        <View style={estilos.cardSobreAPP}>
          <Text style={estilos.titulo}>Sobre o APP</Text>
          <Text>Nome: {info.nomeApp}</Text>
          <Text>Versão: {info.versao}</Text>
          <Text>Desenvolvedor: {info.desenvolvedor}</Text>
        </View>


        <View>
          <Image source={whatssApp} style={estilos.imgWhatsApp} />
        </View>

      </View>
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    gap: 16,

    width: "100%",

  },

  tituloSobre: {
    fontSize: 30,
    textShadowColor: "#6b6b6bff",
    textShadowOffset: { width: 1, height: 2, },
    textShadowRadius: 4,
    fontFamily: "Arial",
    fontWeight: "bold",

  },

  image: {
    borderRadius: 12,
    borderColor: "#555555ff",
    borderWidth: 2,
    elevation: 8,
  },

  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
    marginVertical: 10,
    textAlign: "center",
  },

  cardSobreAPP: {
    backgroundColor: "#bbbbbbb9",
    padding: 8,
    borderRadius: 8,
    gap: 10,
    borderWidth: 2,
    borderColor: "#767676c8",
    width: "100%",
  },

  titulo: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 15,
    borderBottomWidth: 2,
  },

  imgWhatsApp: {
    width: 50,
    height: 50,
    left: 150,

  }
})