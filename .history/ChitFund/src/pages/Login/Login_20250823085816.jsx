import {
    SafeAreaView,
    Text,
    View,
    Keyboard,
    Pressable,
    TouchableWithoutFeedback,
    ScrollView,
    Alert,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import Loginimg from '../../assects/Firstpage-login-page/loginimg.svg';
// import styles from './loginsty.jsx';
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import Separator from '../../assects/Firstpage-login-page/separator.svg';
import Googleicon from '../../assects/Firstpage-login-page/google.svg';
import Tickicon from '../..//tick.svg';
import Tickbox from '../../../assets/ParentPage/basic-img/tickbox.svg';
import EyeOn from '../../assects/Firstpage-login-page/eye-svgrepo-com.svg';
import EyeOff from '../../assects/Firstpage-login-page/eye-slash-svgrepo-com.svg';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { API_URL } from '../../../utils/env.js';
// import { encryptPassword } from '../../../components/Login/encrypt/encryptPassword';
// Encryption key generation removed - using direct messaging
// import Config from 'react-native-config';

const Login = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        // console.log("API URL:", Config.API_URL);
        console.log("API URL:", API_URL);
        
        if (!checked) {
            Alert.alert("Please accept the Privacy Policy");
            return;
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                    <View>
                        <Text style={styles.hi}>Hi !</Text>
                        <Text style={styles.sectoptext}>Login to continue</Text>
                        <Loginimg height={267} width={290} style={styles.logimg} />

                        <View style={styles.inputcontainer}>
                            <TextInput
                                style={styles.input}
                                label="Mobile"
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                                mode="outlined"
                                activeOutlineColor="#2842C4"
                                keyboardType="phone-pad"
                            />
                            <View style={{ position: 'relative' }}>
                                <TextInput
                                    style={styles.input}
                                    label="Password"
                                    value={password}
                                    onChangeText={setPassword}
                                    mode="outlined"
                                    activeOutlineColor="#2842C4"
                                    secureTextEntry={!showPassword}
                                />
                                <Pressable
                                    onPress={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: 'absolute',
                                        right: 10,
                                        top: 22,
                                    }}
                                >
                                    {showPassword ? <EyeOn width={24} height={24} /> : <EyeOff width={24} height={24} />}
                                </Pressable>
                            </View> 
                        </View>

                        <Pressable style={styles.checkboxContainer} onPress={() => setChecked(!checked)}>
                            {checked ? <Tickbox height={18} width={18} /> : <Tickicon height={18} width={18} />}
                            <Text style={styles.checkboxText}>I agree with the Privacy Policy</Text>
                        </Pressable>

                        <TouchableOpacity 
                            style={[styles.pressablebtn, isLoading && { opacity: 0.7 }]} 
                            onPress={handleLogin}
                            disabled={isLoading}
                        >
                            <View style={styles.btn}>
                                {isLoading ? (
                                    <ActivityIndicator size="small" color="#FFFFFF" />
                                ) : (
                                    <Text style={styles.btntext}>LOGIN</Text>
                                )}
                            </View>
                        </TouchableOpacity>

                        <View style={styles.separator}>
                            <Separator />
                        </View>
                        <Text style={styles.googletext}>Login with Google</Text>

                        <Pressable style={styles.googleauthcontainer}>
                            <Googleicon height={18} width={18} style={styles.googleicon} />
                            <Text style={styles.googleauthtext}>Continue with Google</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default Login;