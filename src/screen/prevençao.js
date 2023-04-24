import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button, Alert } from 'react-native';



function Prevencao() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>Tipos de prevenção</Text>

          <Text style={styles.title}>Medida número 1</Text>
          <Image style={styles.img}
            source={require('../../img/2022-farmaceuticocontradengue.jpg')}
          />
          <Text style={styles.dicas}>Mantenha bem tampados: caixas, tonéis e barris de água, esse tipo de ação previne que o mosquito venha até sua casa procurar um local para se mutiplicar.</Text>

          <Text style={styles.title}>Medida número 2</Text>
          <Image style={styles.img}
            source={require('../../img/Lixeira.png')}
          />
          <Text style={styles.dicas}> Coloque o lixo em sacos plásticos e mantenha a lixeira sempre bem fechada, isso irá evitar que o inseto ache locais para se reproduzir.</Text>


          <Text style={styles.title}>Medida número 3</Text>
          <Image style={styles.img}
            source={require('../../img/LixoTerrenoBaldio.jpg')}
          />
          <Text style={styles.dicas}> Não jogue lixo em terrenos baldios, além de prejudicar o meio ambiente de várias formas, atrai o inseto assim fazendo com que ele chegue cada vez mais perto da sua residencia.</Text>


          <Text style={styles.title}>Medida número 4</Text>
          <Image style={styles.img}
            source={require('../../img/garrafas.png')}
          />
          <Text style={styles.dicas}> Se for guardar garrafas de vidro ou plástico, mantenha sempre a boca para baixo.</Text>


          <Text style={styles.title}>Medida número 6</Text>
          <Image style={styles.img}
            source={require('../../img/plantacomareia.jpg')}
          />
          <Text style={styles.dicas}> Se for guardar garrafas de vidro ou plástico, mantenha sempre a boca para baixo.</Text>


        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#070049',
  },
  header: {
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginTop: 15,
  },
  content: {
    flex: 1,
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },

  dicas: {
    fontSize: 15,
    color: 'white',
    margin: 15,
    textAlign: 'justify',
  },

  img: {
    width: 350,
    height: 300,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 15,
    borderRadius: 50,

  },

});



export default Prevencao;