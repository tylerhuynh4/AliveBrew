import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const ORANGE = '#FF8C00';

export default function Customize({ navigation }) {
  const route = useRoute();
  const { drinkName, price, image } = route.params;

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('Medium');
  const [milk, setMilk] = useState('Whole');

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  
  return (
  <ScrollView style = { styles.container } 
              contentContainerStyle = {{ paddingBottom: 60 }}>

      {/* Header Image */}
      <Image source = { image } 
             style = { styles.image } />

      {/* Back Button */}
      <TouchableOpacity style = { styles.backBtn } 
                        onPress = { () => navigation.goBack() }>
        <Text style = {styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* White Card */}
      <View style = { styles.whiteCard }>
        <Text style = {styles.title}>{drinkName} (${price})</Text>
        <Text style = { styles.subtitle }>
          Great refresher for the day! | 350 cal{'\n'}
          Choice of milk, sugar, black tea served over ice for a smooth taste.
        </Text>

        {/* Divider */}
        <View style = { styles.divider } />

        {/* Quantity */}
        <View style = { styles.sectionRow }>
          <Text style = {styles.sectionTitle}>Select Quantity</Text>
          <View style = { styles.qtyBox }>
            <TouchableOpacity onPress = { decrement } 
                              style = { styles.qtyBtn }>
              <Text style = {styles.qtyText}>–</Text>
            </TouchableOpacity>
            <Text style = {styles.qtyCount}>{quantity}</Text>
            <TouchableOpacity onPress = { increment } 
                              style = { styles.qtyBtn }>
              <Text style = {styles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style = { styles.divider } />

        {/* Size */}
        <View style = { styles.section }>
          <Text style = {styles.sectionTitle}>Size Options</Text>
          <View style = { styles.optionRow }>
            {['Small', 'Medium', 'Large'].map((s) => (
            <TouchableOpacity key = { s }
                              style = { [styles.sizeBtn, size === s && styles.selectedSize] }
                              onPress = { () => setSize(s) } >
              <Text style = {[styles.sizeText, size === s && styles.selectedText]}>{s}</Text>
            </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style = { styles.divider } />

        {/* Milk */}
        <View style = { styles.section }>
          <Text style = {styles.sectionTitle}>Milk Options</Text>
          {['Whole', 'Oatmilk', 'Almond', 'Coconut'].map((m) => (
          <TouchableOpacity key = { m }
                            style = { styles.milkRow }
                            onPress = { () => setMilk(m) }>
            <View style = { styles.milkSelectRow }>
              <Ionicons name = { milk === m ? 'radio-button-on' : 'radio-button-off' }
                        size={22}
                        color = { milk === m ? ORANGE : '#aaa' } />
              <Text style = {styles.milkText}>{m}</Text>
            </View>
            <Text style = {styles.milkPrice}>{m === 'Whole' ? '$0' : '+$1'}</Text>
          </TouchableOpacity>
          ))}
        </View>

        {/* Cart */}
        <TouchableOpacity style = { styles.addCartBtn }>
          <Ionicons name = "cart-outline" 
                    size = { 22 } 
                    color = "white" />
          <Text style = {styles.addCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: ORANGE },
  
  // Header
  image: { 
    width: '100%', 
    height: 300, 
    resizeMode: 'cover' 
  },
  backBtn: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  backText: { 
    color: ORANGE, 
    fontWeight: 'bold' 
  },

  // White Card
  whiteCard: {
    backgroundColor: '#fff',
    marginTop: -30,
    borderRadius: 40,
    padding: 25,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#000', 
    textAlign: 'center' 
  },
  subtitle: { 
    fontSize: 14, 
    color: '#444', 
    textAlign: 'center', 
    marginTop: 8, 
    lineHeight: 20 
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  section: { marginTop: 20 },
  sectionTitle: { 
    fontWeight: 'bold', 
    fontSize: 16, 
    color: '#000' 
  },

  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 8,
  },

  // Quantity
  qtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ORANGE,
    borderRadius: 15,
    width: 100,
    height: 38,
  },
  qtyBtn: { paddingHorizontal: 10 },
  qtyText: { 
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  qtyCount: { 
    color: 'white', 
    fontSize: 18, 
    marginHorizontal: 5 
  },

  // Options
  optionRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    marginTop: 10 
  },
  sizeBtn: {
    borderRadius: 20,
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 22,
  },
  selectedSize: { backgroundColor: ORANGE },
  sizeText: { 
    color: '#555', 
    fontWeight: 'bold' 
  },
  selectedText: { color: 'white' },

  // Milk
  milkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 12,
  },
  milkSelectRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 10 
  },
  milkText: { 
    fontSize: 16, 
    color: '#333' 
  },
  milkPrice: { 
    fontSize: 16, 
    color: '#777', 
    marginRight: 20 
  },

  // Cart
  addCartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ORANGE,
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  addCartText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    marginLeft: 8, 
    fontSize: 16 
  },
});
