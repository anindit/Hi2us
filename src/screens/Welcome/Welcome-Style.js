import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  sectionContainerTop: {
   justifyContent:'center',
   alignItems:'center',  
   flex: 6,
  },
  sectionContainerBottom: {
    justifyContent:'center',
    alignItems:'center',  
    flex: 7,
   },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  logoSection:{
    width:wp('35%'),
    height:wp('35%'),
    justifyContent:'flex-end',
    
  },
  logoImageSection:{
    width:wp('35%'),
    height:wp('35%'),
  },
  contentSection: {  
   width:wp('85%'),
   marginBottom:hp('5%')
  },
  signinSection: {
    justifyContent:'center',
    alignItems:'center', 
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width:wp('85%'),
   height:hp('10%'),
   marginBottom:hp('4%')
  },
  signupSection: {
    justifyContent:'center',
    alignItems:'center', 
    width:wp('85%'),
   height:hp('10%'),
   backgroundColor:'#00aeed',
   borderRadius:10,
   borderWidth: 1,
  
  },
  contentTextColor:{
    color:'#fff',
    fontFamily: 'Roboto-Bold',
    fontSize: hp('5%'),
    width:wp('80%'),
   lineHeight:hp('6%')
  },
  signinText:{
    justifyContent:'center',
    alignItems:'center', 
    color:'#fff', 
    fontSize: hp('3%'),
  },
 
});
