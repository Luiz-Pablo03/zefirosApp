import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ref, set} from 'firebase/database';

export default function ModalUmidi({ handleClose, register }) {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.botao}>

                    <Text style={styles.textBotao1}>Nível 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => {
                setCount(count + 1)
                Level(count + 1)
                }} >
                    <Text style={styles.textBotao2}>Nível 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}onPress={() => {
                setCount(count + 1)
                Level(count + 1)
                }} >
                    <Text style={styles.textBotao3}>Nível 3</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.botaoFechar}>
                <TouchableOpacity onPress={handleClose}>
                    <Text style={styles.textBotaoFechar}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(24, 24, 24, 0.6),",
        alignItems: 'center',
        justifyContent: 'center',
    },

    content: {
        width: "100%",
        paddingBottom: 24,
        paddingTop: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        flexDirection: "column",
        marginTop: 8,

    },

    botao: {
        backgroundColor: "#143589",
        borderRadius: 10,
        marginTop: 14,
        marginBottom: 14,
        marginRight: 5,
        alignItems: 'center',
        padding: 8,
        paddingHorizontal: 10,
        flexDirection: ''
    },

    botaoFechar: {
        position: 'absolute',
        bottom: 0,
        paddingBottom: 20,

    },

    textBotaoFechar: {
        color: '#fff',
    },

    textBotao1: {
        color: "#fff",
        fontSize: 20,
    },

    textBotao2: {
        color: "#fff",
        fontSize: 20,
    },

    textBotao3: {
        color: "#fff",
        fontSize: 20,
    },
});