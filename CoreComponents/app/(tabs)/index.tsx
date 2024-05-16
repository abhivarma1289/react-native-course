import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useState } from "react";
import Greet from '../../components/greet.js'
import logoImg from "../../assets/images/adaptive-icon.png";
export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isIndicaterHidden, setIsIndicaterHidden] = useState(false);
  const [statusBarHidden, setStatusBarHidden] = useState(false);

  return (
    // <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    //   <Button title="Press" onPress={() => Alert.alert("Invalid data!")} />
    //   <Button
    //     title="Press"
    //     onPress={() => Alert.alert("Invalid data!", "dob incorrect!")}
    //   />
    //   <Button
    //     title="Press"
    //     onPress={() =>
    //       Alert.alert("Invalid data!", "dob incorrect!", [
    //         {
    //           text: "Cancel",
    //           onPress: () => console.log("Cancel Pressed"),
    //           style: "destructive",
    //         },
    //         { text: "OK", onPress: () => console.log("OK Pressed") },
    //       ])
    //     }
    //   />

    //   <Button title={!isIndicaterHidden ? 'Show Indicater' : 'Hide Indicater'} onPress={() => {
    //     setIsIndicaterHidden(!isIndicaterHidden);
    //   }}
    //   color='brown'
    //    />

    //   <Button title={statusBarHidden ? 'Show Status Bar' : 'Hide Status Bar'} onPress={() => {
    //     StatusBar.setHidden(!statusBarHidden);
    //     setStatusBarHidden(!statusBarHidden);
    //   }} 
    //   color='red'

    //   />
    //   {isIndicaterHidden && <ActivityIndicator size="large" color="midnightblue" />}
    //   <StatusBar
    //     barStyle="light-content" backgroundColor="red"
    //     hidden={statusBarHidden}

    //   />
    //   {/* <StatusBar barStyle="dark-content" backgroundColor="red"/> */}

    //   <ScrollView>
    //     <Button
    //       title="Press"
    //       onPress={() => setIsModalVisible(true)}
    //       // onPress={() => console.log("Button pressed")}
    //       color="midnightblue"
    //     />
    //     <Pressable
    //       onPress={() => {
    //         console.log("Image pressed");
    //       }}
    //     >
    //       <Image source={logoImg} style={{ width: 300, height: 300 }} />
    //     </Pressable>

    //     <Pressable
    //       onPress={() => {
    //         console.log("Text pressed");
    //       }}
    //     >
    //       <Text>
    //         lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
    //         condimentum, nisl eu ultricies ultricies, nunc nisl aliquam nunc,
    //         eget aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu
    //         ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc
    //         sit amet nisl. Donec condimentum, nisl eu ultricies ultricies, nunc
    //         nisl aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec
    //         condimentum, nisl eu ultricies ultricies, nunc nisl aliquam nunc,
    //         eget aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu
    //         ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc
    //         sit amet nisl. Donec condimentum, nisl eu ultricies ultricies, nunc
    //         nisl aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec
    //         condimentum, nisl eu ultricies ultricies, nunc nisl aliquam nunc,
    //         eget aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu
    //         ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc
    //         sit amet nisl. Donec condimentum, nisl eu ultricies
    //       </Text>
    //     </Pressable>

    //     <Image source={logoImg} style={{ width: 300, height: 300 }} />

    //     {/* <Image source={logoImg} style={{ width: 300, height: 300 }} />
    //   <Image
    //     source={{ uri: "https://picsum.photos/200" }}
    //     style={{ width: 200, height: 200 }}
    //   /> */}
    //     {/* <ImageBackground source={logoImg} style={{ flex: 1 }}>
    //     <Text>
    //       <Text style={{ color: "white" }}>Hello</Text> World!
    //     </Text>
    //   </ImageBackground> */}




    //   </ScrollView>
    //   <Modal
    //     visible={isModalVisible}
    //     onRequestClose={() => setIsModalVisible(false)}
    //     animationType="slide"
    //   // presentationStyle="formSheet"
    //   >
    //     <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
    //       <Text>Modal content</Text>
    //       <Button
    //         title="Close"
    //         onPress={() => setIsModalVisible(false)}
    //         color="midnightblue"
    //       />
    //     </View>
    //   </Modal>
    // </View>

    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Greet name={"abhi varma dongari"}/>
    </View>
  );
}

