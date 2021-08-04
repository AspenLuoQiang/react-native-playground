import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Navbar } from 'react-native-ui-view';

const Tools = () => {
  return (
    <View>
      <Navbar title="工具" />
      <Text style={styles.title}>Tools</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
  },
});

export default Tools;
