import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screen } from "../pages";
import { Home } from "../pages";
import { Angka } from "../pages";
import { Huruf } from "../pages";

const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Screen" component={Screen}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Angka" component={Angka}/>
            <Stack.Screen name="Huruf" component={Huruf}/>
        </Stack.Navigator>
    )
}

export default Router;