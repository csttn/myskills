import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ISKillCardProps extends TouchableOpacityProps {
  id: string;
  name: string;
}

export const SkillCard = ({ name, ...props }: ISKillCardProps) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...props}>
      <Text style={styles.textSkill}>
        <Text style={styles.tag}>#</Text>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 5,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  tag: {
    color: '#a370f7',
  },
});
