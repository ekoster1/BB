import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CCCCFF',
      justifyContent: 'center',
    },
    button:{
      margin:20,
      padding:10,
      backgroundColor:"#F1E7E5",
      borderRadius: 10,
      width: 350,
      borderColor: "#FEBA95",
      borderWidth: 2,
      justifyContent: "center",
    },
    text:{
        color:"#6666FC",
        fontSize: 20,
    },
    image: {
        width: 300,
        height: 300, 
        margin: 10,
        marginTop: 0,
        justifyContent: "center",
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
        borderBottomColor: '#F1E7E5',
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