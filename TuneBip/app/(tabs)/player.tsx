'use client'
import { StyleSheet, Button, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

export default function TabTwoScreen() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound() {
    try {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/library/PilotJones.mp3') // Ensure this path is correct
      );
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync();
    } catch (error) {
      console.error('Error loading or playing sound:', error);
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
