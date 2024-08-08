import { Pressable, ScrollView, StyleSheet} from 'react-native';
import { Text, View } from '@/components/Themed';
import { getAuth } from 'firebase/auth';
import { Link, router } from 'expo-router';
import { useColorScheme } from '@/components/useColorScheme';
import { Image } from 'react-native';
import PopularMusic from '@/components/created/popular';
import RisingArtists from '@/components/created/popularArtists';
import PopularMusicCanada from '@/components/created/popularCanada';


/*Application name	TuneBip
API key	2372bfe714750da249c8a9084c7845a4
Shared secret	b6d7d880ca8c224a0fd3ba733f5655d5
Registered to	camilla_molines*/



export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  getAuth().onAuthStateChanged((user) => {
    if (!user) router.replace('/');
  });
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Home</Text>
        <View style={styles.profileContainer}>
          <Link href='/profile' asChild>
            <Pressable>
              <Image src='https://i.pinimg.com/564x/be/b2/03/beb203553895b7e198c176d60290e5d8.jpg' style={styles.profile}/>
            </Pressable>
          </Link>
        </View>
      </View>
      <ScrollView style={styles.mainScroll}>
        <View style={styles.scrollComponentContainer }>
          <Text style={styles.categoryTitle}>Explore</Text>
          <Text style={styles.categoryDesc}>Top Tracks</Text>
          <View style={styles.scrollComponent}>
            <PopularMusic/>
          </View>
        </View>

        <View style={styles.scrollComponentContainer}>
          <Text style={styles.categoryTitle}>Discover</Text>
          <Text style={styles.categoryDesc}>Rising Artists</Text>
          <View style={styles.scrollComponent}>
            <RisingArtists/>
          </View>
        </View>

        <View style={styles.scrollComponentContainer}>
          <Text style={styles.categoryTitle}>Canada</Text>
          <Text style={styles.categoryDesc}>Canada's Top Songs</Text>
          <View style={styles.scrollComponent}>
            <PopularMusicCanada/>
          </View>
        </View>
        
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop:50,
    backgroundColor:'white',
    flex:1,
    justifyContent:'space-between'
  },

  mainScroll:{
    flex: 4,
  },

  artistItem:{
    height:100,
    width:100,
    borderRadius:100,
    margin:10,
    backgroundColor:'orange'

  },

  trackItem:{
    height:200,
    width:200,
    borderRadius:20,
    margin:10,
    backgroundColor:'orange',
  },
  scrollComponentContainer:{
    flexDirection:'column',
    flex:1,
    marginBottom:20,
  },

  scrollComponent:{
    justifyContent: 'center',
    alignItems:'center',
    flex:1,
    flexDirection: 'row'

  },

  topBar:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent: 'space-between',
    margin:20,
    padding:10,
  },

  title:{
    fontSize:50,
    fontWeight:'bold',
  },

  profileContainer: {
    borderRadius: 100,
    shadowColor: 'indigo',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  profile:{
    borderRadius:100,
    width:50,
    height:50,
  },

  categoryTitle:{
    fontSize:30,
    fontWeight:'bold',
    paddingLeft:20,
  },
  categoryDesc:{
    fontSize:20,
    color: 'grey',
    paddingLeft:20,
    paddingTop:10,
  }
});
