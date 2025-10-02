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
                        <Text style={estilos.NomeAlunos}>•</Text>
                        <Text style={estilos.NomeAlunos}>{item}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    containerAlunos: {
        margin: 15,
    },

    alunosSenai: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderWidth: 1,
        backgroundColor: "red",
        fontSize: 22,
        padding: 5,
        color: "#fff",
        textAlign: "center",
        elevation: 3,
    },

    NomeAlunos: {
        fontSize: 17,
        padding: 10,
    },

    listAlunos: {
        backgroundColor: "#c9c9c9da",
        flexDirection: "row",
        borderWidth: 1,
        borderBottomRightRadius: 8,
    }
})