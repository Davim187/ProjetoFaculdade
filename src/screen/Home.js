import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image style={styles.logo} 
    source={require('')}/>  */}
        <Text style={styles.logo}></Text>
        <Text style={styles.nameLogo}>NameLogo</Text>
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
    color: 'white',
    fontSize: 20,
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
    fontSize: 20,
    margin: 30,
  },
});

export default Home;
