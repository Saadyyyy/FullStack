import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Details = ({route}) => {
  const [details, setDetails] = useState([]);
  console.log('ini route', route.params.movie_id);
  useEffect(() => {
    Axios.get(
      'https://api.themoviedb.org/3/movie/' +
        route.params.movie_id +
        '?api_key=570c36d75740509c00d865a804d826a5&language=en-US',
    ).then(e => setDetails(e.data));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
          <View style={styles.containerImage}>
        <Image
          style={styles.ImageCover}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${details.poster_path}`,
          }}
        />
      </View>
      <View style={styles.container.title}>
        <Text style={styles.title}>{details.title}
        </Text>
      </View>
      <View>
         <Text style={styles.tanggal}>  
            ({details.release_date})
         </Text>
      </View>
      <View>
      <View >
         <Text style={styles.textoverview}>Overview</Text>
      </View>
        <Text style={styles.overview}>{details.overview}</Text>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(227, 204, 174 ,2)",
    fontFamily: 'Arial',
    paddingLeft: 20,
    paddingRight:20,
  },
  ImageCover: {
   height: 620,
    width:400,
    borderColor : "black",
  },
  containerImage: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
   fontWeight: 'bold',
   fontSize: 50,
   color: 'gray',
   textAlign:'center'
  },
  tanggal :{
   fontWeight:'400',
   fontSize:16,
   color: '#000',
   textAlign:'center'
  },
  textoverview:{
   marginTop: 30,
   fontWeight:'bold',
   fontSize : 30,
    color: 'gray',
  },
  overview:{
   fontSize:16,
   lineHeight: 25,
   marginTop:10,
  }
});
export default Details;
