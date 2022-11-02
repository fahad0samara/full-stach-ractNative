import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const TigerJewelry = () => {
  return (
    <View style={styles.tigerJewelryView}>
      <View style={styles.frameView}>
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
      <View style={styles.frameView2}>
        <View style={styles.rectangleView} />
        <Text style={styles.emailText}>Email</Text>
        <Text style={styles.motDePasse}>Mot de passe</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={styles.frameView1} />
        <Image
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Image
          style={styles.rectangleIcon2}
          resizeMode="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={styles.salutStevenText}>
          <Text style={styles.salutText}>Salut,</Text>
          <Text style={styles.stevenText}>Steven</Text>
        </Text>
        <View style={styles.rectangleView1} />
        <Text style={styles.sinscrireText}>S’inscrire</Text>
        <View style={styles.lineView} />
        <View style={styles.lineView1} />
        <Image
          style={styles.icons8SignMail1}
          resizeMode="cover"
          source={require("../assets/icons8sign-mail-1.png")}
        />
        <Image
          style={styles.icons8Key1}
          resizeMode="cover"
          source={require("../assets/icons8key-1.png")}
        />
        <Text style={styles.stevenkejjadgmailcomText}>
          stevenkejjad@gmail.com
        </Text>
        <Text style={styles.text}>••••••••••</Text>
      </View>
      <View style={styles.frameView4}>
        <View style={styles.rectangleView2} />
        <View style={styles.frameView3} />
        <Image
          style={styles.rectangleIcon3}
          resizeMode="cover"
          source={require("../assets/rectangle-111.png")}
        />
        <Text style={styles.meilleuresOffresPourVous}>
          Meilleures offres pour vous
        </Text>
        <Text style={styles.principauxBoutiquesText}>Principaux Boutiques</Text>
        <Image
          style={styles.icons8Search1}
          resizeMode="cover"
          source={require("../assets/icons8search-1.png")}
        />
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-3.png")}
        />
        <Image
          style={styles.groupIcon1}
          resizeMode="cover"
          source={require("../assets/group-4.png")}
        />
        <Image
          style={styles.groupIcon2}
          resizeMode="cover"
          source={require("../assets/group-5.png")}
        />
        <Image
          style={styles.pNGDBBraceletGoldJewelleryIcon}
          resizeMode="cover"
          source={require("../assets/pngdb-braceletgoldjewellerybanglering-0junm0lzb8-1.png")}
        />
        <Image
          style={styles.pNGDBCartierLoveBraceletJeIcon}
          resizeMode="cover"
          source={require("../assets/pngdb-cartierlovebraceletjewellerybangle-kzjazwakqb-1.png")}
        />
        <Image
          style={styles.pNGDBNewYorkCityRingBraceIcon}
          resizeMode="cover"
          source={require("../assets/pngdb-newyorkcityringbraceletjewellerybangle-7gzhfgzget-1.png")}
        />
        <Text style={styles.tigerLoveBraceletJewellery}>
          <Text style={styles.tigerLoveBraceletContainer}>
            <Text style={styles.tigerLoveBracelet}>Tiger Love Bracelet</Text>
            <Text style={styles.jewelleryDiamondText}>Jewellery Diamond</Text>
          </Text>
        </Text>
        <Text style={styles.xOFText}>798.000 XOF</Text>
        <Text style={styles.tigerGoldJewelleryBangleRi}>
          <Text style={styles.tigerGoldJewelleryContainer}>
            <Text
              style={styles.tigerGoldJewellery}
            >{`Tiger Gold Jewellery `}</Text>
            <Text style={styles.bangleRingText}>Bangle Ring</Text>
          </Text>
        </Text>
        <Text style={styles.xOFText1}>875.200 XOF</Text>
        <Text style={styles.tigerNewYorkCityRingBrace}>
          <Text style={styles.tigerNewYorkContainer}>
            <Text style={styles.tigerNewYork}>Tiger New York City</Text>
            <Text style={styles.ringBraceletText}>Ring Bracelet</Text>
            <Text style={styles.jewelleryBangleText}>Jewellery Bangle</Text>
          </Text>
        </Text>
        <Text style={styles.xOFText2}>899.300 XOF</Text>
        <Image
          style={styles.rectangleIcon4}
          resizeMode="cover"
          source={require("../assets/rectangle-15.png")}
        />
        <Image
          style={styles.rectangleIcon5}
          resizeMode="cover"
          source={require("../assets/rectangle-16.png")}
        />
        <Image
          style={styles.rectangleIcon6}
          resizeMode="cover"
          source={require("../assets/rectangle-17.png")}
        />
        <View style={styles.groupView1}>
          <Image
            style={styles.rectangleIcon7}
            resizeMode="cover"
            source={require("../assets/rectangle-18.png")}
          />
          <Image
            style={styles.rectangleIcon8}
            resizeMode="cover"
            source={require("../assets/rectangle-20.png")}
          />
          <View style={styles.groupView}>
            <Text style={styles.miaJewelryText}>Mia Jewelry</Text>
            <Text style={styles.avenueTmezBenin}>34 Avenue, Tmez, Benin</Text>
            <Image
              style={styles.icons8Location4}
              resizeMode="cover"
              source={require("../assets/icons8location-4.png")}
            />
          </View>
          <Image
            style={styles.rectangleIcon9}
            resizeMode="cover"
            source={require("../assets/rectangle-12.png")}
          />
        </View>
        <Text style={styles.xOFText3}>2.572.500 XOF</Text>
        <Text style={styles.cartierJawText}>Cartier Jaw</Text>
        <Text style={styles.avenueMaizUSA}>34 Avenue, maiz, USA</Text>
        <Image
          style={styles.icons8Location1}
          resizeMode="cover"
          source={require("../assets/icons8location-4.png")}
        />
        <Text style={styles.miaBoutiqueText}>Mia Boutique</Text>
        <Text style={styles.avenueSteinmetzBenin}>Avenue Steinmetz, Benin</Text>
        <Image
          style={styles.icons8Location2}
          resizeMode="cover"
          source={require("../assets/icons8location-4.png")}
        />
        <Text style={styles.roadyMalText}>Roady Mal</Text>
        <Text style={styles.avenuePollVietnam}>36 Avenue, Poll, Vietnam</Text>
        <Image
          style={styles.icons8Location3}
          resizeMode="cover"
          source={require("../assets/icons8location-4.png")}
        />
        <Image
          style={styles.vectorIcon2}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIcon: {
    position: "absolute",
    top: -200,
    left: -200,
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
  frameView: {
    position: "absolute",
    top: 194,
    left: 168,
    width: 375,
    height: 812,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 45,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    width: 375,
    height: 812,
  },
  emailText: {
    position: "absolute",
    top: 442,
    left: 62,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#ccbee3",
    textAlign: "left",
  },
  motDePasse: {
    position: "absolute",
    top: 540,
    left: 62,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#ccbee3",
    textAlign: "left",
  },
  vectorIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 397,
  },
  frameView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 397,
    display: "none",
  },
  rectangleIcon1: {
    position: "absolute",
    top: -6,
    left: 232.79,
    width: 492.58,
    height: 485.1,
    display: "none",
  },
  rectangleIcon2: {
    position: "absolute",
    top: -14,
    left: 39.02,
    width: 612.59,
    height: 568.86,
  },
  vectorIcon1: {
    position: "absolute",
    height: "2.94%",
    width: "9.17%",
    top: "8.62%",
    right: "76.97%",
    bottom: "88.44%",
    left: "13.87%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  salutText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  stevenText: {
    margin: 0,
  },
  salutStevenText: {
    position: "absolute",
    top: 155,
    left: 52,
    fontSize: 30,
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    top: 677,
    left: 62,
    borderRadius: 38,
    shadowColor: "#b9abd2",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 270,
    height: 55,
  },
  sinscrireText: {
    position: "absolute",
    top: 694,
    left: 159,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    top: 598.5,
    left: 61.5,
    borderStyle: "solid",
    borderColor: "#ccbee3",
    borderTopWidth: 1,
    width: 271,
    height: 1,
  },
  lineView1: {
    position: "absolute",
    top: 499.5,
    left: 61.5,
    borderStyle: "solid",
    borderColor: "#ccbee3",
    borderTopWidth: 1,
    width: 271,
    height: 1,
  },
  icons8SignMail1: {
    position: "absolute",
    top: 468,
    left: 62,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  icons8Key1: {
    position: "absolute",
    top: 566,
    left: 60,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  stevenkejjadgmailcomText: {
    position: "absolute",
    top: 469,
    left: 103,
    fontSize: 16,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    top: 569,
    left: 103,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  frameView2: {
    position: "absolute",
    top: 194,
    left: 613,
    width: 375,
    height: 812,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 45,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    width: 375,
    height: 812,
  },
  frameView3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 397,
    display: "none",
  },
  rectangleIcon3: {
    position: "absolute",
    top: -6,
    left: 232.79,
    width: 492.58,
    height: 485.1,
    display: "none",
  },
  meilleuresOffresPourVous: {
    position: "absolute",
    top: 85,
    left: 38,
    fontSize: 30,
    fontFamily: "SF Pro Rounded",
    color: "#473a5f",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 260,
  },
  principauxBoutiquesText: {
    position: "absolute",
    top: 500,
    left: 38,
    fontSize: 24,
    fontFamily: "SF Pro Rounded",
    color: "#473a5f",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 260,
  },
  icons8Search1: {
    position: "absolute",
    top: 89,
    left: 312,
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  groupIcon: {
    position: "absolute",
    top: 234,
    left: 38,
    width: 149,
    height: 199,
  },
  groupIcon1: {
    position: "absolute",
    top: 234,
    left: 193,
    width: 149,
    height: 199,
  },
  groupIcon2: {
    position: "absolute",
    top: 234,
    left: 348,
    width: 149,
    height: 199,
  },
  pNGDBBraceletGoldJewelleryIcon: {
    position: "absolute",
    top: 165,
    left: 192,
    width: 126,
    height: 149,
  },
  pNGDBCartierLoveBraceletJeIcon: {
    position: "absolute",
    top: 157,
    left: 352,
    width: 125,
    height: 159,
  },
  pNGDBNewYorkCityRingBraceIcon: {
    position: "absolute",
    top: 162,
    left: 17,
    width: 159,
    height: 159,
  },
  tigerLoveBracelet: {
    marginBlockStart: 0,
    marginBlockEnd: 3,
  },
  jewelleryDiamondText: {
    margin: 0,
  },
  tigerLoveBraceletContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  tigerLoveBraceletJewellery: {
    position: "absolute",
    top: 310,
    left: 363,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 107,
  },
  xOFText: {
    position: "absolute",
    top: 369,
    left: 363,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 107,
  },
  tigerGoldJewellery: {
    marginBlockStart: 0,
    marginBlockEnd: 3,
  },
  bangleRingText: {
    margin: 0,
  },
  tigerGoldJewelleryContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  tigerGoldJewelleryBangleRi: {
    position: "absolute",
    top: 307,
    left: 208,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 107,
  },
  xOFText1: {
    position: "absolute",
    top: 366,
    left: 208,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 107,
  },
  tigerNewYork: {
    marginBlockStart: 0,
    marginBlockEnd: 3,
  },
  ringBraceletText: {
    marginBlockStart: 0,
    marginBlockEnd: 3,
  },
  jewelleryBangleText: {
    margin: 0,
  },
  tigerNewYorkContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  tigerNewYorkCityRingBrace: {
    position: "absolute",
    top: 307,
    left: 53,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 107,
  },
  xOFText2: {
    position: "absolute",
    top: 366,
    left: 53,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 107,
  },
  rectangleIcon4: {
    position: "absolute",
    top: 557,
    left: 34,
    borderRadius: 6,
    width: 57,
    height: 57,
  },
  rectangleIcon5: {
    position: "absolute",
    top: 628,
    left: 34,
    borderRadius: 6,
    width: 57,
    height: 57,
  },
  rectangleIcon6: {
    position: "absolute",
    top: 699,
    left: 34,
    borderRadius: 6,
    width: 57,
    height: 57,
  },
  rectangleIcon7: {
    position: "absolute",
    top: 246,
    left: 35,
    borderRadius: 6,
    width: 57,
    height: 49,
  },
  rectangleIcon8: {
    position: "absolute",
    top: 235,
    left: 0,
    width: 375,
    height: 54,
  },
  miaJewelryText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 20,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  avenueTmezBenin: {
    position: "absolute",
    top: 30,
    left: 1,
    fontSize: 16,
    textTransform: "capitalize",
    fontFamily: "SF Pro Rounded",
    color: "#ccbee3",
    textAlign: "left",
  },
  icons8Location4: {
    position: "absolute",
    top: 0,
    left: 220,
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  groupView: {
    position: "absolute",
    top: 247,
    left: 102,
    width: 250,
    height: 49,
  },
  rectangleIcon9: {
    position: "absolute",
    top: 230,
    left: 100,
    width: 275,
    height: 59,
  },
  groupView1: {
    position: "absolute",
    top: 523,
    left: 0,
    width: 375,
    height: 289,
  },
  xOFText3: {
    position: "absolute",
    top: 770,
    left: 145,
    fontSize: 20,
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  cartierJawText: {
    position: "absolute",
    top: 557,
    left: 102,
    fontSize: 20,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  avenueMaizUSA: {
    position: "absolute",
    top: 587,
    left: 103,
    fontSize: 16,
    textTransform: "capitalize",
    fontFamily: "SF Pro Rounded",
    color: "#ccbee3",
    textAlign: "left",
  },
  icons8Location1: {
    position: "absolute",
    top: 557,
    left: 322,
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  miaBoutiqueText: {
    position: "absolute",
    top: 628,
    left: 102,
    fontSize: 20,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  avenueSteinmetzBenin: {
    position: "absolute",
    top: 658,
    left: 103,
    fontSize: 16,
    textTransform: "capitalize",
    fontFamily: "SF Pro Rounded",
    color: "#ccbee3",
    textAlign: "left",
  },
  icons8Location2: {
    position: "absolute",
    top: 628,
    left: 322,
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  roadyMalText: {
    position: "absolute",
    top: 699,
    left: 102,
    fontSize: 20,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  avenuePollVietnam: {
    position: "absolute",
    top: 729,
    left: 103,
    fontSize: 16,
    textTransform: "capitalize",
    fontFamily: "SF Pro Rounded",
    color: "#ccbee3",
    textAlign: "left",
  },
  icons8Location3: {
    position: "absolute",
    top: 699,
    left: 322,
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  vectorIcon2: {
    position: "absolute",
    height: "1.91%",
    width: "5.97%",
    top: "95.2%",
    right: "10.57%",
    bottom: "2.89%",
    left: "83.47%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  frameView4: {
    position: "absolute",
    top: 194,
    left: 1058,
    width: 375,
    height: 812,
  },
  tigerJewelryView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 1200,
    overflow: "hidden",
  },
});

export default TigerJewelry;
