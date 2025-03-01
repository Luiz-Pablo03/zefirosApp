import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Modal, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import ModalUmidi from "../modal";
import { db } from "./config";
import { ref, set } from 'firebase/database';


export default function Menu() {
    const [modalVisible, setModalVisible] = useState(false);
    const [count, setCount] = useState(0)

    function Level(Zefi) {
        
        const reference = ref(db);
        set(reference, {
          Umidificador:{
            Zefi,
        }},
        );
    
      }

    const handleangulaPress = () => {
    };

    
    const handlesensorPress = () => {

    };
    const handleUmidifiPress = () => {
        setModalVisible(true)
    };

    return (
        <LinearGradient
            colors={['#0a1a44', '#122f7b', '#122f7b', '#143589', '#2b4994', '#425da0']}
            style={styles.container}
        >
            <StatusBar backgroundColor={'#272727'}/>
            <Image
                source={require("./src/assets/logo.png")}
                style={styles.logo}
            />

            <TouchableOpacity onPress={() => {
                setCount(count + 1)
                Level(count + 1)
                }} >
                <Image
                    source={require("./src/assets/umidificador.png")}
                    style={styles.umidifi}
                    
                />
                <Text style={styles.legendUmidifi}>Umidificador: </Text>
            </TouchableOpacity>

            <TouchableOpacity  >
                <Image
                    source={require("./src/assets/venntilador.png")}
                    style={styles.vent}
                />
                <Text style={styles.legendVent}>Ventilador</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlesensorPress}>
                <Image
                    source={require("./src/assets/sensores.png")}
                    style={styles.sensor}
                />
                <Text style={styles.legendSensor}>Sensores</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleangulaPress}>
                <Image
                    source={require("./src/assets/angulacao.png")}
                    style={styles.angula}
                />
                <Text style={styles.legendAngula}>Angulação</Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}>
                <ModalUmidi handleClose={() => setModalVisible(false)} />
            </Modal>

        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F3392",
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    umidifi: {
        
        width: 200,
        height: 200,
        top: 230,
        left: -95,
    },

    vent: {
        
        width: 150,
        height: 200,
        top: 10,
        
    },

    sensor: {
        
        width: 200,
        height: 200,
        top: 40,
        left: -95,
    },

    angula: {
        
        width: 200,
        height: 200,
        top: -180,
        right: -95,
    },

    logo: {
        position: "absolute",
        width: 300,
        height: 200,
        top: -25,
        left: -29,
    },

    legendUmidifi: {
        color: 'white',
        
        left: -35,
        top: 224,
    },

    legendVent: {
        color: 'white',
        
        right: -160,
        top: 5,
    },

    legendSensor: {
        color: 'white',
        
        left: -25,
        top: 35,
    },

    legendAngula: {
        color: "white",
        
        right: -160,
        top: -185,
    },
})
