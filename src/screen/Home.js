import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity,Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} 
    source={require('../../android/app/src/main/res/mipmap-xxxhdpi/icon.png')}/> 
        <Text style={styles.nameLogo}>DengueOff</Text>
      </View>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>Aedes aegypti</Text>
          <Text style={styles.explic}>
            Aedes aegypti é o mosquito transmissor da dengue e da febre amarela
            urbana. Menor do que os mosquitos comuns, é preto com listras
            brancas no tronco, na cabeça e nas pernas. Suas asas são
            translúcidas e o ruído que produzem é praticamente inaudível ao ser
            humano.   
          </Text>

        <View style={styles.view}>
          <Text style={styles.informacaobotao}>Clique para mais informações:</Text>

          <TouchableOpacity onPress={()=>Linking.openURL('https://www.bombeiros.ce.gov.br/2022/06/21/corpo-de-bombeiros-do-ceara-um-pouco-mais-sobre-combate-a-dengue/')} ><Text style={styles.botao}>Acessar</Text></TouchableOpacity>
          </View>   

        </ScrollView>
      </View>
      {/* <View style={styles.footer}>                                                                                                                
        <Text style={styles.footerText}>Rodapé</Text>
      </View> */}
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
    height: 270,
    backgroundColor: '#070049',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    backgroundColor: 'rgba(255, 255, 255, 0.37)',
    height: 170,
    width: 170,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameLogo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.37)',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderColor: 'white',
    borderWidth: 3,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  explic: {
    textAlign: 'center',
    color: 'white',
    textAlign:'justify',
    fontSize: 20,
    margin: 30,
  },

  view: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  botao: {
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    marginLeft:10,
    padding: 10,  
    width:150,
  },
  informacaobotao: {
    color:'white',
    fontSize:15,
    marginLeft:8,
  }
});

export default Home;

 
