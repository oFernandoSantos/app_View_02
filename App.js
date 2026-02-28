import React from 'react';
import {View, Text} from 'react-native';

function App(){
  return(
  
 <View style={{backgroundColor: 'yellowgreen', paddingHorizontal: 30}}>
  
   <View style={{ backgroundColor: 'red', height: 100, 
        backgroundColor: 'red', 
        borderColor: 'black', 
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 10,
        paddingHorizontal: 10 }}>
  <Text>COMPONENTE VIEW</Text>
  
  
  </View>
   <View style={{ backgroundColor: 'yellow', height: 300, 
        backgroundColor: 'yellow', 
        borderColor: 'black',
        borderWidth: 5,
        marginBottom: 10,
        paddingHorizontal: 10}}>

  <Text>CONTEÚDO</Text>
  </View>

  <View style={{ backgroundColor: 'grey', height: 70, 
        backgroundColor: 'grey', 
        borderColor: 'black',
        borderWidth: 5,
        borderBottomLeftRadius: 20, 
        borderBottomRightRadius: 20,
        paddingHorizontal: 10}}> 
  <Text>Fernando Santos e Caio Bueno</Text>
  <Text>dd/mm/aaaa</Text>
  </View>
  
  </View>

  );

}
export default App;
