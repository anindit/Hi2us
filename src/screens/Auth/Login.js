import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  Image,
  Platform,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import {User,Mail,Lock} from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';
import Sign_Style from './Sign-Style'; // Stylesheet
import LocalAssets from '../../../assets/LocalAssets';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Login = () => {
  const navigation = useNavigation();

 
  return (
    <View style={Sign_Style.mainContainer}>
      <View style={Sign_Style.loginImageSection}>
        <Image
              source={LocalAssets.circle}
              resizeMode="contain"
              style={Sign_Style.loginCircleImage}
            />
      </View>
      <View style={Sign_Style.formSection}>
        <View style={Sign_Style.logintextSection}>
          <Text style={Sign_Style.signText}>Sign In</Text>
          <Text style={Sign_Style.signTextBelow}>Signin To Access Hi2u. </Text>
        </View>
        <View style={Sign_Style.loginlabelSection}>            

              <View style={Sign_Style.nameSection}>
                <Mail
                  style={Sign_Style.iconInput}
                  stroke={"#aeadbd"}
                  width={wp('6%')}
                  height={wp('6%')}
                />
                <TextInput style={Sign_Style.textInput}  placeholder={"Email Address"}/>
              </View>
           
              <View style={Sign_Style.nameSection}>
                <Lock
                  style={Sign_Style.iconInput}
                  stroke={"#aeadbd"}
                  width={wp('6%')}
                  height={wp('6%')}
                />
                <TextInput style={Sign_Style.textInput}  placeholder={"Password"}/>
              </View>             
        </View>
        <View style={Sign_Style.btnSection}>
          <View style={Sign_Style.signupSection}>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text style={Sign_Style.signinText}>Submit</Text>  
                </TouchableOpacity>
          </View>
          <View style={Sign_Style.accountTextSection}>
              <TouchableOpacity onPress={() => navigation.navigate('Forgetpassword')}>
                <Text style={Sign_Style.accountText}>Forget Password?</Text>  
              </TouchableOpacity>
          </View>
        </View>
        
      </View>
    </View>
  );
};

export default Login;
