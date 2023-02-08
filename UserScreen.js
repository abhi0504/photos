
import * as React from 'react';
import { View, Text, Button } from 'react-native';

const UserScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>User Screen</Text>
        <Button
        title="Go to Album"
        onPress={() => navigation.navigate('Album')}
      />
      </View>
    );
  }

export default UserScreen;


