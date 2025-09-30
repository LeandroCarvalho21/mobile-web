import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={estilos.topo}>

        <Text style={estilos.tituloHeader}>teste popeto</Text>

      </View>

      <View>
        <Text>Leandro</Text>
      </View>

    </>

  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: "150",
    backgroundColor: "#87878771",
  },

  tituloHeader: {
    width: "100%",
    color: "#2d2d2dff",
    textAlign: "center",
    paddingTop: 60,
    fontSize: 40,
  },




});
