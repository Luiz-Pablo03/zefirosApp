import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';

function Inicio({ navigation }) {
  const [seconds, setSeconds] = useState(5); //define o tempo de transição
  const [loading, setLoading] = useState(true); //define o estado de carregamento

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //define pra onde a nova tela vai ir
  useEffect(() => {
    if (seconds === 0) {
      setLoading(false); // ao mudar de tela, definimos o estado de carregamento para falso
      navigation.navigate('Menu'); //'Menu' na verdade é só o nome da tela nova
    }
  }, [seconds, navigation]);

  return (
    //renderizar o ActivityIndicator enquanto estiver carregando
    <View style={styles.container}>
      <StatusBar backgroundColor={'#272727'} />
      <Image
        source={require("./src/assets/logo.png")}
        style={styles.logo}
      />

      <ActivityIndicator style={styles.actIndicator}/>

      <Text style={styles.text}>from</Text>
      <Image
        source={require("./src/assets/Zéfiros-Photoroom.png")}
        style={styles.fmmLogo}
      />
    </View>
  )
}

export default Inicio;

//abaixo fica tudo que diz respeito a estilo e css das imagens da "loading screen"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#143589",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logo: {
    marginVertical: 200,
    position: 'absolute',
    top: -50,
    width: 330,
    height: 330,
  },
  fmmLogo: {
    marginVertical: 75,
    position: 'absolute',
    top: 640,
    height: 100,
    width: 175,
  },
  text: {
    color: '#010',
    fontSize: 12.5,
    position: 'absolute',
    top: 720,
  },

  actIndicator: {
    color: '#fff',
    position: 'relative',
    top: 175,
  },
})
