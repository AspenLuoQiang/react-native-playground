import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Theme, Navbar, BadgeProps, Search } from 'react-native-ui-view';
import Demo, { DemoProps } from '../../components/Demo';

const SearchPage = () => {
  const navigation = useNavigation();
  const [badgeProps, setBadgeProps] = useState<BadgeProps>({ text: '99', size: 'small', dot: false, corner: false });
  const [sizeIndex, setSizeIndex] = useState(0);

  const renderBadge = () => {
    return <Search placeholder="请搜索" />;
  };

  const params: DemoProps['params'] = [
    {
      title: '大小',
      activeIndex: sizeIndex,
      list: [{ title: 'Small' }, { title: 'Large' }],
      async onChange(index: number) {
        setSizeIndex(index);
        setBadgeProps({
          ...badgeProps,
          size: index === 0 ? 'small' : 'large',
        });
      },
    },
  ];

  return (
    <SafeAreaView style={[styles.container]}>
      <Navbar title="Search 搜索" showBack onBack={() => navigation.goBack()} />
      <View style={styles.page}>
        <Demo result={renderBadge()} params={params} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.fillBase,
  },
  page: {
    padding: 15,
  },
});

export default SearchPage;
