import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';

export default function Home() {
  useBackHandler(() => {
    return true;
  });

  return (
    <View style={styles.container}>
      <Text>HOME Component!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
