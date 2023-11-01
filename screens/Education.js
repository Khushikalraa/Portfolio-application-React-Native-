import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Linking } from 'react-native';



const openWebsite = (url) => {
  Linking.openURL(url).catch((err) =>
    console.error('An error occurred: ', err)
  );
};


const Education = props => {


  return (

    <>
    <View style={styles.pageContainer}>
     

      


    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <TouchableOpacity onPress={ () => openWebsite('https://vipstc.edu.in/')}>
      <View style={styles.boxContainertext}>
      <Image
        source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/VIPSF.jpeg')}
        style={styles.vips}
        />
        <Text style={styles.Vipstext}>VSE&T(2021-2025) {'\n'} Cumulative GPA - 8.529 </Text>
      </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={ () => openWebsite('https://bbpsrohini.balbharati.org/')}>
      <View style={styles.boxContainertext}>
      <Image 
        source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/school2.jpg')}
        style={styles.school2}
        />
          <Text style={styles.Vipstext}>BBPSRH {'\n'} 12th Standard - 95.4% (CBSE) </Text>
      </View>
      </TouchableOpacity>

<TouchableOpacity onPress={ () => openWebsite('https://www.greenfieldspublicschool.com/')} >
      <View style={styles.boxContainertext}>
        <Image 
        source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/school.jpg')}
        style={styles.school}
        />
          <Text style={styles.Vipstext}>GPS {'\n'} 10th Standard - 90.4% (CBSE)</Text>
      </View>
      </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity>
    <View>
    <Icon name="arrow-left" size={20} color="black" style={styles.menuIcon} />
<Text style= {styles.Traceback}> Home</Text>
    </View>
    </TouchableOpacity>




</View>

</>

     
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'white', 
  },


  boxContainertext: {
    backgroundColor: 'white',
    height: 300,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#cc9600',
    borderWidth: 2,
    margin: 30,
    top: 70
    
  },

  

  linespace: {
    lineHeight:40
  },


  texthere: {
    margin: 30,
    color: 'white',
    fontSize: 20
    
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:70
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

  school:{
    height: 297,
    width:347,
    borderRadius: 10
  },

  school2:{
    height: 297,
    width:347,
    borderRadius: 10
  },

  vips:{
    height: 297,
    width:347,
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    
  },

  Vipstext:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    bottom:20
  }
});

export default Education;