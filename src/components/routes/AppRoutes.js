import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Inicio from "./Inicio";
import Menu from "./Menu";

const Stack = createNativeStackNavigator();

function AppRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Inicio' component={Inicio} options={{headerShown: false}}/> 
                <Stack.Screen name='Menu' component={Menu} options={{headerShown: false}}/> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes;