import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import tracks from '../../assets/library/library.json'; 
import trackPaths from '../../assets/library/trackPaths';  // Adjust the import path as necessary
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';  // Import MaterialIcons

const TabTwoScreen = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);

  const playSound = async (trackIndex: number) => {
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
      setIsPlaying(false);
    }

    try {
      const track = tracks[trackIndex];
      const trackUri = trackPaths[track.trackName];
      if (!trackUri) {
        console.error('Track not found');
        return;
      }
      const { sound } = await Audio.Sound.createAsync(trackUri);
      setSound(sound);
      await sound.playAsync();
      setIsPlaying(true);
      setCurrentTrack(trackIndex);
    } catch (error) {
      console.error('Error loading or playing sound:', error);
    }
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Library</Text>
      </View>
      <ScrollView style={styles.mainScroll}>
        {tracks.map((track, index) => (
          <Pressable
            key={index}
            style={styles.trackItem}
            onPress={() => {
              if (isPlaying && currentTrack === index) {
                stopSound();
              } else {
                playSound(index);
              }
            }}
          >
            <Image source={{ uri: track.albumCoverUri }} style={styles.albumCover} />
            <View style={styles.trackInfo}>
              <Text style={styles.trackName}>{track.trackName}</Text>
              <Text style={styles.artist}>{track.artist}</Text>
              <Text style={styles.duration}>{track.duration}</Text>
            </View>
            <MaterialIcons
              name={isPlaying && currentTrack === index ? "stop" : "play-arrow"}
              size={30}
              color={isPlaying && currentTrack === index ? "indigo" : "grey"}
              style={styles.icon}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: 'space-between',
  },
  topBar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    padding: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  mainScroll: {
    flex: 4,
  },
  trackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  albumCover: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  trackInfo: {
    flex: 1,
  },
  trackName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 14,
    color: 'gray',
  },
  duration: {
    fontSize: 12,
    color: 'gray',
  },
  icon: {
    marginLeft: 10,
  },
});

export default TabTwoScreen;
