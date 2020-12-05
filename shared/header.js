
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Header({title, navigation}) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openMenu}>
        <View style={styles.icon} />
        <View style={styles.icon} />
        <View style={styles.icon} />
      </TouchableOpacity>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
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
    width: 35,
    height: 5,
    marginVertical: 1,
    backgroundColor: '#333',
    borderRadius: 50,
    marginLeft: 4,
    right: 60,
  },
});
