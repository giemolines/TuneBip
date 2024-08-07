import { Pressable, ScrollView, StyleSheet} from 'react-native';
import { Text, View } from '@/components/Themed';
import { getAuth } from 'firebase/auth';
import { Link, router } from 'expo-router';
import { useColorScheme } from '@/components/useColorScheme';
import { Image } from 'react-native';

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
        <View style={styles.component}>
          <Text>Popular</Text>
          <ScrollView horizontal={true}>
            <View style={styles.trackItem}></View>
            <View style={styles.trackItem}></View>
            <View style={styles.trackItem}></View>
            <View style={styles.trackItem}></View>
          </ScrollView>
        </View>
        <View style={styles.component}>
          <Text>Discover</Text>
          <ScrollView horizontal={true}>
            <View style={styles.trackItem}></View>
            <View style={styles.trackItem}></View>
            <View style={styles.trackItem}></View>
            <View style={styles.trackItem}></View>
          </ScrollView>
        </View>
        <View style={styles.component}>
          <Text>New</Text>
          <ScrollView horizontal={true}>
            <View style={styles.trackItem}></View>
            <View style={styles.trackItem}></View>
            <View style={styles.trackItem}></View>
            <View style={styles.trackItem}></View>
          </ScrollView>
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

  trackItem:{
    height:200,
    width:200,
    margin:10,
    backgroundColor:'orange',
  },

  component:{
    justifyContent: 'center',
    alignItems:'center',
    flex:1,
    height:300,
    flexDirection: 'row'

  },

  topBar:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent: 'space-between',
    margin:20,
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
    shadowRadius: 15,
  },

  profile:{
    borderRadius:100,
    width:50,
    height:50,
  }
  
});
