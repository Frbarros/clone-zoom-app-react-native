import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#242424',
    },

    header:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:60,
    marginLeft:20,
    marginRight:20,

   },

    headerTitlePrimary:{
    fontSize:20,
    color:'#fff',
    fontWeight:'bold'
    },

    headerTitleSecondary:{
        fontSize:20,
        color:'#fff',
     },

        descriptionText:{
        color:'#606060',
        marginTop:20,
        marginLeft:32,
        marginBottom:10,
    },

        primaryButton:{
        width:'90%',
        borderRadius:10,
        height:50,
        backgroundColor:'#1B4376',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:'5%',
        marginTop:20,
        },
    
        buttonText:{
            color:'#fff',
            fontWeight:'bold',
        },

        input:{
            //flex:1,
            width:'80%',
            height: 40,
            marginLeft:15,
            color:'#fff',
        },

        inputView:{
            width:'90%',
            height:100,
            backgroundColor:'#2E2E2E',
            borderRadius:10,
            marginLeft:'5%',
            padding:10,
            marginTop:8,
      },

      inputLine:{
        flexDirection:"row",
        alignItems:"center",
      },

      inputLabel:{
        color:'#fff',
        fontSize:16,
      },

      forgoutPassword:{
        fontSize:12,
        color:'#0b5cff',
        marginLeft:20,
        marginTop:10,
        marginBottom:35,
      },

      icon:{
        width:12,
        height:15,
        padding:5,
      },

      secundaryButton:{
        width:'90%',
        borderRadius:10,
        height:50,
        backgroundColor:'#2E2E2E',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:'5%',
        flexDirection:"row",
        gap:10,
        },

        viewButtons:{
            gap:15,
        }





   
    
  });