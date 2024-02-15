import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2024 Meu Site. Todos os direitos reservados.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#333',
        paddingVertical: 15,
        paddingHorizontal: 15,
        alignItems: 'center', 
        marginTop: 12,
      },
      text: {
        color: '#fff',
        fontSize: 14,
      },
    });

export default Footer;
