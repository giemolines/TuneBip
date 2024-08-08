import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, TouchableOpacity, Image, View as RNView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { auth } from '@/FirebaseConfig'; 
import { LinearGradient } from 'expo-linear-gradient';

const ModalScreen = () => {

  return (
    <LinearGradient
      colors={['transparent', 'indigo']} 
      start={[0, 0]}  
      end={[0, 1.5]}   
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Image source={require('../assets/images/profile_pic.jpg')} style={styles.profilePic}/>
        <Text style={styles.name}>Test User</Text>
        <Text style={styles.email}>test123@gmail.com</Text>


      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.button} onPress={() => auth.signOut()}>
            <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

    </LinearGradient>
   
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
    padding:70,
  },

  innerContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'transparent',
  },
  profilePic:{
    borderRadius:100,
    width:200,
    height:200,
  },
  name:{
    fontSize:30,
    fontWeight:'600',
    paddingTop:40,
  },
  email:{
    fontSize:20,
    paddingTop:20,
    fontWeight:'ultralight'
  },
  button:{
    justifyContent: "center",
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 15,
    backgroundColor: 'black',
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  buttonText:{
    fontSize:20,
    fontWeight:'500',
    textAlign: 'center',
    color: 'white',
}



});

export default ModalScreen;
