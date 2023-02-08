
import * as React from 'react';
import { View, Text, Button } from 'react-native';

const AlbumScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>User Screen</Text>
        <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      </View>
    );
  }

export default AlbumScreen;

