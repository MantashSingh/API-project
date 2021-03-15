import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TextInputComponent, TouchableOpacity, Button, Pressable} from "react-native";

import { TextInput } from "react-native-gesture-handler";
import imagePath from "../../assets/images/imagePath";
import TextaInputComponent from "../../Component/TextaInputComponent";


import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { showMessage, hideMessage } from "react-native-flash-message";
import validations from "../../utils/validations";
import apis from "../../apis";
import Loader from "../../Component/Loader";
import navigationStrings from "../../constants/navigationStrings";
// import { userContext } from "../../context/context";




export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            dob: "",
            email: "",
            password: "",
            reEnterPassword: "",
            isDatePickerVisible: false,
            value: "",
            isvalid: false

        }


    }
    setName = (text) => {

        this.setState({
            name: text
        })

        // alert("hi")
    }


    setDob = (text) => {

        this.setState({
            dob: text
        })


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

    setReEnterPassword = (text) => {

        this.setState({
            reEnterPassword: text
        })


    }

    showDataAlert = () => {
        const { name, dob, email, password, reEnterPassword } = this.state;
        alert(" name " + name + "\n" + " DOB " + dob + "\n" + " email " + email + "\n" + " password " + password)
    }


    showDatePicker = () => {
        this.setState({
            isDatePickerVisible: true
        })
    };

    hideDatePicker = () => {
        this.setState({
            isDatePickerVisible: false
        })
    };

    handleConfirm = (date) => {
        console.log("A date has been picked: ", date);


        let onlyDate = moment(date, 'yyyy-mm-ddthh:mm:ssz').format('DD-MM-yyyy');
        this.setState({
            value: onlyDate,
            isDatePickerVisible: false

        })
        // alert(onlyDate) 
    };



    isValidate = () => {
        const { name, dob, email, password, reEnterPassword } = this.state;

        let errorMessage = validations({ firstName: name, email: email, password: password, confirmPassword: reEnterPassword })
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
        const { name, email, password, reEnterPassword } = this.state;

        if (this.isValidate()) {
            this.setState({
                isvalid: true
            })
            apis.signup({ name, email, password, signupType: "APP", languageCode: "EN" })
                .then(response => {
                   
                        console.log(response)
                        this.props.navigation.navigate("Login")
                        // this.context.onLogin();
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
        const { isDatePickerVisible, value, isvalid } = this.state;
        // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
        return (

            <View style={styles.container}>
                 
                <View style={styles.header}>

                    <Image source={imagePath.back}
                        style={styles.backIcon} />

                    <Text style={styles.sign}>Sign Up</Text>
                </View>


                <View>
                    <Image source={imagePath.user}
                        style={styles.userIcon} />
                </View>

                <View>
                    {/* <Button title="Show Date Picker" onPress={this.showDatePicker} /> */}
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        display="calendar"
                        onConfirm={this.handleConfirm}
                        onCancel={this.hideDatePicker}
                    />
                </View>


                
               
                    <TextaInputComponent placeholder={"Name"} onChangeText={(text) => this.setName(text)} />
                    <TextaInputComponent placeholder={"Date of Birth"} onfocus={this.showDatePicker} value={value} />
                    <TextaInputComponent placeholder={"Email"} onChangeText={(text) => this.setEmail(text)} />
                    <TextaInputComponent placeholder={"Password"} onChangeText={(text) => this.setPassword(text)} secureTextEntry={true} />
                    <TextaInputComponent placeholder={"Re-Enter Password"} onChangeText={(text) => this.setReEnterPassword(text)} secureTextEntry={true} />
                             
                


                <View style={{ flexDirection: "row", }}>
                    <Text style={styles.alreadyRegister}>Already Register? </Text>
                    <Text style={styles.login} onPress={()=>this.props.navigation.navigate("Login")} >Login</Text>
                    <TouchableOpacity style={styles.goTouch} onPress={() => this.checkData()}>
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
        )
    }
}


const styles = StyleSheet.create({
    container:{
        marginTop:"auto",
        marginBottom:"auto"
    },
    header: {
        flexDirection: "row",
        marginTop: 10

    },
    backIcon: {
        width: 25,
        height: 25,
        marginTop: 5,
        marginLeft: 10
    },
    sign: {
        fontSize: 25,
        marginLeft: '30%',
        marginRight: 'auto',
        fontWeight: "bold"


    },
    userIcon: {
        width: 70,
        height: 70,
        marginLeft: 'auto',
        marginRight: "auto",
        marginTop: 5
    },
    goIcon: {
        width: 25,
        height: 25,


    },
    alreadyRegister: {
        marginLeft: 50,
        marginTop: 50
    },
    login: {
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
    }
})