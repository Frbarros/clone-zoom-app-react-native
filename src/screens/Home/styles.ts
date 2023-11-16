import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0A5CFE',
      alignItems: 'center',
      //justifyContent: 'center',
    },
  
    text:{
      fontSize:20,
      fontweight: 'bold',
    },
  
    logo:{
      width:200,
      height:200,
      marginTop:150,
      flex: 1,
    },
  
      view:{
          backgroundColor:'#000000',
          flex: 2,
          width:'100%',
          marginTop:150,
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          alignItems: 'center',
    },
  
      title:{
          fontSize:25,
          color:'#fff',
          marginTop:20,
          fontWeight:'bold'
    },
  
    subTitle:{
      color:'#fff',
      marginTop:5,
      fontSize:20,
  },
  
  primaryButton:{
      width:'80%',
      borderRadius:50,
      height:50,
      backgroundColor:'#4F9AF7',
      alignItems:'center',
      justifyContent:'center',
      marginTop:20,
      },
  
      buttonText:{
          color:'#fff',
          fontWeight:'bold',
      },
  
      secondaryButton:{
      width:'80%',
      borderRadius:50,
      height:50,
      backgroundColor:'#161616',
      alignItems:'center',
      justifyContent:'center',
      marginTop:20,
  
      },
  
  
    
    
  });