import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SiteHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Meu Site</Text>
      <Text style={styles.menuItem}>Início</Text>
      <Text style={styles.menuItem}>Sobre</Text>
      <Text style={styles.menuItem}>Contato</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  logo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuItem: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 20,
  },
});

export default SiteHeader;
