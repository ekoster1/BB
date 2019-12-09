import { StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
                                 backgroundColor: '#FFF',
//                                 '#CCCCFF',
      alignItems: 'center',
      justifyContent: 'center',
                                
    },
    facialContainer: {
      flex: 1,
      flexDirection:'row',
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
                                 marginTop: 7,
    },
    homeButton:{
      margin:10,
                                 
      padding:10,
      backgroundColor:"#FFF",
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
                                 backgroundColor:"#6666FC",
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
        backgroundColor:"#FFF",
        borderRadius: 10,
        width: 157,
        height: 150,
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
                                 fontFamily: 'Gill Sans',
                                 },
                                 
                                 profileText:{
                                 color:"#6666FC",
                                 lineHeight: 30,
                                 
                                 fontSize: 20,
                                 fontFamily: 'Gill Sans',
                                 },
                                 
                                 categoriesText:{
                                 color:"#6666FC",
                                 
                                 
                                 fontSize: 22,
                                 fontFamily: 'GillSans-Light',
                                 },
                                 homeText:{
                                 color:"#FFF",
                                 
                                 fontSize: 20,
                                 
        
    },
                                 
                                 imageText:{
//                                 color:"#918f89",
                                 fontFamily: 'Gill Sans',
                                 color:"#6666FC",
                                
    fontSize: 17,
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
        borderBottomColor: '#8c8cff',
        borderBottomWidth: 1,
                                 marginBottom: 15,
                                 fontSize: 16,
                                 color: '#666666',
    },
    image: {
        width: 320,
        height: 120,
//        margin: 20,
                                 marginBottom: 70,
        marginTop: 60,
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
    profileImage: {
        width: 130,
        height: 130,
//        margin: 20,
                                 marginBottom: 70,
        marginTop: 60,
        position:'absolute',
        top:20,
                                 
                                 shadowOffset:{  width: 1,  height: 1,  },
                                 shadowColor: 'black',
                                 shadowOpacity: .05,
    },
                                 
    facialImage: {
        width: 140,
        height: 45,
        marginTop: 30,
        marginBottom: 30,
        padding:10,
        resizeMode:'stretch',
    },
                               
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    videoSafeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    demacate: {
        borderBottomColor: '#6666FC',
                                 borderTopColor: '#6666FC',
        borderBottomWidth: 2,
        borderRadius:1
    },
    item: {
        padding: 20,
        fontSize: Dimensions.get('window').width * .05,
        height: 44,
        color: '#6666FC',
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
                                 menuButton:{
                                 margin: 33,
                                 marginTop: 10,
                                 marginBottom: 5,
                                 
                                 padding:10,
                                 borderRadius: 0,
                                 borderBottomColor: "#8c8cff",
                                 borderBottomWidth: 1.3,
                                 height: 44,
                                 width: 269,
                                 
                                 shadowOffset:{  width: 1,  height: 1,  },
                                 shadowColor: 'black',
                                 shadowOpacity: .03,
                                 
                                 },
  });

  export {styles}
