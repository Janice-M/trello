import { Text } from "react-native";
import {Slot} from 'react-native'

export default function RootLayOut(){
    return (
        <>
    
            <Text style={{marginTop:100}}>hey monica
            </Text>

            <Slot />


         </>     
    )
}