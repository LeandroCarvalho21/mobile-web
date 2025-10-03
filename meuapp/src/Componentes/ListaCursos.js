import { Text, View, StyleSheet, FlatList } from "react-native";

export default function ListaCursos() {

    const data = ["React NAtive", "Mongo DB", "Express", "Node.js","C#"];

    return (

        <View style={estilos.container}>
            <FlatList

                data={data}
                renderItem={({ item }) => (

                    <View style={estilos.lastItem}>
                        <Text style={estilos.bullet}>•</Text>
                        <Text style={estilos.text}>{item}</Text>
                    </View>



                )}

            />
        </View >



    )
}


const estilos = StyleSheet.create({

    container: {
        marginTop: 20,
        padding: 20,
        backgroundColor: "red",
        margin: 16,
        borderRadius: 8,

    },

    lastItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        gap: 10,
        padding: 10,
        backgroundColor: "rgba(98, 98, 98, 1)",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 8,
        elevation:3,
    },

    bullet: {
        fontSize: 20,
        color: "#fff",
    },

    text: {
        fontSize: 20,
        color: "#fff",
    },

});
