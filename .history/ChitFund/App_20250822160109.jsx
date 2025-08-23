import { SafeAreaView, ScrollView, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        {/* <Header/> */}
        <View>
          <TouchableOpacity>
            <Text>
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>
              Read the docs to discover what to do next:
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  highlight: {
    fontWeight: "700",
    color: "#2f95dc",
  },
});