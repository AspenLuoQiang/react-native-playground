import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Theme, Navbar, IndexList } from 'react-native-ui-view';
import { PageContainer } from '../../core/router';
import { MODULES } from '../../core/constants';

const IndexListPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container]}>
      <Navbar title="IndexList 索引列表" showBack onBack={() => navigation.goBack()} />
      <View style={styles.main}>
        <IndexList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.fillBase,
  },
  main: {
    flex: 1,
  },
});

PageContainer(MODULES.INDEX_LIST, IndexListPage);
