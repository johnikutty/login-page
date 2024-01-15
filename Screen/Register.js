import { StyleSheet, Text, View ,Image, SafeAreaView} from 'react-native'
import React from 'react'

const registerUser = require ("../assets/icons/1.png");
const backIcon = require ("../assets/icons/2.png");

export default function Register() {
  return (
   <View style={styles.container}>

     
    <SafeAreaView>
      <View  style={styles.backButtonArea}>
        <Image source={backIcon} style={styles.backIcon} />
        <Text style={styles.backText}>Back</Text>

      </View>
       <View style={styles.addProPicArea}>
           <View style={styles.registerIconArea}>
              <Image source={registerUser} resizeMode='contain' style={styles.registerUserIcon} /> 
         
            </View>
        <Text style={styles.addProText}>Add profile picture</Text>

      </View>
    </SafeAreaView>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
   
  },
  backButtonArea:{
          width:100,
          height:50,
         marginLeft:20,
          justifyContent:'space-evenly',
          flexDirection:'row',
          alignItems:'center'
  },
  backIcon:{
    width:15,
    height:15

  },
  backText:{
    fontSize:16,
    fontWeight:'bold',
    color:"#ffffff90"

  },
  addProPicArea:{
    width:'100%',
    height: 330,
    // backgroundColor:'white', off frame
    justifyContent:'center',
    alignItems:'center'
  },
  registerIconArea:{
    width:120,
    height:120,
    backgroundColor:'#1D1D1D',
    
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100
  },
  registerUserIcon:{
      width:60,
      height:60 
  },
  addProText:{
    
    width:200,
    
    marginTop:15,
    fontSize:14,
    textAlign:'center',
    color:'#ffffff',
    
  }
});