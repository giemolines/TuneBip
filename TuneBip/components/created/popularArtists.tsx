import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

// Interface for the artist object as returned by Last.fm API
interface Artist {
  name: string;
  url: string;
  image: Array<{ '#text': string }>;
}

interface LastFmResponse {
  artists: {
    artist: Artist[];
  };
}

const API_KEY = '2372bfe714750da249c8a9084c7845a4';
const API_URL = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;
const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/100';

const RisingArtists: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get<LastFmResponse>(API_URL);
        setArtists(response.data.artists.artist.slice(0, 15)); 
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>{error}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={artists}
        keyExtractor={(item) => item.url}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log('Artist clicked', item.url)}>
            <View style={styles.artistItem}>
              <Image
                source={{ uri: item.image[2]['#text'] || PLACEHOLDER_IMAGE }}
                style={styles.image}
              />
              <View style={styles.textContainer}>
                <Text 
                  style={styles.artistName}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.name}
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
    padding: 16,
    backgroundColor: '#fff',
  },
  artistItem: {
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  textContainer: {
    justifyContent: 'center',

  },
  artistName: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default RisingArtists;
