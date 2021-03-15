import React ,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { userContext } from '../context/context';



const Stack = createStackNavigator();
// let apiData= new{ FormData();
// apiData.appen("image",})
// export function uploadImage(data={}){
//     const headers = {'Content-Type': 'multipart/form-data'};
//     return apiPost(UPLOAD_IMAGE,data,headers);
//  }
 

export default function () {
    const userDataContext = useContext(userContext);
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
          {/* {isLogin?<>
            {MainStack()}
            {AuthStack()}
         
          </>:<>
          {AuthStack()}
          {MainStack()}
          </>} */}
       {/* {!isLogin && AuthStack()}
       {MainStack()} */}

       {userDataContext.isLogin?<>{MainStack()}</>:<>{AuthStack()}</>}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
