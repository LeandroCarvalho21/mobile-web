import { Button, View, Text, StyleSheet } from 'react-native'

export default function Card() {
    return (
        <View style={estilos.container}>

            <Text style={estilos.cardTitle}>Sobre</Text>
            <Text style={estilos.cardContet}>Saiba mais sobre nós</Text>

            <Button
                title='Ir para Sobre'
                onPress={() => alert("Botão Pressionado")}
            />
        </View>
    )
}

const estilos = StyleSheet.create({

    container: {
        padding: 20,
        borderRadius: 1.41,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        elevation: 2,
        padding: 20,
        margin: 20,
    },

    cardTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },

    cardContet: {
        fontSize: 14,
        marginBottom: 10,

    },
});
