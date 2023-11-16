import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Zoomlogo from '../../../assets/zoom.png';
import Ios from '../../../assets/apple.png';
import Facebook from '../../../assets/facebook.png';
import Chave from '../../../assets/chave.png';
import Google from '../../../assets/google.png';
import { styles } from "./styles";

export default function Cadastro() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            
        <Text style={styles.headerTitleSecondary}>Cancelar</Text>
        <Text style={styles.headerTitlePrimary}>Entrar</Text>
        <Text style={styles.headerTitleSecondary}>...</Text>

        </View>
        <Text style={styles.descriptionText}>INSIRA SEU ENDEREÇO DE E-MAIL</Text>
        <View style={styles.inputView}>
            <View style={styles.inputLine}>
            <Text style={styles.inputLabel}>E-mail:</Text>
            <TextInput 
            style={styles.input} 
            placeholder="user@example.com"
            placeholderTextColor="#fff"/> 

            </View>
            <View style={styles.inputLine}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput 
            style={styles.input} 
            placeholder="Necessário"
            placeholderTextColor="#fff"/> 

            </View>
        </View>
          <View style={styles.view}>
            
        <TouchableOpacity style={styles.primaryButton} onPress={() => console.log('Botão pressionado')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.forgoutPassword}>Esqueceu sua senha?</Text>
      <Text style={styles.descriptionText}>OUTROS MÉTODOS DE LOGIN</Text>
      <View style={styles.viewButtons}>

      <TouchableOpacity style={styles.secundaryButton} onPress={() => console.log('Botão pressionado')}>
        <Image style={styles.icon} source={Ios}/>
        <Text style={styles.buttonText}>Continuar com a Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secundaryButton} onPress={() => console.log('Botão pressionado')}>
        <Image style={styles.icon} source={Google}/>
        <Text style={styles.buttonText}>Continuar com o Google</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.secundaryButton} onPress={() => console.log('Botão pressionado')}>
        <Image style={styles.icon} source={Facebook}/>
        <Text style={styles.buttonText}>Continuar com o Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secundaryButton} onPress={() => console.log('Botão pressionado')}>
        <Image style={styles.icon} source={Chave}/>
        <Text style={styles.buttonText}>Continuar com o SSO</Text>
      </TouchableOpacity>

      

      </View>

      
    
       </View>     
      <StatusBar style="auto" />
    </View>
  );
}

