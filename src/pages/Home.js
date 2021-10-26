import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export const Home = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [gretting, setGretting] = useState('');

  useEffect(() => {
    const currentHours = new Date().getHours();
    console.log(currentHours);

    if (currentHours < 12) {
      setGretting('Good Morning');
    }
    if (currentHours >= 12 && currentHours < 18) {
      setGretting('Good Afternoon');
    }
    if (currentHours >= 18) {
      setGretting('Good Evening');
    }
  }, []);

  const handleAddSkill = () => {
    const validSkill = skills.find(
      (skill) => skill.toLowerCase() === newSkill.toLowerCase(),
    );
    if (newSkill !== '' && newSkill.trim() !== '' && !validSkill) {
      setSkills([...skills, newSkill]);
    }
    setNewSkill('');
  };

  const clearSkills = () => {
    setSkills([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bem vindo, Cleyton</Text>
      <Text style={styles.gretting}>{gretting}</Text>
      <TextInput
        style={styles.input}
        placeholder='New Skill'
        placeholderTextColor='#c3c3c3c3'
        value={newSkill}
        onChangeText={setNewSkill}
      />
      <Button color='#a370f7' text='Adcionar' onPress={handleAddSkill} />
      <Text style={[styles.title, { marginVertical: 20 }]}>My Skills:</Text>

      <FlatList
        data={skills}
        renderItem={({ item }) => <SkillCard skill={item} />}
        keyExtractor={(item) => item}
      />

      <Button text='Limpar' color='#f00' onPress={clearSkills} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingTop: 30,
    paddingHorizontal: 20,
    borderWidth: 1,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 10,
    borderRadius: 5,
  },
  gretting: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '300',
  },
});
