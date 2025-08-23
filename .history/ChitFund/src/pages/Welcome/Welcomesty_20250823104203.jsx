import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    topSection: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    middleSection: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomSection: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    title: {
        fontFamily: "DMSans-Regular",
        color: "#4A5E6D",
        fontSize: 20,
        fontWeight: "900",
        textAlign: "center",
        lineHeight: 28,
    },
    lottieAnimation: {
        width: 350,
        height: 350,
    },
    mainText: {
        color: "black",
        letterSpacing: 1,
        fontSize: 32,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 10,
    },
    text2: {
        color: "black",
        fontSize: 16,
        fontWeight: "600",
        letterSpacing: 1,
        textAlign: "center",
        marginBottom: 30,
        lineHeight: 22,
    },
    btn: {
        width: 250,
        height: 50,
        justifyContent: "center",
        backgroundColor: "#2842C4",
        borderRadius: 25,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    btntext: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        letterSpacing: 1,
    },
    pressablebtn: {
        alignSelf: "center",
    },
});

export default styles;
