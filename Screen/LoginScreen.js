import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'




export default function LoginScreen() {
  return (
     <View style={styles.container}>

      

       <View style={styles.formBox}>
            <Text style={styles.lebel}>EMAIL</Text>
            <View style={styles.emailInputArea}>
            <TextInput style={styles.emailInput} placeholderTextColor={'#A2A2A2'} placeholder="email here" />
            </View>
            
            <Text style={styles.lebel}>PASSWORD</Text>
            <TextInput style={styles.emailPasswordArea}  placeholderTextColor={'#A2A2A2'}placeholder="password here" />
                <View style={styles.forgotLabelArea}>
                  <Text style={styles.forgotLabel}>FORGOT?</Text>

                </View>

        </View>
    
    </View>
    
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },
  formBox:{
    zIndex:10,
    alignSelf:"center",
    marginTop: 300,
    width:360,
    height:300,
    backgroundColor:"black",
    padding:10
  },
  lebel:{
    color:"white",
    fontSize:16,
    fontWeight:"600",
    letterSpacing:1.5,
  },
  emailInputArea:{
    marginTop:10,
    marginBottom:10,borderRadius:5,
    height:40,
    padding:10,
    color:"#A2A2A2",
    backgroundColor:"#212121",
    marginLeft:10
  },
  emailPasswordArea:
  {
    marginTop:10,
    marginBottom:10,
    borderRadius:5,
    height:40,
    padding:10,
    color:"#A2A2A2",
    backgroundColor:"#212121",
    marginLeft:10,

  }
  
});