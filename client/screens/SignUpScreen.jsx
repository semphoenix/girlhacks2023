import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  Icon,
  IconElement,
  Input,
  Text,
  Layout,
  Button,
  Spinner,
  Divider,
} from "@ui-kitten/components";
import { AuthorizeContext } from "../contexts/user";

export default SignUpScreen = ({ navigation }) => {
  const { setAuthState } = React.useContext(AuthorizeContext);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const [isLoading, setIsLoading] = React.useState(false);

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon
        {...props}
        fill="white"
        name={secureTextEntry ? "eye-off" : "eye"}
      />
    </TouchableWithoutFeedback>
  );

  const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
      <Spinner size="small" />
    </View>
  );

  const signUp = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }),
      });
      const json = await response.json();
      setIsLoading(false);
      navigation.navigate("Home");
      setAuthState(json);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <>
      <ImageBackground
        source={require("../assets/bg.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.text} category="h1">
            Sign Up
          </Text>
          <Input
            textStyle={{ color: "white" }}
            value={firstName}
            style={styles.input}
            status="primary"
            label="First Name"
            onChangeText={(nextValue) => setFirstName(nextValue)}
          />
          <Input
            textStyle={{ color: "white" }}
            value={lastName}
            style={styles.input}
            status="primary"
            label="Last Name"
            onChangeText={(nextValue) => setLastName(nextValue)}
          />
          <Input
            textStyle={{ color: "white" }}
            value={email}
            style={styles.input}
            status="primary"
            label="Email"
            onChangeText={(nextValue) => setEmail(nextValue)}
          />
          <Input
            textStyle={{ color: "white" }}
            value={password}
            style={styles.input}
            status="primary"
            label="Password"
            secureTextEntry={secureTextEntry}
            accessoryRight={renderIcon}
            onChangeText={(nextValue) => setPassword(nextValue)}
          />
          <Divider />
          <Button
            appearance={isLoading ? "outline" : "filled"}
            accessoryLeft={isLoading ? LoadingIndicator : ""}
            onPress={signUp}
            style={{ marginVertical: 10, backgroundColor: "#974EC3" }}
          >
            Sign Up
          </Button>
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.text}>
                Already Have an Account?{" "}
                <Text style={styles.highlightedText}>Sign In</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "transparent", // Make input background transparent
    width: Dimensions.get("window").width * 0.8, // Set width to 80% of the screen's width
    marginVertical: 2,
    color: "white",
    borderColor: "#974EC3",
  },
  highlightedText: {
    color: "#FE7BE5", // Or any other highlight color
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
  },
});
