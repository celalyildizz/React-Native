import{StackNavigator} from 'react-navigation';
import LoginScreen from './src/screens/login';
import DasboardScreen from './src/screens/dashboard';

export default AppNavigation=(authenticated) => StackNavigator({

login:{

    getScreen:()=>LoginScreen,
    navigatorOptions:{
        title:'Login'
    
},
dashboard:{
    getScreen:()=>DasboardScreen,
    navigatorOptions:{
        title:'Dashboard'
    }
}

},

initialRouteName:authenticated?'dashboard':'login'
})