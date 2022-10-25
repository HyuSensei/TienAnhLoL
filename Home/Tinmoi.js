import { Text, View, StyleSheet,FlatList,ActivityIndicator,Image} from 'react-native'
import React, { useEffect,useState } from 'react'
import Tabs from '../nav/NavHome';
const Tinmoi=()=>{
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(true);
  
    useEffect(() => {
      getList();
     return () => {
  
     }
    }, []);
    const getList=()=>{
      return fetch('http://192.168.0.102/api_newspaper-main/api/baibao/Detail.php')
      .then((response) => response.json())
        .then((responseJson) => {
          setdata(responseJson);
          }
      ).catch((erro)=>{
        console.log('Erro', erro);
      }).finally(()=>{setisLoading(false)})
    }
    const renderItem = ({item, index}) => (
          <View style={styles.bai_bao}>
              <View style={styles.contentContainer}>
                  <Text style={styles.text_tieu_de}>{item.tieu_de}</Text>
                  <Image 
              source={{uri:item.anh}} 
              style={styles.img}/>
                  <Text style={styles.text_noi_dung}>{item.noi_dung}</Text>
              </View>
              <Image 
              source={{uri:item.logo}} 
              resizeMode="contain"
              style={styles.imglogo}/>
              
          </View>
    )
    return (
      <View style={styles.container}>
       {isLoading ? <ActivityIndicator/>: (
              <FlatList
              data={data}
              renderItem={renderItem}
              //horizontal
              keyExtractor={item =>`key-${item.id}`}
            />
            )}
        <Tabs/>
      </View>
    );
}
const styles = StyleSheet.create({
    container:{
        marginTop:50,
        justifyContent:'center',
        alignContent:'center',
        width:'100%',
        height:'87%'       
    },
    bai_bao:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10
    },
    img:{
        width:300,
        height:100,
        marginLeft:30,
        marginTop:20,
        marginBottom:30
    },
    text_tieu_de:{
        fontSize:16,
        fontWeight:'bold'
    },
    text_noi_dung:{
        fontSize:15
    }
})
export default Tinmoi;