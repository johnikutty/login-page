import { StyleSheet, Text, View ,Image, TouchableOpacity,SafeAreaView,TextInput} from 'react-native'
import React from 'react'



const backIcon = require ("../assets/icons/2.png");

export default function Forgotpassword() {
  return (
    <View style={styles.container}>

     
    <SafeAreaView>
      
      <TouchableOpacity  style={styles.backButtonArea} activeOpacity={0.9}>
        <Image source={backIcon} style={styles.backIcon} resizeMode='contain'/>
        <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        </SafeAreaView>


        <View style={styles.formBox}>
        <Text style={styles.forgotpasswordHeadText}>FORGOT PASSWORD?</Text>
        <Text style={styles.lebel}>EMAIL</Text>
           <View style={styles.emailInputArea}>
            <TextInput style={styles.emailInput} placeholderTextColor={'#A2A2A2'} placeholder='email here'/>
           </View>
          

           <TouchableOpacity style={styles.loginButton} activeOpacity={0.9}>
           <Text style={styles.loginButtonText}>SEND EMAIL</Text>
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
      },
      forgotpasswordHeadText:{
        color:"#ffffff",
        
      }
})