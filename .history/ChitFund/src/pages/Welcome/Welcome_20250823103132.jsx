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
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>ஸ்ரீ பெரியநாயகி அம்மன் CHITFUNDS</Text>
        {/* <Image source={WelcomeImg} style={styles.image} /> */}
        {/* <WelcomeImg height={280} width={330} style={styles.logimg} /> */}
         <View style={styles.container}>
      <LottieView
        source={require("../../animation/Welcome-page.json")} // your animation file
        autoPlay
        loop
        style={{ width: 290, height: 300 }}
      />
    </View>
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
