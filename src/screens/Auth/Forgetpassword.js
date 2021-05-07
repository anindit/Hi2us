import React from 'react';
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

//import Layout_Style from '@screens/Layout/MainLayout/style';

const Forgetpassword = () => {
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
    <View style={Sign_Style.forgotformSection}>
      <View style={Sign_Style.forgettextSection}>
        <Text style={Sign_Style.signText}>Forgot Password</Text>
        <Text style={Sign_Style.signTextBelow}>Set Your New Password So You Can Access Hi2u. </Text>
      </View>
      <View style={Sign_Style.forgotlabelSection}>            

            <View style={Sign_Style.nameSection}>
              <Mail
                style={Sign_Style.iconInput}
                stroke={"#aeadbd"}
                width={wp('6%')}
                height={wp('6%')}
              />
              <TextInput style={Sign_Style.textInput}  placeholder={"Email Address"}/>
            </View>
                
      </View>
      <View style={Sign_Style.forgotbtnSection}>
        <View style={Sign_Style.signupSection}>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={Sign_Style.signinText}>Submit</Text>  
              </TouchableOpacity>
        </View>
        <View style={Sign_Style.accountTextSection}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={Sign_Style.accountText}>Back To Login</Text>  
            </TouchableOpacity>
        </View>
      </View>
      
    </View>
  </View>
  );
};

export default Forgetpassword;
