import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Linking  } from 'react-native';

const openWebsite = (url) => {
  Linking.openURL(url).catch((err) =>
    console.error('An error occurred: ', err)
  );
};

const Skills = (props) => {
  return (
    <>

<View style={styles.pageContainer}>

<Text style={styles.Text1}>Skills</Text>
<Text style={styles.Text2}>Languages</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer} horizontal={true}>

        <View style={styles.row}>
          <TouchableOpacity onPress={ () => openWebsite('https://reactnative.dev/')}>
            <View style={styles.container}>
              <Image source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/1.png')} style={styles.Image} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={ () => openWebsite('https://flutter.dev/')}>
            <View style={styles.container}>
            <Image source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/2.png')} style={styles.Image} />
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={ () => openWebsite('https://react.dev/')}>
            <View style={styles.container}>
            <Image source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/3.jpg')} style={styles.Image} />
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity  onPress={ () => openWebsite('https://en.wikipedia.org/wiki/Natural_language_processing')}>
            <View style={styles.container}>
            <Image source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/4.webp')} style={styles.Image} />
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity  onPress={ () => openWebsite('https://en.wikipedia.org/wiki/Machine_learning')}>
            <View style={styles.container}>
            <Image source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/5.png')} style={styles.Image} />
            </View>
          </TouchableOpacity> */}
          {/* <TouchableOpacity  onPress={ () => openWebsite('https://unity.com/')}>
            <View style={styles.container}>
            <Image source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/6.jpeg')} style={styles.Image} />
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity  onPress={ () => openWebsite('https://regexr.com/')}>
            <View style={styles.container}>
            <Image source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/7.jpg')} style={styles.Image} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={ () => openWebsite('https://www.figma.com')}>
            <View style={styles.container}>
            <Image source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/8.webp')} style={styles.Image} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={ () => openWebsite('https://www.gimp.org/')}>
            <View style={styles.container}>
            <Image source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/9.jpg')} style={styles.Image} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
 
 

    <ScrollView contentContainerStyle={styles.scrollContainer2} horizontal={true}>
      <View style={styles.row}>
        <TouchableOpacity onPress={ () => openWebsite('https://www.python.org/')}>
          <View style={styles.container}>
          <Image source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/10.png')} style={styles.Image2} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => openWebsite('https://en.wikipedia.org/wiki/C_(programming_language)')}>
          <View style={styles.container}>
          <Image source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/11.png')} style={styles.Image2} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => openWebsite('https://dart.dev/')}>
          <View style={styles.container}>
          <Image source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/12.png')} style={styles.Image2} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => openWebsite('https://www.java.com/en/')}>
          <View style={styles.container}>
          <Image source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/13.svg.png')} style={styles.Image2} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => openWebsite('https://en.wikipedia.org/wiki/JavaScript')}>
          <View style={styles.container}>
          <Image source={require('/Users/salonikalra/Desktop/Learning/HelloWorld/assets/14.webp')} style={styles.Image2} />
          </View>
        </TouchableOpacity>
       
      </View>
    </ScrollView>
    </View>

    <TouchableOpacity>
      <View>
        <Icon name="arrow-left" size={20} color="black" style={styles.menuIcon} />
        <Text style={styles.Traceback}> Home</Text>
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

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  
  },

  container: {
  
    height: 150,
    width: 150,
    margin: 20,
    marginBottom: -80, 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
    borderColor: '#cc9600',
    borderWidth: 2,
    top: 140,
  },

  Text1:{
    fontSize: 30,
    position: 'absolute',
    top: 120
  },

  Text2:{
    fontSize: 30,
    position: 'absolute',
    top: 485
  },



  Traceback: {
    color: 'black',
    position: 'absolute',
    bottom: 830,
    left: 55,
    fontSize: 15,
  },

  menuIcon: {
    position: 'absolute',
    bottom: 830,
    left: 30,
    color: 'black',
  },

  scrollContainer: {
    flexDirection: 'row',
    top: 30,
  },

  scrollContainer2: {
    flexDirection: 'row',
  },



  Image: {
    height: 142,
    width: 142,
    borderRadius: 75,
    resizeMode: 'cover',
  },

  Image2:{
    height: 142,
    width: 142,
    borderRadius: 75,
    resizeMode: 'cover',
  },

  Button:{
    
    backgroundColor: 'white',
    borderColor: '#cc9600',
    borderRadius: 10, 
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top:40,
    left: 150,

  

  }
});

export default Skills;
