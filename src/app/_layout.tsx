import { StatusBar } from "expo-status-bar";
import { Text} from "react-native";
import {Slot, Stack} from 'expo-router'

export default function RootLayOut(){
    return (


        <>
    

            <Stack screenOptions={{}}>
                <Stack.Screen name="index" options={{title: 'Todo'}} />

            <Stack/>

            <StatusBar style="light" />


         </>     
    );
}