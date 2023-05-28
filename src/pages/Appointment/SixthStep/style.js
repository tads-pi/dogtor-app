import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  blueBar: {
    backgroundColor: '#41C4E5',
    width: 400,
    height: 14,
    marginTop: -47,
    marginLeft: -10,
  },

  navBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  boxTitle: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },

  textTitle: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  boxTitle1: {
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 8,
    maxWidth: 310,

  },

  textTitle1: {
    color: "#ACBBC3",
    fontSize: 18,
    textAlign: "center",

  },

  qrcode: {
    flex: 1,
    marginLeft: 55,
    margin: 30,
  },

  boxTitle2: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 270,
  },

  textTitle2: {
    color: "#ACBBC3",
    fontSize: 18,
  },

  buttonCopy: {
    flexDirection: 'row',
    borderRadius: 25,
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#FFFFF",
    borderWidth: 1,
    padding: 10,
    maxWidth: 320,
    maxHeight: 150,
    marginBottom: 8,
    marginTop: 9,
  },

  textButtonCopy: {
    color: "#000000",
    fontSize: 8,
    textAlign: "left",
    marginLeft: 5,
    maxWidth: 280,
  },

  buttonConfirm: {
    borderRadius: 25,
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#41C4E5",
    padding: 20,
    marginTop: 60,
  },

  textButtonConfirm: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles