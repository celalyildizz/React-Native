import React,{PureComponent} from 'react';
import {View,Text,Button,AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
class LoginScreen extends PureComponent{
    constructor(props){
        super(props) 
        this.attemptLogin=this.attemptLogin.bind(this)
    }

    attemptLogin(){
        var token="sometokenregex"
        this.props.authSuccess(token);
    }
    render (){
        return(
            <View style={{flex:1,backgroundColor:'#ffffff',
            alignItems:'center',justifyContent:'center'}}>
            <Text children="Redux Login Example"/>
            <Text children="Click on Login to continue" />
            <Button color="#901000" title="Login" onPress={this.attemptLogin}/>      
            </View>
        )
        }
        
    };
    const mapStateToProps=(state,ownProps) =>{
        return {}
    }
               
            
            const actionCreator=(action,payload=null) => {(type,payload)}
   
            const  mapDispatchToProps=(dispatch,ownProps)=>{
       authSuccess:(token)=>{
           AsyncStorage.multiSet([['token',token],['loggedin','1']])
           dispatch(actionCreator('LOGIN_SUCCESS'))
       }
            }
                
            export const authStateReducer=(state={app_stated:false,authenticated:false},{type,payload}) =>
            {
                switch(type){
                    case 'LOGIN_SUCCES':
                    return {...state,authenticated:true}
                    case 'LOGOUT':
                    return{...state,authenticated:false}
                    case 'APP_LOADED':
                    return {...state,app_stated:true}
                    default:
                    return state
                }
            }          
 export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)


