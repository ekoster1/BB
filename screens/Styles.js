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
    },
    homeButton:{
      margin:20,
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
        margin:10,
        padding:10,
        backgroundColor:"#CCCCFF",
        borderRadius: 10,
        width: 160,
        height: 140,
        borderColor: "#6666FC",
        borderWidth: 1,
        alignItems:'center',
                                 color: '#FFFF',
    },
    text:{
        color:"#6666FC",
                                
    fontSize: 20,
        
    },
    textInput: {
        height: 40, 
        width: 300,
        borderBottomColor: 'white', 
        borderBottomWidth: 1, 
    },
    image: {
        width: 300,
        height: 100, 
        margin: 10,
        marginTop: 0,
        position:'absolute',
        top:150,
    },
    facialImage: {
        width: 120,
        height: 40,
        marginTop: 15,
        marginBottom: 10,
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
        borderRadius: 10,
        borderBottomColor: "#6666FC",
        borderBottomWidth: 2,
        height: 44,
        width: 300,
        fontSize: 18,
    },
  });

  export {styles}
