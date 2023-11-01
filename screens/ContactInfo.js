import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Linking } from 'react-native';

const openWebsite = (url) => {
  Linking.openURL(url).catch((err) =>
    console.error('An error occurred: ', err)
  );
};

const sendEmail = (toEmail, subject, body) => {
  const emailUrl = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  Linking.openURL(emailUrl).catch((err) =>
    console.error('An error occurred: ', err)
  );
};


const OneContainer = (props) => {
  return (
    <>
    <View style={styles.pageContainer}>
      <TouchableOpacity onPress={ () => openWebsite('https://github.com/Khushikalraa')}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Github
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => openWebsite('https://www.linkedin.com/in/khushikalraa/')}> 
        <View style={styles.container}>
          <Text style={styles.text}>Linkedin</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => sendEmail('kalrakhushi2535@gmail.com', 'Email Subject', 'Email Body')}>
        <View style={styles.container}>
          <Text style={styles.text}>Email id</Text>
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

export default OneContainer;
