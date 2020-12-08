import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header({title, navigation}) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground
      source={require('../assets/icons/game_bg.png')}
      style={styles.header}>
      <Icon name="bars" size={28} onPress={openMenu} style={styles.icon} />
      <View style={styles.headerTitle}>
        <Image
          source={require('../assets/icons/heart_logo.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 1,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
