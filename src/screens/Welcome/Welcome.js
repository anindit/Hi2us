import React from 'react';
import {Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Welcome_style from './Welcome-Style'; // Stylesheet
import LocalAssets from '../../../assets/LocalAssets';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
            source={LocalAssets.Signin_bg}
            style={Welcome_style.backgroundImage}
        >
        <View style={Welcome_style.sectionContainerTop}>
          <View style={Welcome_style.logoSection}>
            <Image
              source={LocalAssets.logo}
              resizeMode="contain"
              style={Welcome_style.logoImageSection}
            />
          </View>
        </View>
        <View style={Welcome_style.sectionContainerBottom}>
          <View style={Welcome_style.contentSection}>
            <Text style={Welcome_style.contentTextColor}>Let's The World Know You</Text>
          </View>
          <View style={Welcome_style.signinSection}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={Welcome_style.signinText}>SIGN IN</Text>  
            </TouchableOpacity>
          </View>
          <View style={Welcome_style.signupSection}>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={Welcome_style.signinText}>SIGN UP</Text>  
            </TouchableOpacity>
          </View>
        </View>
    </ImageBackground>
  );
};
``
export default Welcome;
