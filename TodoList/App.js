import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput} from 'react-native';
import Tus from './button';

const items =[];

export default class App extends Component{
  constructor(props)
  {
    super(props);
    this.gorevEkle=this.gorevEkle.bind(this);
  }
 state = {
   ToDo:'',
 }
 gorevEkle(){
   items.push(this.state.ToDo)
   this.setState({ToDo: ''})
 }
  renderItem(item){
    return(
      <View key={item} style={{height:100, backgroundColor:'white',borderRadius:16,border:4,borderColor:'black',margin:8,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'black',fontSize:24}}>
          {item}
       </Text> 
      </View>
    );
  }
  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
      <View style={{backgroundColor:'red',height:100,marginTop:21,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:36,fontFamily:'Arial'}}>
         HEDEFLERİM
      </Text>
      </View>
      <TextInput value={this.state.ToDo} onChangeText={(v)=> this.setState({ToDo: v})} placeholder="Yapmak istediğiniz işleri giriniz..." style={{height:32,backgroundColor:'white',margin:10,borderColor:'black',borderWidth:2,fontSize:20,paddingLeft:2}}/>
       <View>
         <Tus onPress={this.gorevEkle} text={'Ekle'}/>
      </View>
        <ScrollView > 
          {
            items.map((item)=>this.renderItem(item))
          }
        </ScrollView>
      
      </View>
    );
  }
}

