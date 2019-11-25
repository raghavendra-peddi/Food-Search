import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, error] = useBusinesses();


  const filterResultByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  }

  return <>
    <SearchBar term={term}
      onTermChange={setTerm}
      onTermSubmit={() => searchApi(term)} />
    {error ? <Text>{error}</Text> : null}
    <ScrollView>
      <ResultList
        results={filterResultByPrice('$')}
        title="Cost Effective"
      />
      <ResultList
        results={filterResultByPrice('$$')}
        title="Bit pricier"
      />
      <ResultList
        results={filterResultByPrice('$$$')}
        title="Big Spender"
      />
    </ScrollView>
  </>
}

const styles = StyleSheet.create({
});

export default SearchScreen;