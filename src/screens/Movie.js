import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity,  } from 'react-native'
import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Movie = () => {
  const navigation = useNavigation();

  const [movies,setMovie] = useState([])
  useEffect(() => {
    let url = "https://api.themoviedb.org/3/trending/movie/day?api_key=7d3ca717c32a97d356ba0e26ad6692e7"
    axios.get(url).then(res => {
    setMovie(res.data.results)
    })
  }, [])
  console.log("Data", movies) 
  return (
   <ScrollView style={styles.container}>
      {
        movies.map ((item, index) => {
          return(
            <TouchableOpacity key={index} onPress={() => navigation.navigate('Detail', {movie_id :item.id})}>
              <View
               style={styles.containerImage} >
            <Image
              style={styles.Img}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}/>
            </View>
            </TouchableOpacity>
          )
        })
      }
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: "#262A56",
  },
  containerImage : {
    borderWidth: 2,
    alignItems:'center',
    padding:10,
    margin:20,
    borderColor: "#ffff",
    backgroundColor: "rgba(227, 204, 174 ,2)",
    borderRadius:10,
  },
  Img : {
    height: 420,
    width:300,
    borderRadius: 10,
    borderColor : "black",
  },
})
export default Movie