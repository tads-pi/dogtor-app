import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  boxTitle: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "flex-start",

    // borderColor: "pink",
    // borderWidth: 1
  },

  textTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",

    // borderColor: "red",
    // borderWidth: 1
  },

  imageWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    // borderColor: "red",
    // borderWidth: 1
  },

  image: {
    resizeMode: "contain",
    width: "100%",
  },

  boxTitle1: {
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center",

    // borderColor: "blue",
    // borderWidth: 1
  },

  textTitle1: {
    color: "#ACBBC3",
    fontSize: 17,
    textAlign: "center",
  },

  buttonRetry: {
    borderRadius: 25,
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#41C4E5",
    padding: 20,

    // borderColor: "orange",
    // borderWidth: 1
  },

  textButtonRetry: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles