import React , {Component} from 'react';
import { Text, View } from 'react-native';
import Routes from "./src/Navigation/Routes";
import FlashMessage from "react-native-flash-message";
import { getUserData } from './src/utils/utils';




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
        console.log(isLogin)
      }
    }).catch((error)=>{
        console.log(error)
      })
      
    }
  
    
  
  
  render(){
    const {isLogin}   =this.state;
    return(
      <>
      <Routes isLogin={isLogin}/>
      <FlashMessage position="top" />
</>
    )  
  }
}

