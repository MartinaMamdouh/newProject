/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RatingScreen from './src/screens/RatingScreen';
import ProductScreen from './src/screens/ProductScreen';
import WishlistScreen from './src/screens/WishlistScreen/WishlistScreen';

const App = () => {
  

  return (
    <SafeAreaView >
       {/* <Text>hello world</Text> */}
       <RatingScreen/> 
      {/* <ProductScreen/> */}
       {/* <WishlistScreen/> */}
    </SafeAreaView>
  );
};


export default App;
