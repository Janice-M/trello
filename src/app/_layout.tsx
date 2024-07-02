import { StatusBar } from "expo-status-bar";
import { Text} from "react-native";
import {Slot, Stack} from 'expo-router';
import { ThemeProvider, DarkTheme } from '@react-navigation/native'
import Realm from "../providers/Realm";

export default function RootLayOut(){
    
    return (
        <ThemeProvider value={DarkTheme}>
        <Realm>
            
             <Stack screenOptions={{}}>

             </Stack>

        </Realm>
       

        <StatusBar style="light" />
        </ThemeProvider>
    );
    
    
}