import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const Home = () => {
  return (
    <View style={styles.homeView}>
      <View style={styles.rectangleView} />
      <View style={styles.frameView} />
      <Image style={styles.rectangleIcon} resizeMode="cover" />
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
      <Image style={styles.pNGDBBraceletGoldJewelleryIcon} resizeMode="cover" />
      <Image style={styles.pNGDBCartierLoveBraceletJeIcon} resizeMode="cover" />

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
        style={styles.rectangleIcon1}
        resizeMode="cover"
        source={require("../assets/rectangle-15.png")}
      />
      <Image
        style={styles.rectangleIcon2}
        resizeMode="cover"
        source={require("../assets/rectangle-16.png")}
      />
      <Image
        style={styles.rectangleIcon3}
        resizeMode="cover"
        source={require("../assets/rectangle-17.png")}
      />
      <View style={styles.groupView1}>
        <Image
          style={styles.rectangleIcon4}
          resizeMode="cover"
          source={require("../assets/rectangle-18.png")}
        />
        <Image
          style={styles.rectangleIcon5}
          resizeMode="cover"
          source={require("../assets/rectangle-201.png")}
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
          style={styles.rectangleIcon6}
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
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  frameView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 397,
    display: "none",
  },
  rectangleIcon: {
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
  
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 107,
  },
  rectangleIcon1: {
    position: "absolute",
    top: 557,
    left: 34,
    borderRadius: 6,
    width: 57,
    height: 57,
  },
  rectangleIcon2: {
    position: "absolute",
    top: 628,
    left: 34,
    borderRadius: 6,
    width: 57,
    height: 57,
  },
  rectangleIcon3: {
    position: "absolute",
    top: 699,
    left: 34,
    borderRadius: 6,
    width: 57,
    height: 57,
  },
  rectangleIcon4: {
    position: "absolute",
    top: 246,
    left: 35,
    borderRadius: 6,
    width: 57,
    height: 49,
  },
  rectangleIcon5: {
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
  
    color: "#000",
    textAlign: "left",
  },
  avenueTmezBenin: {
    position: "absolute",
    top: 30,
    left: 1,
    fontSize: 16,
    textTransform: "capitalize",
  
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
  rectangleIcon6: {
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
  
    color: "#fff",
    textAlign: "left",
  },
  cartierJawText: {
    position: "absolute",
    top: 557,
    left: 102,
    fontSize: 20,
  
    color: "#000",
    textAlign: "left",
  },
  avenueMaizUSA: {
    position: "absolute",
    top: 587,
    left: 103,
    fontSize: 16,
    textTransform: "capitalize",
  
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
  
    color: "#000",
    textAlign: "left",
  },
  avenueSteinmetzBenin: {
    position: "absolute",
    top: 658,
    left: 103,
    fontSize: 16,
    textTransform: "capitalize",
  
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
  
    color: "#000",
    textAlign: "left",
  },
  avenuePollVietnam: {
    position: "absolute",
    top: 729,
    left: 103,
    fontSize: 16,
    textTransform: "capitalize",
  
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
  vectorIcon: {
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
  homeView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Home;
