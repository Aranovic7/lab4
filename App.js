import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, View, Image, SafeAreaView, TextInput, Modal, TouchableOpacity, ActivityIndicator, TouchableHighlight,} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const ArticleText = () => {
  return (
    <Text style={{top: 30}}>
    Biji, Biji Biji Biji, Biji, Biji, Biji, Biji, Biji, Biji, Biji
    Biji, Biji Biji Biji, Biji, Biji, Biji, Biji, Biji, Biji, Biji
    Biji, Biji Biji Biji, Biji, Biji, Biji, Biji, Biji, Biji, Biji 
    Biji, Biji Biji Biji, Biji, Biji, Biji, Biji, Biji, Biji, Biji 
    Biji, Biji Biji Biji, Biji, Biji, Biji, Biji, Biji, Biji, Biji
    Biji, Biji Biji Biji, Biji, Biji, Biji, Biji, Biji, Biji, Biji
    
    </Text>
  );}

export default function App() {

  const [name, setName] = useState("")

  const [loading, setLoading] = useState(false)

  
  

  const createAlert = () => {

    setLoading(!loading)
   
      Alert.alert("Unable to load", "There was an error. Please try again",
        
      )
    }
  

  const handlePress = () => {
    Alert.alert("Name: ", "Enter name please",
    [
      {
        text: "Submit"
      }
    ]
    )
   
  }

  return (
    <SafeAreaView style={styles.container}>
      
    <SafeAreaView style={styles.purpleContent}>
      
      <Text style={styles.insidePurple}>NAME: {name}</Text>
      
      <TouchableHighlight
      activeOpacity={0.2}
      onPress={handlePress}
      underlayColor='purple'>
      <Image style={{height: 70, width: 70, borderRadius: 50, top: 16, left: -20}}
      source={require("./assets/icon.png")} 
      />
      
      
      </TouchableHighlight>
      
    </SafeAreaView>

    <View style={styles.whiteContent}>
      <Text style={styles.highlightsHeader}>Today's Highlights</Text>
    </View>
    
    <ScrollView>

    <View style={styles.square}>
      <Text style={styles.articleOneHeader}>First Article</Text>
      <ArticleText/>
    </View>
    <View style={styles.square}> 
    <Text style={styles.articleOneHeader}>Second Article</Text>
    <ArticleText/>
    </View>
    <View style={styles.square}>
    <Text style={styles.articleOneHeader}>Third Article</Text>
    <ArticleText/>
    </View>

    <View style={styles.square}>
    <Text style={styles.articleOneHeader}>Fourth Article</Text>
    <ArticleText/>
    </View>


    <View>
      <Button 
      title='Load more'
      onPress={createAlert}/>
        <ActivityIndicator style={styles.myIndicator}
        animating={loading}
        size="small"/>
     </View>
    
    </ScrollView>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  square: {
    width: 340,
    height: 200,
    backgroundColor: '#F5ea87',
    padding: 15,
    margin: 10,
    top: 20
  }, 
  articleOneHeader: {
    fontSize: 19,
    top: 15
  },
   purpleContent: {
    height: 105,
    width: 390,
    backgroundColor: 'purple',
    top: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
    
  }, insidePurple: {
    top: 40,
    left: 40,
    color: 'white',
    fontSize: 20
  },
  highlightsHeader: {
    top: 20,
    left: 35,
    fontWeight: 'bold',
    fontSize: 20
  },
  whiteContent: {
    top: 40,
    backgroundColor: 'white',
    height: 100,
    width: 390
  },
  myIndicator: {
    left: 65,
    top: -28
  }
  

  
});
