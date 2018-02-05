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

 headerStyle:{

                  backgroundColor:'transparent',
                  padding:30,
                  borderColor:'transparent',


             },

 headerTitleStyle:{
                   fontSize:23,
                   padding:10,

              },

 logocontainer:{
                  flex:1,
                  alignItems:'center',
                  justifyContent:'center',
              },

    logo:{
                  width:190,
                  height:170,
         },

  textStyle:{
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
  text2Style:{
            color:'white',
            fontSize:35,
 },





});
