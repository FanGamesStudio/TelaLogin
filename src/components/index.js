import React, {Component} from 'react'
import  {createAppContainer, CreateStackNavigator} from  'react-navigation'
import Login from './Login';

const  MainNav  = CreateStackNavigator(
{
    Login : {
        screen : Login,
        navigationOptions :{
            header : null
        }
    }
}

)


export default createAppContainer(MainNav);
