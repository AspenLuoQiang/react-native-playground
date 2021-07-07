import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Toast } from 'react-native-ui-view';

const Tools = () => {
  const showModal = () => {
    Toast.info('Loading');
  };

  return (
    <View>
      <Text style={styles.title} onPress={showModal}>
        Tools
      </Text>
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
