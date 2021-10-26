import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const Button = ({ color, text, onPress, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles.button, color ? { backgroundColor: color } : '#00a680']}
      activeOpacity={0.7}
      onPress={onPress}
      {...props}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export { Button };

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
