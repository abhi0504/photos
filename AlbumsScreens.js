
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity, Alert, Modal, Pressable, FlatList, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AlbumScreen = ({ route, navigation }) => {

  const { data, id } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  const [isLoading, setLoading] = useState(true);
  const [album, setAlbum] = useState([]);
  const [uri, setUri] = useState();


  const getAlbum = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=` + id);
      const json = await response.json();
      console.log("HEREREERERER");
      console.log(id);
      setAlbum(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAlbum();
  }, []);


  return (
    <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>

      <View style={{ flex: 0.35, alignItems: 'center', borderRightColor: '#DEDEDE', borderRightWidth: 1 }}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {

            return (
              <>
                <View style={{ height: 80, width: 80, backgroundColor: 'green', marginTop: 16, borderRadius: 5 }}>

                </View>
                <Text style={styles.text2}>{item.title.slice(0, 10) + "..."}</Text>
                <Text style={styles.text}>50</Text>
              </>

            )
          }}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
        />

      </View>

      <View style={{ flex: 0.65 }}>
        <View style={styles.mt10mb16ml16}>
          <Text style={styles.subHeading}>Images</Text>
        </View>


        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <Image
              style={styles.imageModal}
              source={{
                uri: uri,
              }}
            />
                  <View style={{height: 30, width: 30, backgroundColor: 'white', borderRadius: 100, position: 'absolute', right: windowWidth*0.1, bottom: windowHeight*0.71, alignItems: 'center', justifyContent: 'center'}} >
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={{color: '#000000'}}>X</Text>
                    </TouchableOpacity>
                  </View>
          </View>
        </Modal>

              {isLoading ? <Text>Loading...</Text> : <FlatList
          data={album}
          showsVerticalScrollIndicator={false}
          style={{ marginLeft: 16 }}
          renderItem={({ item }) => {

            return (
              <TouchableOpacity onPress={() => {
                setModalVisible(true)
                setUri(item.url)
              }}>

                <View style={{ height: 100, width: 100, marginLeft: 4, marginBottom: 4 }}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: item.url,
                    }}
                  />
                </View>
              </TouchableOpacity>

            )
          }}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        /> }

        



      </View>

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
    marginTop: 16,
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
  }, centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: windowHeight * 0.5,
    width: windowWidth * 0.8
  },
  image: {
    height: windowHeight * 0.128,
    width: windowWidth * 0.255,
  },
  imageModal: {
    height: windowHeight * 0.5,
    width: windowWidth * 0.755,
    borderRadius: 16
  }
});

export default AlbumScreen;


