import { Pressable, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '@/FirebaseConfig';
import { getAuth } from 'firebase/auth';
import { Link, router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
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
      <ScrollView style={styles.scroll}>
        <View style={styles.component}>

        </View>
        <View style={styles.component}>

        </View>
        <View style={styles.component}>

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

  scroll:{
    flex: 4,
  },

  component:{
    height:300,
    backgroundColor:'lightgrey',
    margin:20,

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
