

import React, {PureComponent} from 'react';
import {AsyncStorage, Text, View,ActivityIndicator} from 'react-native';
import AppNavigation from './src/shared/navigation';
import {connect} from 'react-redux';
class AppRoot extends PureComponent{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.checkLogin();

  }
  render (){
    const{app_started,authenticated}=this.props.autState
    return app_started ? this._renderAppRoot(authenticated):this._renderSplash(app_started);

  }
  _renderAppRoot(authenticated){
    const CreateRoot=AppNavigation(authenticated);
    return <CreateRoot/>
  }
  _renderSplash(app_started){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      
      <ActivityIndicator size='large' />
<Text children='Yükleniyor...'/>
      
      </View>
    )
  }
}
const mapDispatchToProps=(dispatch,ownProps)=>
{
  return {

async chechLogin(){
  const isLoggin=await AsyncStorage.getItem('authenticated').catch(e=>console.log(e))
  if(isLoggin)
  {
    dispatch(actionCreator('LOGIN_SUCCESS'))
  }
  dispatch(actionCreator('APP_LOADED'))
}
}

  }

const mapStateToProps=(state,ownProps)=>
{
  return{
    autState:state.authState
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AppRoot)
