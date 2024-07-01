import { StatusBar } from "expo-status-bar";
import { Text} from "react-native";
import {Slot, Stack} from 'expo-router';
import { ThemeProvider, DarkTheme } from '@react-navigation/native'

export default function RootLayOut(){
    
    return (
        <ThemeProvider value={DarkTheme}>
        <Stack screenOptions={{}}>

        </Stack>

        <StatusBar style="light" />
        </ThemeProvider>
    );
    
    
}