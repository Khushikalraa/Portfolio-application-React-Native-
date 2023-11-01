import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose any available icon set
import { Linking } from 'react-native';


const openWebsite = (url) => {
  Linking.openURL(url).catch((err) =>
    console.error('An error occurred: ', err)
  );
};

const BoxContainer = props => {

  

  return (

    <>
    <View style={styles.pageContainer}>
     

      


    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <TouchableOpacity onPress={ () => openWebsite('https://github.com/Khushikalraa/NLP')}>
   


      <View style={styles.boxContainertext}>
 
        <Text style={styles.heading}> NLP PROJECTS </Text>
        <Text style={styles.texthere}> 
          
         1. Customer service chatbot: Built a chatbot that extracts information with the help of regex. {'\n'}
        {'\n'}
2. Ner system for news article: Extracting information based on entities in the article with the help
of NLP. {'\n'} {'\n'}
3. Sentimental analysis through texts: Understanding the tone of the text with the help of sentimental
analysis. {'\n'} {'\n'}
4. Similarity in text analysis: Calculating the percentation of text similarity in for the given input
sentences. {'\n'} {'\n'}
5. Text vectorization: Studying the conversion of text to vectors in order to train models
using them. {'\n'} {'\n'}
6. Lemmatization and stemming: Lemmatization and stemming using spaCy and NLTK. {'\n'} {'\n'}
7. Part-of-speech recognization: Differenting the different parts of speech. {'\n'} {'\n'}
8. Web crawler: Built a web crawler to extract useful text with the help of regex.</Text>
      </View>
      </TouchableOpacity>
 


      <TouchableOpacity onPress={ () => openWebsite('https://github.com/Khushikalraa/Flutter-projects')}>
      <View style={styles.boxContainertext2}>
<Text style={styles.heading}>FLUTTER PROJECTS </Text>
<Text style={styles.texthere}>
 1. Amazon Music Clone {'\n'} {'\n'}
 2. BMI Calculator Application{'\n'} {'\n'}
 3. Netflix Clone {'\n'} {'\n'}
 4. Authentication Page using firebase {'\n'} {'\n'}
 5. Ted like Page  {'\n'} {'\n'}
 6. Weather Application{'\n'} {'\n'}
 7. Dictionary Application {'\n'} {'\n'}
 8. Youtube Clone {'\n'} {'\n'}
 9. Spotify Frontend 



</Text>
      </View>
      </TouchableOpacity>

<TouchableOpacity onPress={() => openWebsite('')}>
      <View style={styles.boxContainertext3}>
      <Text style={styles.heading}> REACT NATIVE {'\n'} PROJECTS </Text>
<Text style={styles.texthere}>
 1. Wool Marketplace for Smart India Hackathon {'\n'} {'\n'}
 2. This Resume Application{'\n'} {'\n'}




</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> openWebsite('https://www.linkedin.com/in/khushikalraa/overlay/1635523993946/single-media-viewer/?profileId=ACoAADEgylYB4274kEyD6wdxt64dfjuZjQX8DmU')}>
      <View style={styles.boxContainertext4}>
      <Text style={styles.heading}>BEST PAPER AWARD </Text>
<Text style={styles.texthere}>
K. Kalra, and D. Tiwari. Internet of Things: connecting ultrasonic sensor to application in order to detect accidents. Sustainable Materials, Manufacturing And Energy
Technologies - 1st International Conference (SMMET - 2022)



</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> openWebsite('https://www.fiverr.com/craftystudio')}>
      <View style={styles.boxContainertext5}>
      <Text style={styles.heading}> GRAPHIC DESIGNING </Text>
<Text style={styles.texthere}>
More than 5 years of experience in Graphic Designing. I have completed more than 70+ paid orders on Fiverr.com with 4.7 rating. 



</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/khushikalraa/overlay/1597740682583/single-media-viewer/?profileId=ACoAADEgylYB4274kEyD6wdxt64dfjuZjQX8DmU')}>
      <View style={styles.boxContainertext5}>
      <Text style={styles.heading}>INTERNSHIPS </Text>
<Text style={styles.texthere}>
 1. HR at YEF {'\n'} 06/2020 - 08/2020{'\n'} {'\n'}
 2. Graphic Designing Intern at StartUp Inc. {'\n'}07/2020 - 08/2020{'\n'} {'\n'}




</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>openWebsite('https://www.sih.gov.in/')}>
      <View style={styles.boxContainertext5}>
      <Text style={styles.heading}> PARTICIPATIONS </Text>
<Text style={styles.texthere}>
1. 4th Technovation Hackathon at Sharda University, Greater Noida, Uttar Pradesh, India {'\n'}{'\n'}
2. 1st IDEATHON at RDIAS, Rohini, Delhi, India {'\n'}{'\n'}
3. Smart India Hackathon 2023



</Text>
      </View>

      
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.boxContainertext5}>
      <Text style={styles.heading}> UPCOMING PROJECTS </Text>
<Text style={styles.texthere}>
1. Publishing of a review Paper on Steganography {'\n'}{'\n'}
2. Website Development of this Resume



</Text>
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
    height: 1000,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#cc9600',
    borderWidth: 2,
    margin: 30,
    top: 70
    
  },

  boxContainertext2: {
    backgroundColor: 'white',
    height: 600,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#cc9600',
    borderWidth: 2,
    margin: 30,
    top: 70
    
  },

  boxContainertext3: {
    backgroundColor: 'white',
    height: 330,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#cc9600',
    borderWidth: 2,
    margin: 30,
    top: 70
    
  },

  boxContainertext4: {
    backgroundColor: 'white',
    height: 330,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#cc9600',
    borderWidth: 2,
    margin: 30,
    top: 70
    
  },

  boxContainertext5: {
    backgroundColor: 'white',
    height: 330,
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
    color: 'black',
    fontSize: 20,
    top:10
    
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:70,
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

  heading:{
    fontSize: 30,
    top:20,
  }

});

export default BoxContainer;