import { StatusBar } from "expo-status-bar";
import { Text} from "react-native";
import {Slot, Stack} from 'expo-router';
import { ThemeProvider, DarkTheme } from '@react-navigation/native'
import RealmCustomProvider from "../providers/Realm";

export default function RootLayOut(){
    
    return (
        <ThemeProvider value={DarkTheme}>
        <RealmCustomProvider>
            
             <Stack screenOptions={{}}>

             </Stack>

        </RealmCustomProvider>
       

        <StatusBar style="light" />
        </ThemeProvider>
    );
    
    
}