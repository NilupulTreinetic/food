import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, results, errorMessage] = useResults();
  const [isLoading, setLoadingStatus] = useState(false);

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        searchTerm={searchTerm}
        onChanged={setSearchTerm}
        onSearchComplete={() => searchResult(searchTerm)}
      />
      {errorMessage && <Text style={styles.errorStyle}>{errorMessage}</Text>}
       
      <ScrollView>
        <ResultList title="Cost effective" result={filterResultByPrice("$")} />
        <ResultList title="Bit pricer" result={filterResultByPrice("$$")} />
        <ResultList title="Big Spender" result={filterResultByPrice("$$$")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  errorStyle: {
    color: "red",
  },
});

export default SearchScreen;
