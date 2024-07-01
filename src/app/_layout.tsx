import { StatusBar } from "expo-status-bar";
import { Text} from "react-native";
import {Slot} from 'expo-router'

export default function RootLayOut(){
    return (
        <>
    

            <Slot />

            <StatusBar style="light" />


         </>     
    )
}