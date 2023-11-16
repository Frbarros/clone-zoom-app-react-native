import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Zoomlogo from '../../../assets/zoom.png';
import { styles } from "./styles";
import {useNavigation} from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <Image 
        style={styles.logo}
        source={Zoomlogo}
      /> 
      <View style={styles.view}>
        <Text style={styles.title}>Bem-vindo</Text>

        <Text style={styles.subTitle}>Comece a usar a sua conta</Text>
        <TouchableOpacity style={styles.primaryButton} onPress={() => console.log('Botão pressionado')}>
        <Text style={styles.buttonText}>Ingressa na reunião</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={() => console.log('Botão pressionado')}>
        <Text style={styles.buttonText}>Inscreva-se</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={() =>  navigation.navigate('Cadastro')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    
       </View>     
      <StatusBar style="auto" />
    </View>
  );
}

