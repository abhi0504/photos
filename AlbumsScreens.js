
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity, Alert, Modal, Pressable, FlatList } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AlbumScreen = ({ route, navigation }) => {

  const { data } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  const navigationHandler = () => {
    navigation.navigate('Album')
  }

  const [isLoading, setLoading] = useState(true);
  const [album, setAlbum] = useState([]);

  const getAlbum = async () => {
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
    getAlbum();
  }, []);


  return (
    <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>

      <View style={{ flex: 0.35, alignItems: 'center', borderRightColor: 'grey', borderRightWidth: 1 }}>





        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {

            return (
              <>
                <View style={{ height: 80, width: 80, backgroundColor: 'green', marginTop: 16 }}>

                </View>
                <Text style={styles.text2}>Album1</Text>
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
          <Text style={styles.subHeading}>Album 1</Text>
        </View>


        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.subHeading}>Album 1</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>

          </View>
        </Modal>




        <TouchableOpacity onPress={() => {
          setModalVisible(true)
        }}>

          <View style={{ height: 80, width: 80, marginLeft: 16, backgroundColor: 'pink' }}>

          </View>
        </TouchableOpacity>
        


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
    marginTop: 22,
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
});

export default AlbumScreen;


