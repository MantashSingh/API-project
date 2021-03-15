import React, { Component } from "react";
import { Text, TouchableOpacity, View,Image , StyleSheet} from "react-native";
import navigationStrings from "../../constants/navigationStrings";


import imagePath from "../../assets/images/imagePath"
import * as ImagePicker from 'react-native-image-picker';
import apis from "../../apis";
import { userContext } from "../../context/context";



export default class  LandingPage extends Component{
    constructor(props){
        super(props)
        this.state={
     

           
            image: {uri:'https://www.hayalanka.com/wp-content/uploads/2017/07/avtar-image.jpg'},
        }
    }
    static contextType=userContext;


    // chooseImage = () => {
    //     const options = {
    //         title: 'Select Avatar',
    //         customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    //         storageOptions: {
    //             skipBackup: true,
    //             path: 'images',
    //         },
    //     };

    //     ImagePicker.launchCamera(options, (response) => {
    //         console.log('Response = ', response);

    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         } else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //         } else {
    //             const source = { uri: response.uri };

    //             this.setState({
    //                 image: source,
    //                 isMenuModalVisible:false
    //             });
    //         }
    //     });
    // };


    chooseImageFromGallery = () => {

        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                
                this.uploadImage(response)
                this.setState({
                    image: source,
                  
                });
            }
        });

    };


    uploadImage=(response)=>
    {
        const apiData = new FormData();
    //    apiData.append('fileOf', 'User');
       apiData.append('image', {
        uri: response.uri,
        type: response.type,
     	  name: response.fileName
 
       });
       console.log(apiData)
       apis.uploadImage(apiData).then((res)=>console.log("succes!!")).catch((err)=>console.log("error" , err.message))

    }





   





    render(){
        
        return(

            <View>
                {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}> */}

                <Text style={styles.homePage}>Home Page</Text>
                {/* </TouchableOpacity> */}




                <TouchableOpacity  onPress={this.chooseImageFromGallery} style={styles.imageChoose}>
                        <Image source={this.state.image}
                            style={{ width: 120, height: 120 }} />

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.logOut} onPress={this.context.onLogout}>
                        <Text style={styles.logOutText}>Log Out !!</Text>

                    </TouchableOpacity>

                
            </View>
        )
    }
}
const styles= StyleSheet.create({
    homePage:{
        fontSize:25,
        textAlign:"center",
        marginTop:5,
        marginBottom:10
    },
    imageChoose:{
        marginLeft:'auto',
        marginRight:'auto',

    },
    logOut:{
        backgroundColor:"#b23b3b",
        paddingTop:10,
        paddingBottom:10,
        width:300,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:350
        
    },
    logOutText:{
        textAlign:"center",
        color:'white',
        fontSize:20
    }
})