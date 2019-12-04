import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CCCCFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      margin:20,
      padding:10,
      backgroundColor:"#CCCCFF",
      borderRadius: 10,
      width: 350,
      borderColor: "#6666FC",
      borderWidth: 2,
      alignItems: "center",
      justifyContent: "center",
    },
    facialButton:{
        flexDirection: 'row',
        margin:20,
        padding:10,
        backgroundColor:"#CCCCFF",
        borderRadius: 10,
        width: 350,
        borderColor: "#6666FC",
        borderWidth: 2,
        alignItems:'center'
        
      },
    text:{
        color:"#6666FC",
        fontSize: 20,
        
    },
    textInput: {
        width: 300,
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
        marginRight: 25,
        marginTop: 0,
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
        padding: 10,
        fontSize: 14,
        height: 44,
    }
  });

  export {styles}
