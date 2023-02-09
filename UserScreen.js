
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity, FlatList, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const UserScreen = ({ route, navigation }) => {

  const { user } = route.params;

  const navigationHandler = (id) => {
    navigation.navigate('Album' , {
      data: data,
      id: id
    })
  }

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=` + user.id);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.mt10mb16ml16}>
        <Text style={styles.subHeading}>Albums</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => 
        
        {
          let num = getRandomInt(3);
          let img = './img' + num + '.png'
          console.log(img);
          return (
          <TouchableOpacity style={{ marginBottom: 16 }} onPress={() => navigationHandler(item.id)}>
            <Image
              style={styles.image}
              source={require('./img0.png')}
            />
            <View style={{ marginLeft: 16, paddingBottom: 10 }}>
              <Text style={styles.text2}>{item.title.length < 22 ? item.title : item.title.slice(0, 19) + "..."}</Text>
              <Text style={styles.text}>21</Text>
            </View>
          </TouchableOpacity>
        )}}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 700,
    fontSize: 24,
    color: '#000000',

  },
  container: {
    marginLeft: 16,
    marginTop: 16
  },
  subHeading: {
    fontWeight: 700,
    fontSize: 18,
    color: '#000000'
  },
  mt10mb16ml16: {
    marginTop: 20,
    marginBottom: 16,
    marginLeft: 16
  },
  user: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.22,
    borderColor: '#DEDEDE',
    borderWidth: 1.2,
    borderRadius: 6,
    padding: 16,
    marginBottom: 16

  },

  text: {
    fontWeight: 500,
    fontSize: 12,
    color: '#696974'
  },

  text2: {
    fontWeight: 500,
    fontSize: 12,
    color: '#000000'
  },
  image: {
    height: windowHeight * 0.24,
    width: windowWidth * 0.5,
    marginBottom: -16
  }
});

export default UserScreen;


