import { View, StyleSheet, Text } from "react-native";

export default function Prime() {
    return (
        <>
            <View style={estilos.topo}>

                <Text style={estilos.tituloHeader}>Cursos SENAI</Text>

            </View>

            <View style={estilos.cursosContent}>
                <Text style={estilos.textCurso}>HTML Completo</Text>
                <Text style={estilos.textCurso}>Informatica Básica</Text>
                <Text style={estilos.textCurso}>Excel Básico</Text>
                <Text style={estilos.textCurso}>Excel Avançado</Text>
            </View>

        </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: "150",
        backgroundColor: "#87878771",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },

    tituloHeader: {
        width: "100%",
        color: "#2d2d2dff",
        textAlign: "center",
        paddingTop: 60,
        fontSize: 40,


    },

    cursosContent: {
        marginTop: 20,
        padding: 40,
        backgroundColor: "#ff0000ff",
    },

    textCurso: {
        color: "#fff",
        fontSize: 20,
        marginTop: 10,
        backgroundColor: "rgba(98, 98, 98, 1)",
        borderRadius: 20,
        padding: 10,
        textAlign: "center",
        
    }
});
