import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Button,
  Br,
} from 'react-native';

function Prevencao() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>Tipos de prevenção</Text>
          <View style={{borderBottomWidth: 1, borderBottomColor: 'white'}}>
            <Text style={styles.title}>Medida 1</Text>
            <Image
              style={styles.img}
              source={require('../componentes/img/2022-farmaceuticocontradengue.jpg')}
            />
            <Text style={styles.dicas}>Mantenha bem tampados:</Text>
            <Text style={styles.dicas1}>➜ Caixas</Text>
            <Text style={styles.dicas1}>➜ Tonéis</Text>
            <Text style={styles.dicas1}>➜ Barris de água</Text>
            <Text style={styles.dicas}>
              Esse tipo de ação previne que o mosquito venha até sua casa
              procurar um local para se mutiplicar.
            </Text>
          </View>
          <View style={{borderBottomWidth: 1, borderBottomColor: 'white'}}>
          <Text style={styles.title}>Medida 2</Text>
          <Image
            style={styles.img}
            source={require('../componentes/img/Lixeira.png')}
          />
          <Text style={styles.dicas}>
            {' '}
            ➜ Coloque o lixo em sacos plásticos e mantenha a lixeira sempre bem
            fechada, isso irá evitar que o inseto ache locais para se
            reproduzir.
          </Text>
</View>
<View style={{borderBottomWidth: 1, borderBottomColor: 'white'}}>
          <Text style={styles.title}>Medida 3</Text>
          <Image
            style={styles.img}
            source={require('../componentes/img/LixoTerrenoBaldio.jpg')}
          />
          <Text style={styles.dicas}>
            {' '}
            ➜ Não jogue lixo em terrenos baldios, além de prejudicar o meio
            ambiente de várias formas, atrai o inseto assim fazendo com que ele
            chegue cada vez mais perto da sua residencia.
          </Text>
</View>
<View style={{borderBottomWidth: 1, borderBottomColor: 'white'}}>
          <Text style={styles.title}>Medida 4</Text>
          <Image
            style={styles.img}
            source={require('../componentes/img/garrafas.png')}
          />
          <Text style={styles.dicas}>
            {' '}
            ➜ Se for guardar garrafas de vidro ou plástico, mantenha sempre a boca
            para baixo, Recliclar essas garrafas alem de ajudar ao meio ambiente tambem irar deixar mosquitos longe.
          </Text>
</View>
<View style={{borderBottomWidth: 1, borderBottomColor: 'white'}}>
          <Text style={styles.title}>Medida 6</Text>
          <Image
            style={styles.img}
            source={require('../componentes/img/plantacomareia.jpg')}
          />
          <Text style={styles.dicasF}>
            {' '}
            ➜ Encha os pratinhos ou vasos de planta com areia até a borda, assim evitando o acumolo de agua parada.
          </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

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
    marginLeft: 15,
    marginRight: 15,
    margin: 2,
    textAlign: 'justify',
    padding:10,
  },
  dicasF: {
    fontSize: 15,
    color: 'white',
    margin: 15,
    textAlign: 'justify',
    paddingBottom: 80,
  },
  dicas1:{
   color:'white',
    marginLeft:30,
  },
  img: {
    width: 250,
    height: 250,
    marginLeft: 54,
    marginTop: 15,
    borderRadius: 50,
  },
});

export default Prevencao;
