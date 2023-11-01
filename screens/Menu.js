import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Menu = ({navigation}) => {
  return (
    <>

   
    <View style={styles.pageContainer}>
      <TouchableOpacity onPress={()=> navigation.navigate('Education')}>
        <View style={styles.container}>
          <Text style={styles.text}>Education</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Skills')}>
        <View style={styles.container}>
          <Text style={styles.text}>Skills</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Projects')}>
        <View style={styles.container}>
          <Text style={styles.text}>Projects</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('ContactInfo')}>
        <View style={styles.container}>
          <Text style={styles.text}>Contact Info</Text>
        </View>
      </TouchableOpacity>
    </View>
  

<TouchableOpacity>
    <View>
    <Icon name="arrow-left" size={20} color="black" style={styles.menuIcon} />
<Text style= {styles.Traceback}> Home</Text>
    </View>
    </TouchableOpacity>
    </>
    
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    backgroundColor: 'white',
    height: 70,
    width: 320,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    borderColor: '#cc9600',
    borderWidth: 2,
  },

  text: {
    color: 'black',
  },

  Traceback: {
    color: 'black',
    position: 'absolute',
    bottom:830,
    left: 55,
    fontSize:15

  },
  menuIcon: {
    position: 'absolute',
    bottom:830,
    left: 30,
    color:'black'
  
  },
});

export default Menu;
