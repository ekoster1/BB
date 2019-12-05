import { StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CCCCFF',
      alignItems: 'center',
      justifyContent: 'center',
                                
    },
    facialContainer: {
      flex: 1,
      flexDirection:'row',
      backgroundColor: '#CCCCFF',
      alignItems: 'center',
      justifyContent: 'center',
                                 marginTop: 7,
    },
    homeButton:{
      margin:10,
                                 
      padding:10,
      backgroundColor:"#CCCCFF",
      borderRadius: 25,
      width: 290,
      borderColor: "#6666FC",
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
                                 shadowOffset:{  width: 1,  height: 1,  },
                                 shadowColor: 'black',
                                 shadowOpacity: .05,
    },
                                 loginButton:{
                                 margin:10,
                                 
                                 padding:10,
                                 backgroundColor:"#FFF",
                                 borderRadius: 25,
                                 width: 290,
                                 borderColor: "#FFF",
                                 borderWidth: 2,
                                 alignItems: "center",
                                 justifyContent: "center",
                                 shadowOffset:{  width: 1,  height: 1,  },
                                 shadowColor: 'black',
                                 shadowOpacity: .07,
                                 },
  facialButton: {
        flexDirection: 'column',
        margin:7,
                                 marginTop: 0,
                                 
        padding:10,
        backgroundColor:"#CCCCFF",
        borderRadius: 10,
        width: 160,
        height: 160,
                                 borderColor: "#8c8cff",
        borderWidth: 1,
        alignItems:'center',
                                 color: '#FFFF',
                                 borderRadius: 2,
                                 shadowOffset:{  width: 1,  height: 1,  },
                                 shadowColor: 'black',
                                 shadowOpacity: .02,
    },
    text:{
                                 color:"#6666FC",
                                 
                                
    fontSize: 20,
                                 },
                                 homeText:{
                                 color:"#6666FC",
                                 
                                 fontSize: 20,
                                 marginBottom: 150,
        
    },
                                 
                                 imageText:{
//                                 color:"#918f89",
                                 color:"#6666FC",
                                
    fontSize: 16,
                                 shadowOffset:{  width: 1,  height: 1,  },
                                 shadowColor: 'black',
                                 shadowOpacity: .05,
        
    },
                                 loginText:{
                                 color:"#6666FC",
                                 
                                 fontSize: 12,
                                 textAlign: 'left',
                                 marginBottom: 0,
                                 marginTop: 5,
                                 
                                 
                                 },
    textInput: {
        height: 40,
        width: 300,
        borderBottomColor: 'white', 
        borderBottomWidth: 1,
                                 marginBottom: 15,
                                 fontSize: 16
    },
    image: {
        width: 310,
        height: 110,
//        margin: 20,
                                 marginBottom: 70,
        marginTop: 50,
        position:'absolute',
        top:150,
    },
                                 loginImage: {
                                 width: 300,
                                 height: 100,
                                 //        margin: 20,
                                 marginBottom: 30,
                                 marginTop: 0,
                                 position:'absolute',
                                 top:150,
                                 },
    facialImage: {
        width: 140,
        height: 45,
        marginTop: 30,
        marginBottom: 35,
        padding:10,
        resizeMode:'stretch',
    },
                               
    safeArea: {
        flex: 1,
        backgroundColor: '#CCCCFF'
    },
    videoSafeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    demacate: {
        borderBottomColor: '#6666FC',
                                 borderColor: '#6666FC',
        borderBottomWidth: 2,
        borderRadius:1
    },
    item: {
        padding: 20,
        fontSize: Dimensions.get('window').width * .05,
        height: 44,
        color: '#FFF',
    },
    button:{
        margin: 10,
        marginTop: 20,
        padding:10,
        borderRadius: 0,
        borderBottomColor: "#8c8cff",
        borderBottomWidth: 1.3,
        height: 44,
        width: 300,
        fontSize: 18,
                                 shadowOffset:{  width: 1,  height: 1,  },
                                 shadowColor: 'black',
                                 shadowOpacity: .03,
                                
    },
  });

  export {styles}
