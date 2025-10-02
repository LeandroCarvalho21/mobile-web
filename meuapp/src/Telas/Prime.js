import { View, StyleSheet, Text } from "react-native";
import ListaCursos from "../Componentes/ListaCursos";
import ListaAlunos from "../Componentes/ListaAlunos";

export default function Prime() {
    return (
        <>
            <View style={estilos.topo}>

                <Text style={estilos.tituloHeader}>Cursos SENAI</Text>

            </View>

            <View style={estilos.cursosContent}>
                <Text style={estilos.textCurso}>Web designer - Front-End</Text>
                <Text style={estilos.textCurso}>Informática Básica</Text>
                <Text style={estilos.textCurso}>Cibersegurança na Nuvem</Text>
                <Text style={estilos.textCurso}>Desenvolvimento em JavaScript</Text>
                <Text style={estilos.textCurso}>Microsoft Power BI</Text>
            </View>

            <ListaCursos></ListaCursos>
            
            <ListaAlunos></ListaAlunos>


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
        display: "flex",
        justifyContent: "center",

    },

    tituloHeader: {
        textAlign: "center",
        width: "100%",
        fontSize: 40,
        fontWeight: "800",
        color: "#ffffffff",
        backgroundColor: "#ff0000ff",
    },

    cursosContent: {
        margin: 15,
        padding: 20,
        backgroundColor: "#ff0000ff",
        borderRadius: 8,
    },

    textCurso: {
        color: "#fff",
        fontSize: 20,
        margin: 5,
        backgroundColor: "rgba(98, 98, 98, 1)",
        borderRadius: 8,
        padding: 10,
        textAlign: "left",
        elevation: 3,
        borderWidth: 1,
        borderColor:"#fff",
        
    },

});
