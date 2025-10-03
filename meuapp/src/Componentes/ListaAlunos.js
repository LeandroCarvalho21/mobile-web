import { Text, View, StyleSheet, FlatList } from "react-native";

export default function ListaAlunos() {

    const usuarios = ["Rodrigo", "Juliana", "Paty", "Leandro", "Bruno", "Bernardo"];

    return (
        <View style={estilos.containerAlunos}>
            <Text style={estilos.alunosSenai}>Lista de Alunos</Text>
            <FlatList
                data={usuarios}
                renderItem={({ item }) => (
                    <View style={estilos.listAlunos}>
                        <Text style={estilos.NomeAlunos}>►</Text>
                        <Text style={estilos.NomeAlunos}>{item}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    containerAlunos: {
        margin: 16,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderWidth: 1,
        
    },

    alunosSenai: {
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        backgroundColor: "red",
        fontSize: 24,
        padding: 5,
        color: "#fff",
        textAlign: "center",
        textDecorationLine: "underline",
        textShadowColor: "#181818ff",
        textShadowRadius: 5,

    },

    NomeAlunos: {
        fontSize: 17,
        padding: 10,
    },

    listAlunos: {
        margin: 3,
        backgroundColor: "#c9c9c9da",
        flexDirection: "row",
        borderWidth: 0.7,
        borderColor: "#828282ff",
        elevation: 2,

    }
})