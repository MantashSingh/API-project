import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createStackNavigator();
// let apiData= new{ FormData();
// apiData.appen("image",})
// export function uploadImage(data={}){
//     const headers = {'Content-Type': 'multipart/form-data'};
//     return apiPost(UPLOAD_IMAGE,data,headers);
//  }
 

export default function ({isLogin}) {
    
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
          {!isLogin?<>
            {MainStack()}
            {AuthStack()}
         
          </>:<>
          {AuthStack()}
          {MainStack()}
          </>}
       {/* {!isLogin && AuthStack()}
       {MainStack()} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
