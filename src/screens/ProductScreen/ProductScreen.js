import React, { useState } from 'react';
import { View, Text , StyleSheet , ScrollView} from 'react-native';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button/Button';
import ImageCarousel from '../../components/ImageCarousel';
import Favorite from '../../components/Favorite/Favorite';

const ProductScreen = () => {
   const [selectedOption,setSelectedOption]=useState(product.options);
  //  const [quantity,setQuantity]=useState(1);
  // const [favorite,setFavorite]=useState(1);
    return (

        <ScrollView style={styles.root}>
            {/* <Text> product screen </Text> */}
            <Text style={styles.title}>{product.title}</Text>
            {/* image carsousel */}
            <ImageCarousel images={product.images}/>
            {/* price */}
            <Text style={styles.price}>
                from ${product.price}
                {product.oldPrice &&(
                    <Text style={styles.oldPrice}> ${product.oldPrice}</Text> 
                )}
            </Text>
            {/* description  */}
            <Text style={styles.description}> {product.description}</Text>            
            {/* add to wishlist */}
                <Favorite style={styles.heart}/>
            {/* Button */}
            <Button style={styles.button} text ={'Buy Now'} onPress={() => {console.console.warn('Buy Now');}} />

            {/* quantity selector */}
            {/* <QuantitySelector quantity={quantity} setQuantity={setQuantity}/> */}
        </ScrollView>
    );


};
const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: 'white',
      },
      price: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
      },
      title: {
        
      },
      description: {
        marginVertical: 10,
        lineHeight: 20,
      },
      heart:{
        marginLeft:100,
      },
      button:{
        marginBottom:100,
      }
});
export default ProductScreen;