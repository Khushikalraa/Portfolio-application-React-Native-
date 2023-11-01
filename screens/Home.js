import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Home = ({ navigation }) => {
  return (

    <View style={styles.pageContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="bars" size={30} color="black" style={styles.menuIcon} 
        onPress={() => navigation.navigate('Menu')} title='Next Screen'
        />

      </TouchableOpacity>

      <View style={styles.boxContainer}>
        <TouchableOpacity>
        <Image
          source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/Curlyarrow.png')}
          style={styles.image}
        />
        </TouchableOpacity>
      </View>

      <View style={styles.boxContainertext}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.texthere}>
          A 19-year-old third-year undergraduate pursuing a Bachelor of Technology in Artificial Intelligence and Data Science at Vivekananda Institute of Professional Studies in Delhi, India. With a flair for app development using React Native and Flutter, knowledge of Firebase, design finesse with Figma, and a passion for Natural Language Processing (NLP), I'm a tech-savvy, Python-loving learner who loves to explore and innovate. My research paper on the Internet of Things earned the "Best Paper" award at the SMMET'22 conference. Beyond technology, I'm a seasoned graphic designer and a dance enthusiast. I'm all about setting high ambitions, giving my all, and embracing life's beauty. Let's connect and explore new horizons together.
          </Text>
        </ScrollView>
      </View>

      <View style={styles.circleContainer}>
        <TouchableOpacity>
        <Image
          source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/me.jpeg')}
          style={styles.circleImage}
        />
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Hi!</Text>

      <Text style={styles.text2}>I'm Khushi Kalra</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 30,
    zIndex: 1, // Ensure it's above other elements
  },

  boxContainer: {
    backgroundColor: 'black',
    height: 350,
    width: 600,
    margin: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  boxContainertext: {
    backgroundColor: 'black',
    height: 470,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#cc9600',
    borderWidth: 2,
    margin: 30,
  },

  circleContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    overflow: 'hidden',
    position: 'absolute',
    left: 30,
    top: 100,
    width: 200,
    height: 200,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    left: 290,
    top: 200,
  },

  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    left: 235,
    top: 220,
  },

  image: {
    width: 300,
    height: 300,
    position: 'absolute',
    left: 200,
    top: -25,
    bottom:10,
    tintColor: '#cc9600',
  },

  menuIcon: {
    color: '#cc9600',
  },

  circleImage: {
    width: '150%',
    height: '140%',
    resizeMode: 'cover',
  },

  texthere: {
    margin: 30,
    color: 'white',
    fontSize: 20,
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
