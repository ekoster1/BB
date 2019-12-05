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
      borderRadius: 10,
      width: 300,
      borderColor: "#6666FC",
      borderWidth: 2,
      alignItems: "center",
      justifyContent: "center",
    },                     
  facialButton: {
        flexDirection: 'column',
        margin:7,
                                 marginTop: 0,
        padding:10,
        backgroundColor:"#CCCCFF",
        borderRadius: 10,
        width: 160,
        height: 140,
        borderColor: "#6666FC",
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
                                 
                                 imageText:{
                                 color:"#6666FC",
                                
    fontSize: 16,
        
    },
                                 loginText:{
                                 color:"#6666FC",
                                 
                                 fontSize: 26,
                                 textAlign: 'left',
                                 marginBottom: 10,
                                 marginTop: 40,
                                 
                                 
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
        width: 350,
        height: 150,
//        margin: 20,
                                 marginBottom: 40,
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
        marginTop: 25,
        marginBottom: 25,
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
        borderBottomWidth: 2,
        borderRadius:10
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
        borderBottomColor: "#6666FC",
        borderBottomWidth: 2,
        height: 44,
        width: 300,
        fontSize: 18,
                                
    },
  });

  export {styles}
