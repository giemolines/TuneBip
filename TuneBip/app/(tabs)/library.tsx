import { Pressable, StyleSheet, Image, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Library</Text>
      </View>
      <ScrollView style={styles.mainScroll}>

      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop:50,
    flex:1,
    justifyContent:'space-between'
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

  mainScroll:{
    flex: 4,
  },

});
