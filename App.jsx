import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const onClick = () => {
    // add item to list from input field
    if (inputValue === "") return;
    setGoals((prevGoals) => [
      ...prevGoals,
      { id: Math.random().toString(), value: inputValue },
    ]);
    setInputValue("");
  };

  const renderItem = ({ item }) => (
    <View>
      <Text style={styles.goalItem}>{item.value}</Text>
    </View>
  );

  return (
    <View style={styles.appContainer}>
      <View>
        <Image source={require("./assets/goalimg.png")} style={styles.img} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          style={styles.textInput}
          placeholder="Add list item..."
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.cancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClick} style={styles.add}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.toDoList}>
        <FlatList
          data={goals}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    height: "100%",
    backgroundColor: "#2C3333",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 2,
    height: 60,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#2E4F4F",
  },
  img: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: "50%",
    marginBottom: "10%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  cancel: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    width: 100,
    height: 40,
    backgroundColor: "#0E8388",
  },
  add: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    width: 100,
    height: 40,
    backgroundColor: "#CBE4DE",
  },
  buttonText: {
    textAlign: "center",
    marginTop: 5,
    color: "black",
    fontSize: 20,
  },
  goalItem: {
    textAlign: "center",
    borderWidth: 2,
    borderColor: "black",
    height: 40,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#CBE4DE",
    marginTop: 10,
    fontSize: 20,
  },
  toDoList: {
    flexDirection: "column",
    marginTop: 20,
    justifyContent: "space-around",
    alignContent: "center",
    padding: 10,
  },
});
