import React,{PureComponent} from 'react';
import {View,Text,Button,AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
 class DashboardScreen extends PureComponent{
    constructor(props){
        super(props)
        this.attemptLogout=this.attemptLogout.bind(this)
    }

    attemptLogout(){
        
        this.props.logout();
    }
    render (){
        return(
            <View style={{flex:1,backgroundColor:'#ffffff',
            alignItems:'center',justifyContent:'center'}}>
         
            <Text children="Welcome User" />
            <Button color="#901000" title="Logout" onPress={this.attemptLogout}
            />         
            
            
            
            </View>
        )
        }
        
    };
    const mapStateToProps=(state,ownProps) =>{
        return {}
    }
               
            
            const actionCreator=(action,payload=null) => {(type,payload)}
   
            const  mapDispatchToProps=(dispatch,ownProps)=>{
       authLogout:()=>{
           AsyncStorage.multiRemove(['token','authenticated']);
           dispatch(actionCreator('LOGGOUT'))
       }
            }
                
                  
        
    export default connect(mapStateToProps,mapDispatchToProps,DashboardScreen)
    (LoginScreen)

