## The Expo Link For Project Is Here :-
 * https://expo.io/@skynet-08/chatbot
<image src=" https://drive.google.com/open?id=1N0xKsUWsGUOt7AEwHrX-ipq13snW2ugF"/>
 
 
 
 

 
 
 
 # Introduction :-

This tutorial will walk through building a simple real-time chat app with React Native for Android and iOS. Along the way, you'll get to practice React Native basics and learn about tools you can use to build apps.

Work the tutorial at your own pace. The instructions below assume that you are comfortable with writing JavaScript and using npm. The tutorial assumes the use of `npm`, but the equivalent `yarn` commands will work as well.




##  Features :-
* [Load Earlir messages]
* [Touchable link using react-native-app]
* [System message ]
* [Messaging by api]
* [Redux support.]

## Dependencies :-
* Use version 0.2.x for RN >= 0.44.0
* Use version 0.1.x for RN >= 0.40.0
* Use version 0.0.10 for RN < 0.40.0

## Notes for local Development :-
* npm install -g create-react-native-app
* create-react-native-app Projectname
* cd projectname
* npm start

## Installation :- 
* Using npm:
* npm install react-native --save
* npm install native-base --save

## Code  :-
```jsx

import React from 'react';

import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput,Linking} from 'react-native';


import {Header,Container,Left,Title,Body,Right} from 'native-base';


export default class App extends React.Component {
  state={
   isReady: false
        }

 async componentWillMount() {
 await Expo.Font.loadAsync({
   'Roboto': require('native-base/Fonts/Roboto.ttf'),
   'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
 });
 this.setState({isReady:true})
}



render() {

   if (!this.state.isReady) {
    return <Expo.AppLoading />;
         }


return (

        <ImageBackground source={require('./rt.jpeg')}style={styles.container}>
        <Container>
            <Header style={styles.headerStyle}>
              <Left>
                <Body>
                  <Title style={styles.headerTitleStyle}>Online Store</Title>
                </Body>
              </Left>
           </Header>
        </Container>
  <View style={styles.logocontainer}>
  
           <Image source={require('./gg.png')} style={styles.logo}/>
  </View>

        <Text style={styles.textStyle}>ChatBot App</Text>
    <View style={styles.logincontainer}>
             <TextInput underlineColorAndroid='transparent' placeholder='Enter your name' style={styles.textinput}/>

            <TouchableOpacity onPress={() => Linking.openURL('https://bot.dialogflow.com/24eb5166-855e-4043-b0ba-74f9bb04608f')}>
                        <Text style={styles.text2Style}>
                                     Start Here
                        </Text>
             </TouchableOpacity>

   </View>
</ImageBackground>

             );
      }
}

 const styles = StyleSheet.create({

    container: {
                  flex: 1,

                  justifyContent:'center',

                  padding: 20,
                  backgroundColor:'transparent',

                   alignSelf: 'stretch',
                     width: undefined,
                  },

 headerStyle: {

                  backgroundColor:'transparent',
                  padding:30,
                  borderColor:'transparent',


             },

 headerTitleStyle: {
                     
                     fontSize:23,
                     padding:10,

                   },

 logocontainer: {
                 
                 flex:1,
                  alignItems:'center',
                  justifyContent:'center',
                },

    logo:  {
                  width:190,
                  height:170,
         },

  textStyle: {
  
                color:'white',
                fontSize:50,
                justifyContent:'center',
                flex:1,
                alignItems:'center',
                textAlign:'center',
            },

logincontainer:{

                alignItems:'center',
               },

  textinput:{
            
            color:'black',
             fontSize:20,
             padding:10,
             alignSelf:'stretch',
             marginBottom:10,
             borderWidth:.5,
             borderColor:'#fff',
             backgroundColor:'white',

           },
           
  text2Style: {
  
             color:'white',
             fontSize:35,
             },





}
);
```

## Props :-
- ImageBackground 
- TextInput 
- TouchableOpacity



# Publish your app!

Because we've built the app on Expo, you can distribute the app via Expo's `exp` CLI. Let's install that globally on your machine and sign up:
```sh
npm install -g exp
exp register
```


# Summary
Building this small app, we've covered a lot of ground. We...
- Learned how to create a new app with Create React Native App (CRNA)
- Learned how to set up a live-reloading development environment with Expo
- Learned about the anatomy of a React Native module
- Learned about native primitives like Views, Texts, Images and more
- Learned how to style and layout our components with the CSS-like Flexbox implementation
- Learned how to gather user input with TextInput
- Learned how to work with the device keyboard with KeyboardAvoidingView
- Learned how to use async/await to perform asynchronous API calls
- Learned about the power of third-party Components and how to use them in your app
- Learned how to split your app into multiple components
- Learned how to publish an app to the Expo store

Of course, we didn't learn them very deeply. You now have an idea on how to build a simple app in React Native, but the learning only starts here!


# Resources
Useful resources:
- [React Native docs](https://facebook.github.io/react-native/)
  - [Built-in components](https://facebook.github.io/react-native/docs/components-and-apis.html)
- [React Native Express](http://www.reactnativeexpress.com/) - A great guide for experienced JavaScripp developers
- [React (Native) Parts](https://react.parts/native) - React Native components from NPM
- [React docs](https://facebook.github.io/react/docs/hello-world.html)
- [Expo docs](https://docs.expo.io/versions/v17.0.0/index.html)
- [Awesome React Native](https://github.com/jondot/awesome-react-native) - More resources than you will ever have time to read!


## Made by rohitpardhi90@gmail.com  
   * URL OF MY GIHUB CHAT PROJECT IS  :-
  - https://github.com/rohitpardhi1998/HPDF-Chat
