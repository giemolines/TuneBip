import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

const soundFile = require('../../assets/library/PilotJones.mp3');

const Player = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to load and play sound
  const playSound = async () => {
    try {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(soundFile);
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
      setIsPlaying(true);
    } catch (error) {
      console.error('Error loading or playing sound:', error);
    }
  };

  // Function to stop the sound
  const stopSound = async () => {
    if (sound) {
      console.log('Stopping Sound');
      await sound.stopAsync();
      setIsPlaying(false);
    }
  };

  // Clean up the sound when the component unmounts
  useEffect(() => {
    return () => {
      if (sound) {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Player</Text>
      <Button
        title={isPlaying ? "Stop Sound" : "Play Sound"}
        onPress={isPlaying ? stopSound : playSound}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Player;
