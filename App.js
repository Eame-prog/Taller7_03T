import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, TouchableHighlight, Image } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';

export default function Example() {
  const [items, setItems] = React.useState([
    { name: 'Blusa: roja', prec: '$ 15', img: require('./assets/Fotos/a.png'), code: '#cd5c5c' },
    { name: 'Blusa: blanca', prec: '$ 17', img:  require('./assets/Fotos/b.png'), code: '#43cd80' },
    { name: 'Blusa: beige', prec: '$ 15', img:  require('./assets/Fotos/c.png'), code: '#ff8c00' },
    { name: 'Blusa: rosa', prec: '$ 17', img:  require('./assets/Fotos/d.png'), code: '#cd5c5c' },
    { name: 'Blusa: amarilla', prec: '$ 12', img:  require('./assets/Fotos/e.png'), code: '#43cd80' },
    { name: 'Blusa: flores', prec: '$ 15', img:  require('./assets/Fotos/f.png'), code: '#ff8c00' },

    { name: 'Jeans: celeste', prec: '$ 25', img:  require('./assets/Fotos/g.png'), code: '#ffa07a' },
    { name: 'Jeans: azul', prec: '$ 31', img:  require('./assets/Fotos/h.png'), code: '#4876ff' },
    { name: 'pantalon: gris', prec: '$ 40', img:  require('./assets/Fotos/i.png'), code: '#ffa500' },
    { name: 'pantalon: negro', prec: '$ 40', img:  require('./assets/Fotos/j.png'), code: '#ffa07a' },
    { name: 'Jeans: negro', prec: '$ 32', img:  require('./assets/Fotos/k.png'), code: '#4876ff' },
    { name: 'Jeans: ajustado', prec: '$ 35', img:  require('./assets/Fotos/l.png'), code: '#ffa500' },

    { name: 'Vestido: negro', prec: '$ 120', img:  require('./assets/Fotos/m.png'), code: '#f39c12' },
    { name: 'Vestido: beige', prec: '$ 100', img:  require('./assets/Fotos/n.png'), code: '#191970' },
    { name: 'Vestido: blanco', prec: '$ 150', img:  require('./assets/Fotos/o.png'), code: '#B22222' },
    { name: 'Vestido: azul', prec: '$ 125', img:  require('./assets/Fotos/p.png'), code: '#f39c12' },
    { name: 'Vestido: gris', prec: '$ 125', img:  require('./assets/Fotos/q.png'), code: '#191970' },
    { name: 'Vestido: amarillo', prec: '$ 100', img:  require('./assets/Fotos/r.png'), code: '#B22222' },
  ]);

function createButtonAlert (titulo,nombre,precio){
    Alert.alert(
      titulo,
      nombre + "\nPrecio: " + precio,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
    }

  return (
    <SectionGrid
      itemDimension={90}
      // staticDimension={300}
      // fixed
      // spacing={20}
      sections={[
        {
          title: 'Blusas',
          data: items.slice(0, 6),
        },
        {
          title: 'Pantalones',
          data: items.slice(6, 12),
        },
        {
          title: 'Vestidos',
          data: items.slice(12, 18),
        },
      ]}
      style={styles.gridView}
      renderItem={({ item, section, index }) => (
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#bdb76b" onPress={() => createButtonAlert(section.title,item.name,item.prec)}>
            
        <View style={[styles.itemContainer, { backgroundColor: item.code }]} >
          <Image style={styles.estiloImagen} 
                  source = {item.img}/>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.prec}</Text>
        </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
  estiloImagen: {
    width: 75,
    height: 70,
    marginTop: 30,
  },
});