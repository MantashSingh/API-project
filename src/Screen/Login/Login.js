import React, {Component} from 'react';
import {Text, View, TouchableOpacity , StyleSheet,Image  } from 'react-native';
import imagePath from '../../assets/images/imagePath';
import Loader from '../../Component/Loader';
import TextInputComponent from '../../Component/TextaInputComponent'
import navigationStrings from '../../constants/navigationStrings';
import { showMessage, hideMessage } from "react-native-flash-message";
import validations from "../../utils/validations";
import apis from "../../apis";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        isvalid:""
    };
  }


  
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
               
                    console.log(response)
                    this.props.navigation.navigate("LandingPage")
                    this.setState({
                        isvalid: false
                    })
                    
            }).catch((error) => {
                this.setState({ isvalid: false }),
                
                    console.log(error)
            })
    }

}


  render() {
      const{isValidate, isvalid} =this.state
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
                    <TouchableOpacity style={styles.goTouch} onPress={()=>this.checkData()}>
                        <Image source={imagePath.go}
                            style={styles.goIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text>By Signing up you agree to our</Text>
                    <View style={{ flexDirection: "row", }}>
                        <Text style={styles.tAndc}>Terms of service</Text>
                        <Text> and </Text>
                        <Text style={styles.tAndc}>Privacy policy</Text>
                    </View>
                </View>

                
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
    tAndc: {
        color: "blue",
    },
    footer: {
        marginTop: 20,
        alignItems: "center"
    },
    goIcon: {
        width: 25,
        height: 25,


    },
})
