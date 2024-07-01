import { StatusBar } from "expo-status-bar";
import { Text} from "react-native";
import {Slot} from 'expo-router'

export default function RootLayOut(){
    return (
        <>
    
            <Text style={{marginTop:100}}>hey monica
            </Text>

            <Slot />

            <StatusBar style="light" />


         </>     
    )
}