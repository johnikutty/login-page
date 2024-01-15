import { StyleSheet, Text, View ,Image, SafeAreaView, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'

const registerUser = require ("../assets/icons/1.png");
const backIcon = require ("../assets/icons/2.png");

export default function Register() {
  return (
   <View style={styles.container}>

     
    <SafeAreaView>
      
      <TouchableOpacity  style={styles.backButtonArea} activeOpacity={0.9}>
        <Image source={backIcon} style={styles.backIcon} resizeMode='contain'/>
        <Text style={styles.backText}>Back</Text>
        

      </TouchableOpacity>
       <View style={styles.addProPicArea}>
           <View style={styles.registerIconArea}>
              <Image source={registerUser} resizeMode='contain' style={styles.registerUserIcon} /> 
         
            </View>
        <Text style={styles.addProText}>Add profile picture</Text>
      </View>
    </SafeAreaView>
    <View style={styles.formBox}>
        <Text style={styles.lebel}>FIRST NAME</Text>
          <View style={styles.emailInputArea}>
            <TextInput style={styles.emailInput} placeholderTextColor={'#A2A2A2'} placeholder='first name here'/>
           </View>
 <Text style={styles.lebel}>LAST NAME</Text>
           <View style={styles.emailInputArea}>
            <TextInput style={styles.emailInput} placeholderTextColor={'#A2A2A2'} placeholder='last name here'/>
           </View>
           <Text style={styles.lebel}>EMAIL</Text>
           <View style={styles.emailInputArea}>
            <TextInput style={styles.emailInput} placeholderTextColor={'#A2A2A2'} placeholder='email here'/>
           </View>
           <Text style={styles.lebel}>PASSWORD</Text>
           <View style={styles.emailInputArea}>
            <TextInput style={styles.emailInput} placeholderTextColor={'#A2A2A2'} placeholder='password here'/>
           </View>
           <Text style={styles.lebel}>CONFIRM PASSWORD</Text>
           <View style={styles.emailInputArea}>
            <TextInput style={styles.emailInput} placeholderTextColor={'#A2A2A2'} placeholder='confirm password here'/>
           </View>
            
            <TouchableOpacity style={styles.loginButton} activeOpacity={0.9}>
           <Text style={styles.loginButtonText}>REGISTER</Text>
           </TouchableOpacity>

    </View>

    

    

    
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
   
  },
  backButtonArea:{
          width:80,
          height:50,
         marginLeft:20,
          justifyContent:'space-evenly',
          flexDirection:'row',
          alignItems:'center'
  },
  backIcon:{
    width:12,
    height:12

  },
  backText:{
    fontSize:15,
    fontWeight:'bold',
    color:"#ffffff90"

  },
  addProPicArea:{
    width:"100%",
    height: 170,
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
    
  },
  formBox:{
    zIndex:10,
    alignSelf:"center",
    width:360,
    height:400,
     padding:10
  },
  lebel:{
    marginTop: 15,
    color:"white",
    fontSize:16,
    fontWeight:"600",
    letterSpacing:1,
  },
  emailInputArea:{
    marginTop:10,
    marginBottom:10, 
    borderRadius:8,
    height:40,
   
    color:"white",
    backgroundColor:"#212121",
   
  },
  emailInput:{
    width:280,
    height:40,
    padding:10,
    color:"white",
   paddingBottom:13,
    fontSize:17,
    backgroundColor:"#212121",
    marginLeft:10
  },
  loginButtonText:{
    fontSize:15,
    fontWeight:"bold"
  },
  loginButton:{
    marginTop:12,
    width:"100%",
    borderRadius:8,
    height:50,
    backgroundColor:"#FFBB3B",
    justifyContent:'center',
    alignItems:"center"
  }
});