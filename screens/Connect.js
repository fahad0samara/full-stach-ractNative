import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Connect = () => {
  return (
    <View style={styles.connectView}>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <View style={styles.btn01View}>
        <Text style={styles.connexionText}>Connexion</Text>
      </View>
      <View style={styles.btn02View}>
        <Text style={styles.inscriptionText}>Inscription</Text>
      </View>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
      <Text style={styles.motDePasseOubli}>Mot de passe oublié ?</Text>
      <Text style={styles.bienvenueChezTigerJewelry}>
        <Text style={styles.bienvenueText}>Bienvenue</Text>
        <Text style={styles.chezTigerJewelry}>chez Tiger Jewelry</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIcon: {
    position: "absolute",
    top: -20,
    left: -7,
    borderRadius: 45,
    width: 391,
    height: 828,
  },
  connexionText: {
    position: "relative",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  btn01View: {
    position: "absolute",
    top: 543,
    left: 52,
    borderRadius: 38,
    backgroundColor: "rgba(227, 227, 227, 0.3)",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 92,
    paddingVertical: 15,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inscriptionText: {
    position: "relative",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#745f9a",
    textAlign: "left",
  },
  btn02View: {
    position: "absolute",
    top: 618,
    left: 52,
    borderRadius: 38,
    backgroundColor: "#fff",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 93,
    paddingVertical: 15,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logoIcon: {
    position: "absolute",
    top: 54,
    left: 48,
    width: 64,
    height: 64,
  },
  motDePasseOubli: {
    position: "absolute",
    top: 699,
    left: 112,
    fontSize: 16,
    textDecoration: "underline",
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  bienvenueText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  chezTigerJewelry: {
    margin: 0,
  },
  bienvenueChezTigerJewelry: {
    position: "absolute",
    top: 155,
    left: 52,
    fontSize: 30,
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  connectView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Connect;
