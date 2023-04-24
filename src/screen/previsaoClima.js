import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  url,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';

function Previsao() {
  const [cidade, setCidade] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [msgError, setMsgError] = useState(null);
  const [urtTemp, setUrlTemp] = useState('');

  const Key = '93618792e65de5beb881d0564f699c2f';
  const apiCountryURL = 'https://countryflagsapi.com/png/';
  const apiUnsplash = 'https://source.unsplash.com/1600x900/?';

  async function Tempo() {
    if (cidade === '') {
      setMsgError('Preencha o campo corretamente');
    } else {
      setMsgError('');
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${Key}&lang=pt_br`,
        )
        .then(response => {
          setWeatherData(response.data);
          setUrlTemp(url + response.data.weather[0].icon + '.png');
          console.log(response.data)
        })
        .catch(error => {
          console.error('Erro ao obter os dados de previsão de tempo:', error);
        });
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          <Icon name="cloud" size={20} color="#fff" /> Previsão do tempo{' '}
          <Icon name="cloud" size={20} color="#fff" />
        </Text>
        <Text style={styles.titlep}>
          Descubra a previsao do tempo onde voce mora
        </Text>
        <View style={styles.box}>
          <ScrollView>
          <Text style={styles.tempo}>Tempo</Text>
          <Text style={msgError ? styles.msgError : styles.msg}>
            {msgError}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Adicione a cidade"
            placeholderTextColor="#fff"
            onChangeText={setCidade}
            value={cidade}
          />
          <TouchableOpacity onPress={Tempo}>
            <Text style={styles.button}>Pesquisar</Text>
          </TouchableOpacity>
          {weatherData === null ? null : (
            <>
              <Text style={styles.city}>{weatherData.name} <Image
                source={{
                  uri: `https://flagsapi.com/${weatherData.sys.country}/flat/64.png/`,
                }}
                style={{width: 20, height: 20}}
              /></Text>
              <Text style={styles.temp}>{parseInt(parseInt(weatherData.main.temp)/10)}°C</Text>
              <Text style={styles.tempDescription}>
                {weatherData.weather[0].description}
                <Image
                  source={{
                    uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
                  }}
                  style={{width: 20, height: 20}}
                />
              </Text>
             <View style={{display:'flex',flexDirection:'row'}}>
              <Text style={styles.humidity}>{weatherData.main.humidity}% </Text>
              <Text style={styles.speed}>{weatherData.wind.speed}km/h</Text>
              </View>
            </>
          )}
          </ScrollView>
        </View>
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
  input: {
    borderColor: 'white',
    borderBottomWidth: 1,
    margin: 20,
    color: 'white',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
  },
  tempo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  titlep: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
  },
  content: {
    flex: 1,
  },
  box: {
    height: '50%',
    width: '87%',
    marginTop: 100,
    marginLeft: 25,
    marginRight: 25,
    borderColor: 'white',
    borderWidth: 3,
  },
  button: {
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    padding: 10,
  },
  msgError: {
    backgroundColor: '#ff4444a3',
    padding: 10,
    margin: 20,
    borderColor: 'red',
    fontSize: 15,
    color: 'white',
  },
  msg: {
    display: 'none',
  },
  city: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center',
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
  },
  tempDescription: {
    color: 'white',
    marginBottom: 10,
    textAlign:'center',
    textTransform:'capitalize'
  },
  temp: {
    color: 'white',
    textAlign:'center',
    marginBottom: 10,
  },
  humidity: {
    color: 'white',
    textAlign:'center',
    marginLeft: '20%',
    marginBottom: 10,
    borderRightWidth: 1,
    borderColor: 'white',
    width: 100,
    display: 'flex',
  },
  speed: {
    marginLeft: 40,
    color: 'white',
    textAlign:'center',
    marginBottom: 10,
  },
  imageCity:{
    width:150,
    height:150,
    marginHorizontal:80,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Previsao;
