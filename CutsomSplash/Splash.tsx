import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 20000);
  });

  return (
    <View style={styles.container}>
      <Image source={require('./assets/images/splash/splash_logo.png')} style={styles.image} />
      <Text style={styles.text}>D O Ɔ K</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02A5CF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
