import React from 'react';

/*import LocalImage from '@assets/LocalAssets';
import {default as theme} from '@constants/lightTheme';
import {useAuthContext} from '@context/AuthContext';

*/

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

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={Sign_Style.mainContainer}>
      <View style={Sign_Style.imageSection}>
        <Image
              source={LocalAssets.circle}
              resizeMode="contain"
              style={Sign_Style.circleImage}
            />
      </View>
      <View style={Sign_Style.formSection}>
        <View style={Sign_Style.textSection}>
          <Text style={Sign_Style.signText}>Sign Up</Text>
          <Text style={Sign_Style.signTextBelow}>Hi There! Nice To See You. </Text>
        </View>
        <View style={Sign_Style.labelSection}>
              <View style={Sign_Style.nameSection}>
                <User
                  style={Sign_Style.iconInput}
                  stroke={"#aeadbd"}
                  width={wp('6%')}
                  height={wp('6%')}
                />
                <TextInput style={Sign_Style.textInput}  placeholder={"First Name"}/>
              </View>
            
              <View style={Sign_Style.nameSection}>
                <User
                  style={Sign_Style.iconInput}
                  stroke={"#aeadbd"}
                  width={wp('6%')}
                  height={wp('6%')}
                />
                <TextInput style={Sign_Style.textInput}  placeholder={"Last Name"}/>
              </View>

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
              <View style={Sign_Style.nameSection}>
                <Lock
                  style={Sign_Style.iconInput}
                  stroke={"#aeadbd"}
                  width={wp('6%')}
                  height={wp('6%')}
                />
                <TextInput style={Sign_Style.textInput}  placeholder={"Confirm Password"}/>
              </View>
        </View>
        <View style={Sign_Style.btnSection}>
          <View style={Sign_Style.signupSection}>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text style={Sign_Style.signinText}>SIGN UP</Text>  
                </TouchableOpacity>
          </View>
          <View style={Sign_Style.accountTextSection}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={Sign_Style.accountText}>Already Have An Account?</Text>  
              </TouchableOpacity>
          </View>
        </View>
        
      </View>
    </View>
  );

};

export default Signup;
