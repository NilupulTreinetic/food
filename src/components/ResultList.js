import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultListItem from "../components/ResultListItem";
import { withNavigation } from "react-navigation";

const resultList = ({ title, result, navigation}) => {
  return (
    <View styles={styles.background}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={styles.listStyle}
        horizontal
        keyExtractor={(result) => result.id}
        showsHorizontalScrollIndicator={false}
        data={result}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('ResultDetails', {id:item.id})}>
              <ResultListItem result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    flexDirection: "column",
    marginLeft: 20,
    marginBottom: 20,
  },
  title: {
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  listStyle: {
    marginBottom: 20,
  },
});

export default withNavigation(resultList);
