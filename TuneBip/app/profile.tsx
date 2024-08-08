import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { auth } from '@/FirebaseConfig';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.signOutButton} onPress={()=> auth.signOut() }>
        <Text style={styles.signOut}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  signOut:{
    fontSize:20,
    fontWeight:'500',
    textAlign: 'center',
    color: 'white',
  },
  signOutButton:{
    justifyContent: "center",
    alignItems: 'center',
    width: 300,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'black',
    marginBottom: 10,
    paddingHorizontal: 10
},

});
