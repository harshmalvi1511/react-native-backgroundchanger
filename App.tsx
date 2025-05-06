
import React, { useState } from 'react';

import {

  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';



function App(): React.JSX.Element {

  const [randomBackgroud, setrandomBackgroud] = useState('#ffffff')

  const generatecoler = () => {
    const hexrange = "0123456789abcdef"
    let color = "#"

    for (let i = 0; i < 6; i++) {

      color += hexrange[Math.floor(Math.random() * 16)]
      
    }
    setrandomBackgroud(color)
  }

  


  return(
    <>
    <StatusBar backgroundColor={randomBackgroud}/>
    <View style={[styles.container, {backgroundColor: randomBackgroud}]}>
      <TouchableOpacity onPress={generatecoler}>
        <View style={styles.actionbtn}>
          <Text style={styles.actionbtntxt}>press me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  actionbtn:{
    borderRadius:8,
    paddingHorizontal:40,
    paddingVertical:10
  },
  actionbtntxt:{
    fontSize:24,
    color:'#ffffff',
    textTransform:"uppercase"

  }

});

export default App;
