import React from 'react';
import {View, Text, StatusBar, StyleSheet, FlatList} from 'react-native';
import ListItem from './components/ListItem';

import { SAMPLE_DATA } from './assets/data/sampleData';

const ListHeader = () => (
  <>
<View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}>Markets</Text>
      </View>
      <View style={styles.divider}/>
      </>
)

export default function App() {
  return (
    <View style={styles.container}>
      

      

      <FlatList 
      keyExtractor={(item) => item.id}
      data={SAMPLE_DATA}
      renderItem={({item}) => (
        <ListItem 
        name={item.name} 
      symbol={item.symbol}
      currentPrice={item.current_price}
      priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
      logoUrl={item.image}
        />
      )}
        ListHeaderComponent={ <ListHeader /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
largeTitle: {
  fontSize: 24,
  fontWeight: "bold",

},
container: {
  flex: 1,
  backgroundColor: '#fff',
},
titleWrapper: {
  marginTop: 20,
  paddingHorizontal: 16,

},
divider: {
  height: StyleSheet.hairlineWidth,
  backgroundColor: '#A9ABB1',
  marginHorizontal: 16,
  marginTop: 16,

}
});

