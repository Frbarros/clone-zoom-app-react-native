import { createStackNavigator } from "@react-navigation/stack";
import Cadastro from "../screens/Cadastro/Cadastro";
import Home from "../screens/Home/Home";

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown:false}}/>

<Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown:false}}/>
        </Stack.Navigator>
    )
}