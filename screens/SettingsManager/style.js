import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        alignItems: "center", // Centraliza horizontalmente
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFF', // Fundo branco para TextInput
    },
    inpute:{
        height: 30,
        width: 70,
        fontSize:16,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFF', // Fundo branco para TextInput
        textAlign: "center",
        textAlignVertical: "center",
        justifyContent:"flex-start",
        color: "black"
    },
    flex:{
        flexDirection:"row",
        justifyContent: "space-around",
    },
    textbotao:{
        color:"white",
        fontWeight:'bold'
    }

});
