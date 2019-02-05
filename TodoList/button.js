import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';

export default class Tus extends React.Component{
render(){
        return(
        <View style={{backgroundColor:'#63b1ff',marginLeft:100,marginRight:100,height:50}}> 
            <TouchableOpacity onPress={this.props.onPress} style={{justifyContent:'center',alignItems:'center',padding:10,borderColor:'black',borderWidth:2}}>
                <Text style={{fontSize:24}}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
       </View>
        );
    }
}