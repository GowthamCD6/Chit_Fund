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
// import WelcomeImg from '../../assects/Welcome-page/WelcomeImg.svg';
import welcomePageAnimation from '../..';

const Welcome = () => {
    // const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>ஸ்ரீ பெரியநாயகி அம்மன் CHITFUNDS</Text>
        <LottieView
          source={welcomePageAnimation}
          autoPlay
          loop
          style={styles.logimg}
        />
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
    </ScrollView>
  );
};

export default Welcome;
