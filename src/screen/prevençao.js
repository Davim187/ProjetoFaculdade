import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Prevencao() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Text>Prevencao</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Prevencao;