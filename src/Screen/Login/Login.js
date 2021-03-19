import React, {Component} from 'react';
import {Text, View, TouchableOpacity , StyleSheet,Image , ActivityIndicator  } from 'react-native';
import imagePath from '../../assets/images/imagePath';
import Loader from '../../Component/Loader';
import TextInputComponent from '../../Component/TextaInputComponent'
import navigationStrings from '../../constants/navigationStrings';
import { showMessage, hideMessage } from "react-native-flash-message";
import validations from "../../utils/validations";
import apis from "../../apis";
import { userContext } from '../../context/context';
import GoButton from '../../Component/GoButton';
import Footer from '../../Component/Footer';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        isvalid:""
    };
  }
  static contextType=userContext;


  
  setEmail = (text) => {

    this.setState({
        email: text
    })


}


setPassword = (text) => {

    this.setState({
        password: text
    })


}

isValidate = () => {
    const { name, dob, email, password, reEnterPassword } = this.state;

    let errorMessage = validations({email: email, password: password})
    // alert()
    if (errorMessage) {

        showMessage({
            message: errorMessage,
            icon:"warning",

            type: "danger",
        });
        return false
    }

    return true
}


checkData = () => {
    const { email, password } = this.state;

    if (this.isValidate()) {
        this.setState({
            isvalid: true
        })
        apis.login({ email, password })
            .then(response => {
               
                    // console.log(response)
                    // this.props.navigation.navigate("LandingPage")
                    // 
                    this.context.onLogin();
                    showMessage({
                        type:"success",
                        message:"Login done successfully "
                    })
                    this.setState({
                            isvalid: false
                        })
                    
            }).catch((error) => {
                this.setState({ isvalid: false }),
                showMessage({
                    type:"danger",
                    message:"Login failed "
                })
                
                    console.log(error)
            })
    }

}


  render() {
      const{isvalid} =this.state
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(navigationStrings.SIGNUP)
          }>
          <Text>Sign Up</Text>
        </TouchableOpacity> */}
        <View style={styles.header} >
          <Text style={styles.login}>Login</Text>
        </View>
        <View>
        <TextInputComponent placeholder="Email" onChangeText={(text) => this.setEmail(text)}  />
        <TextInputComponent placeholder="Password" onChangeText={(text) => this.setPassword(text)} secureTextEntry={true}/>
        </View>

        <View style={{ flexDirection: "row", }}>
                    <Text style={styles.alreadyRegister}>Don't have account? </Text>
                    <Text style={styles.signup} onPress={()=>this.props.navigation.navigate("Signup")} >Sign up</Text>
                  

                    <GoButton onPress={() => this.checkData()} style={styles.goTouch}/>
                </View>

                {/* <View style={styles.footer}>
                    <Text>By Signing up you agree to our</Text>
                    <View style={{ flexDirection: "row", }}>
                        <Text style={styles.tAndc}>Terms of service</Text>
                        <Text> and </Text>
                        <Text style={styles.tAndc}>Privacy policy</Text>
                    </View>
                </View> */}
                <Footer diffrentText={"Logging In"}/>

                
                    <Loader isvalid={isvalid} />
                





      </View>
    );
  }
}


const styles= StyleSheet.create({
    container:{
        marginTop:"auto",
        marginBottom:"auto"
    },
    header:{
        
        
    },
    login:{
        fontSize:25,
        textAlign:'center'
    },
    alreadyRegister: {
        marginLeft: 50,
        marginTop: 50
    },
    signup: {
        color: "blue",
        marginTop: 50
    },
    goTouch: {
        marginLeft: 'auto',
        marginRight: 40,
        backgroundColor: "gray",
        borderRadius: 100,
        padding: 20,
        marginTop: 25
    },
   
    goIcon: {
        width: 25,
        height: 25,


    },
})
