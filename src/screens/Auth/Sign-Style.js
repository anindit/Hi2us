import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  mainContainer: {
   flex: 1,
   padding:wp('5%')
  },
  imageSection:{
    alignItems:'flex-end',
    width:wp('80%'),
    height:hp('35%'),
    flex: 1,
   
  },
  circleImage:{
    
    width:wp('20%'),
    height:hp('20%'),
  },
 
  signText:{
    fontFamily: 'Roboto-Bold',
    fontSize: hp('4%'),
    color:'#2a2568'
  },
  signTextBelow:{
    color:'#8b8a9c'
  },
  textInput:{
    
    width:wp('80%'),
    
  },
 
  signinText:{
    justifyContent:'center',
    alignItems:'center', 
    color:'#fff', 
    fontSize: hp('3%'),
  },
  nameSection:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomColor: '#cccbd4',
    borderBottomWidth: 2,
    marginBottom:hp('0.5%'),
  },
  iconInput:{
   marginRight:wp('2%')
  },
  signupSection: {
    justifyContent:'center',
    alignItems:'center', 
    
   height:hp('8%'),
   backgroundColor:'#00aeed',
   borderRadius:10,
   
  },
  formSection:{
    flex: 5,
   
  },
  textSection:{
    flex:0.7
  },
  labelSection:{
    flex:3
  },
  btnSection:{
    flex:1
  },
  accountText:{
    color:'#8b8a9c'
  },
  accountTextSection:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp('3%')
  },
  loginImageSection:{
    alignItems:'flex-end',
    width:wp('80%'),
    height:hp('35%'),
    flex: 2,
  },
  loginCircleImage:{
    
    width:wp('30%'),
    height:hp('30%'),
  },
  loginlabelSection:{
    flex:1
  },
  logintextSection:{
    flex:0.5
  },
  forgotbtnSection:{
    flex:1,
  },
  forgettextSection:{
    flex:0.4
  },
  forgotlabelSection:{
    flex:0.5,
  },
  forgotformSection:{
    flex:5
  }
});
