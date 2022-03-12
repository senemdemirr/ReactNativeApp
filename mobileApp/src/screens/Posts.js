import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import api from '../services/api'

const Posts = () => {
  const [datas, setDatas] = useState(false)

  const getData = async () => {
    await api.get('/posts').then(response => {
      setDatas(response.data)
      console.log(response.data)
    }).catch(error => {
      console.error(error)
    })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>

      <FlatList 
        keyExtractor={(item) => item.id} 
        data={datas} 
        renderItem={({ item }) => ( 
          <Text style={styles.item}>{item.title}</Text>
        )}
      />

    </View>
  );
}

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor:"#060614"
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 10,
    backgroundColor: '#0c0c1a',
    fontSize: 15,
    textTransform: 'capitalize',
    color:'white'
  },
});