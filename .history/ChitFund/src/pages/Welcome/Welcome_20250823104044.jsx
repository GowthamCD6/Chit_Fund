import {
  Image,
  ImageComponent,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';
// import { useNavigation } from '@react-navigation/native';
import styles from '../Welcome/Welcomesty.jsx';
import React from 'react';
import WelcomeImg from '../../assects/Welcome-page/WelcomeImg.svg';

const Welcome = () => {
  //   const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>ஸ்ரீ பெரியநாயகி அம்மன் CHITFUNDS</Text>
      </View>
      
      <View style={styles.middleSection}>
        <LottieView
          source={require('../../animation/Welcome-page.json')} 
          autoPlay
          loop
          style={styles.lottieAnimation}
        />
      </View>
      
      <View style={styles.bottomSection}>
        <Text style={styles.mainText}>Hello !</Text>
        <Text style={styles.text2}>
          Welcome back! Please log {'\n'}in to continue
        </Text>
        <TouchableOpacity
          style={styles.pressablebtn}
          onPress={() => navigation.navigate('Login')}>
          <View style={styles.btn}>
            <Text style={styles.btntext}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
