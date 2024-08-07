import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

interface Track {
  name: string;
  artist: {
    name: string;
  };
  url: string;
  image: Array<{ '#text': string }>;
}

interface LastFmResponse {
  tracks: {
    track: Track[];
  };
}

const API_KEY = '2372bfe714750da249c8a9084c7845a4';
const API_URL = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`;
const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/100';

const PopularMusic = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get<LastFmResponse>(API_URL);
        setTracks(response.data.tracks.track.slice(0, 15)); 
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>{error}</Text>;

  return (
    <View style={styles.container}>
      <FlatList data={tracks} keyExtractor={(item) => item.url} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log('Track clicked', item.url)}>
            <View style={styles.trackItem}>
              <Image source={{ uri: item.image[2]['#text'] || PLACEHOLDER_IMAGE }} style={styles.image}/>
              <View style={styles.textContainer}>
                <Text style={styles.trackName} numberOfLines={1} ellipsizeMode="tail">
                  {item.name}
                </Text>
                <Text style={styles.artistName} numberOfLines={1} ellipsizeMode="tail">
                  {item.artist.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  trackItem: {
    flexDirection: 'column',
    alignItems: 'center',
    height:200,
    width:200,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackName: {
    paddingTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  artistName: {
    fontSize: 16,
    color: 'gray',
  },
});

export default PopularMusic;
