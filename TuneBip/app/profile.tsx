import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { auth } from '@/FirebaseConfig';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
      <Text>SignOut</Text>
      <TouchableOpacity onPress={()=> auth.signOut()}>
        <Text>Sign Out</Text>
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
    justifyContent: 'center',
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
});
