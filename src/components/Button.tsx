import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableOpacityProps,
  ColorValue,
} from 'react-native';

interface IButtonProps extends TouchableOpacityProps {
  color?: ColorValue;
  text: string;
}

const Button = ({ color, text, ...props }: IButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color ? color : '#000' }]}
      activeOpacity={0.7}
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
