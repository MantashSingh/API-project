import React , {Component} from 'react';
import { Text, View } from 'react-native';
import Routes from "./src/Navigation/Routes";
import FlashMessage from "react-native-flash-message";
import { clearUserData, getUserData } from './src/utils/utils';
import { userContext } from './src/context/context';





export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        isLogin:false
    }
  }


  componentDidMount(){
    const{isLogin} =this.state
    getUserData().then((res)=>
    {
      if(res){
        this.setState({isLogin:true})
        // console.log(isLogin)
      }
    }).catch((error)=>{
        console.log(error)
      })
      
    }

    onLogin=()=>{
     
      this.setState({
        isLogin:true
      })
    };

    onLogout=()=>{
      this.setState({
        isLogin:false
      })
      clearUserData()
    };

  
    
  
  
  render(){
    const {isLogin}   =this.state;
    return(
      <userContext.Provider
        value={{
          isLogin:isLogin,
          onLogin:this.onLogin,
          onLogout:this.onLogout
        }}>
      <Routes/>
      <FlashMessage position="top" />
</userContext.Provider>
    )  
  }
}

