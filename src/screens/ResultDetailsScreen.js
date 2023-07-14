import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import yelp from "../api/yelp";

const ResultDetailsScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);

  const fetchDetailsById = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    fetchDetailsById(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View style={styles.background}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={(photo) => {
          return photo;
        }}
        showsHorizontalScrollIndicator={false}
        renderItem ={({ item }) => {
            console.log(item)
          return <Image style={styles.listImage} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    height: 300,
    width: Dimensions.get("window").width,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    margin: 20,
  },
  listImage: {
    height: 180,
    width: 250,
    margin: 20,
    borderRadius: 10,
  },
});

export default ResultDetailsScreen;
