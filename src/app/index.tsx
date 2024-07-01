import Taskboard from "../components/TaskBoard";
import { Stack } from "expo-router";


export default function HomeScreen(){

    return (
        <>

    
            <Stack.Screen options={{title : "Todo Board"}} />
            <Taskboard />

            </>

    );

}