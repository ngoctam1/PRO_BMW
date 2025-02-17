import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  Animated,
  StatusBar,
  Linking
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Home = ({ navigation }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState('BMW M');
  const [subTabs, setSubTabs] = useState(['ALL BMW M']);
  const [showSubOptions, setShowSubOptions] = useState(false);
  const [selectedSubTab, setSelectedSubTab] = useState(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const toggleSwitch = () => setIsDarkTheme(previousState => !previousState);

  const handleOptionPress = () => {
    setModalVisible(true);
  };

  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)'],
    extrapolate: 'clamp'
  });

  const headerScale = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0.8],
    extrapolate: 'clamp'
  });
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [80, 60],
    extrapolate: 'clamp'
  });

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '40deg'],
    extrapolate: 'clamp'
  });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    Animated.timing(rotateAnim, {
      toValue: isMenuOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  };



  return (
    <View style={[styles.container, isDarkTheme ? styles.darkBackground : styles.lightBackground]}>
      <Animated.View
        style={[
          styles.header,
          {
            backgroundColor: headerBackgroundColor,
            height: headerHeight,
            transform: [{ scale: headerScale }]
          }
        ]}
      >
        <TouchableOpacity onPress={toggleMenu}>
          <Animated.Image
             source={require('./logo1.png')}
            style={[styles.logo, { transform: [{ rotate }] }]}
          />
        </TouchableOpacity>

        <View style={styles.verticalSeparator} />

        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={() => alert('Call')}>
            <Ionicons
              style={isDarkTheme ? styles.darkText2 : styles.lightText2}
              name="call" size={24} color="black"
            />
            <Text style={isDarkTheme ? styles.darkText2 : styles.lightText2}>
              Call
            </Text>
          </TouchableOpacity>

          <View style={styles.verticalSeparator} />

          <TouchableOpacity onPress={handleOptionPress}>
            <Ionicons
              style={isDarkTheme ? styles.darkText : styles.lightText}
              name="options" size={24} color="black"
            />
            <Text style={isDarkTheme ? styles.darkText2 : styles.lightText2}>
              Menu
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      <View style={styles.separator} />

      <Animated.ScrollView
        contentContainerStyle={styles.content}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={15}
      >
        <View style={{width:"100%",height:700}}>
        <Image
          source={{ uri: 'https://i.pinimg.com/564x/13/3e/79/133e791b3f0e9491e2fcfb2ce5626b32.jpg' }}
          style={styles.image}
        />
         <View style={{position:'absolute',top:450,left:40}}>
            <Text style={{fontSize:50,fontWeight:'200',color:'white'}}>THE i4</Text>
            <Text style={{fontSize:25,fontWeight:'400',color:'white'}}>THE BMW i4: THE FIRST-EVER FULLY-ELECTRIC GRAN COUPÉ</Text>

            <View style={{ marginTop: 20, flexDirection:'row' }}>
            <TouchableOpacity style={{ padding: 5, paddingHorizontal: 20, backgroundColor: '#1c69d3'}}>
              <Text style={{ fontWeight: '400', color: "white", fontSize: 15 }}>Register interest</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 5, paddingHorizontal: 20, backgroundColor: '#4d4d4d', marginLeft:10}}>
              <Text style={{ fontWeight: '400', color: 'white', fontSize: 15 }}>Book a Test Drive</Text>
            </TouchableOpacity>
          </View>

        <View style={styles.inforInBanner}>
        <View style={styles.priceRTag}> 
                <View>
                <Text style={{fontSize:20,color:'white',fontWeight:'200'}}>Prices From</Text>
                <Text style={{fontSize:15,color:'white',fontWeight:"400"}}>VND 3,799,000,000</Text>
                </View>

                <View style={{marginLeft:20}}>
                <Text style={{fontSize:20,color:'white',fontWeight:'200'}}>Fuel Type</Text>
                <Text style={{fontSize:15,color:'white',fontWeight:"400"}}>Full Electric</Text>
                </View>
            </View>
        </View>
        </View>
        </View>


        
        <View style={styles.InVisisbleSpace}></View>

        
        <View style={styles.mainTextCNT}>
            <View style={styles.mainLeftCTN}>
                <Text style={styles.bulletText}>The first all-electric Gran Coupé, the BMW i4 delivers outstanding dynamics with a high level of comfort and the ideal qualities to make it your daily driver. The five-door model comes equipped with fifth-generation BMW eDrive technology for sporty performance figures – reaching up to 400 kW/544 hp (BMW i4 M50). With a long range of up to 590km* (BMW i4 eDrive40​) and five spacious full-sized seats, it is the perfect companion for any journey.</Text>
            </View>
          </View>

          <View style={styles.InVisisbleSpace}></View>
        





        


        <View style={styles.mainTextCNT}>
        <View style={styles.mainLeftCTN}>
       
        <View style={styles.InVisisbleSpace}></View>
          <Image
                  source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_841,h_473,q_auto,c_fill,f_auto,fl_lossy/auto-titan/cfe536b8a015d54edce73aeb0baa2491/bmw_i4_edrive_40_onepager_ms_range.jpg' }}
                  style={styles.image1}
                  />

                <Text style={styles.headerText}>THE BMW i4 eDRIVE40 DELIVERS A RANGE OF UP TO 590 KM.*</Text>
                <Text style={styles.bulletText}>Thanks to the interplay of an efficient drivetrain concept, lightweight construction, aerodynamic design, and a powerful high-voltage battery, the BMW i4 reaches ranges of up to 590 kilometres* (BMW i4 eDrive40).</Text>
        </View>
        </View>


        <View style={styles.InVisisbleSpace}></View>
        <View style={styles.InVisisbleSpace}></View>



        <View style={styles.mainTextCNT}>
        <View style={styles.mainLeftCTN}>
          <Image
                  source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_547,h_308,q_auto,c_fill,f_auto,fl_lossy/auto-titan/1b393895c14e6ff872efa80d197587b0/bmw_i4_edrive_40_onepager_mc_exterior_highlights_01.jpg' }}
                  style={styles.image1}
                  />

                <Text style={styles.heading}>Front design.</Text>
                <Text style={styles.bulletText}>The vertically aligned kidney of the BMW i4 extends from the unique BMW i front apron. Instead of cooling air, the kidney, with its strikingly patterned structure, conceals state-of-the-art sensor technology that supplies the vehicle with real-time data.</Text>
         
        </View>
        </View>


        <View style={styles.mainTextCNT}>
        <View style={styles.mainLeftCTN}>
          <Image
                  source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_547,h_308,q_auto,c_fill,f_auto,fl_lossy/auto-titan/c4353fce24afe60a1519bfa0ccabd066/bmw_i4_edrive_40_onepager_mc_exterior_highlights_02.jpg' }}
                  style={styles.image1}
                  />

                <Text style={styles.heading}>Side view.</Text>
                <Text style={styles.bulletText}>The aerodynamically optimised silhouette of the BMW i4 is an extension of the classic BMW Coupé proportions: A long wheelbase with short overhangs and a flowing roofline define its sporty, elegant lines.</Text>
         
        </View>
        </View>


        <View style={styles.mainTextCNT}>
        <View style={styles.mainLeftCTN}>
          <Image
                  source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_547,h_308,q_auto,c_fill,f_auto,fl_lossy/auto-titan/bf79a0994600619039d756d96046d1e9/bmw_i4_edrive_40_onepager_mc_exterior_highlights_03.jpg' }}
                  style={styles.image1}
                  />

                <Text style={styles.heading}>Rear design.</Text>
                <Text style={styles.bulletText}>Sharply cut vertical aero lips close off the BMW i4 to the side, while the expressively designed diffuser elements emerge from below – accentuated by a blue trim frame, typical for BMW i.</Text>
         
        </View>
        </View>

        




        


      {/* 4 img */}

      <View style={styles.mainTextCNT}>
             <Text style={styles.headerText}>INTERIOR HIGHLIGHTS OF THE BMW i4.</Text>
             <View style={styles.fordIMGCNT1}>
             <View style={styles.InVisisbleSpace}></View>
                        

                      <Image
                        source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_836,h_380,q_auto,c_fill,f_auto,fl_lossy/auto-titan/34910be361cc38b245cc53009dd45483/bmw_i4_edrive_40_onepager_mc_interior_highlights_01.jpg' }}
                        style={styles.imgInford1}
                        />
                         <Text style={styles.heading}>Driver-oriented cockpit.</Text>
                         <Text style={styles.bulletText}>The very sleek and flat instrument panel sets the tone for the modern appearance of the BMW i4's interior. The high centre console provides a sporty feel and defines a separate area for the driver and front passenger.</Text>

                        
                       <View style={styles.InVisisbleSpace}></View>


                     
                       <Image
                        source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_836,h_380,q_auto,c_fill,f_auto,fl_lossy/auto-titan/5ee4d76536490039f6c98cdce563c583/bmw_i4_edrive_40_onepager_mc_interior_highlights_02.jpg' }}
                        style={styles.imgInford1}
                        />
                        <Text style={styles.heading}>BMW Curved Display.</Text>
                         <Text style={styles.bulletText}>The new BMW Curved Display in the BMW i4 combines the 12.3" instrument cluster with the large 14.9" Control Display to create a modern display unit that curves ergonomically towards the driver.</Text>
                       <View style={styles.InVisisbleSpace}></View>


        
                       <Image
                        source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_836,h_380,q_auto,c_fill,f_auto,fl_lossy/auto-titan/1dd5cc8608d121dfd6904173088f5cfc/bmw_i4_edrive_40_onepager_mc_interior_highlights_03.jpg' }}
                        style={styles.imgInford1}
                        />
                        <Text style={styles.heading}>5 seats spaciousness.</Text>
                        <Text style={styles.bulletText}>A full-fledged five-seater, the BMW i4 offers space for up to three people in the rear. Generous headroom and legroom ensure excellent seating comfort for all.</Text>
                       <View style={styles.InVisisbleSpace}></View>



             </View>
        </View>





      {/* 4 img */}

      <View style={styles.mainTextCNT}>
             <Text style={styles.headerText}>ORIGINAL BMW ACCESSORIES FOR THE BMW i4.</Text>
             <View style={styles.fordIMGCNT1}>

                        <Text style={styles.heading}>BMW clothes hanger for Travel & Comfort System..</Text>
                      <Image
                        source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_836,h_380,q_auto,c_fill,f_auto,fl_lossy/auto-titan/311fe38ad1e64b774e418aab8da7e5d4/bmw_i4_m50_onepager_mc_equipment_accessoires_03.jpg' }}
                        style={styles.imgInford1}
                        />
                       <View style={styles.InVisisbleSpace}></View>


                        <Text style={styles.heading}>BMW Advanced Car Eye 2.</Text>
                      <Image
                        source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_836,h_380,q_auto,c_fill,f_auto,fl_lossy/auto-titan/96445cfeb27257d5c340a31ff336db06/bmw_i4_m50_onepager_mc_equipment_accessoires_05.jpg' }}
                        style={styles.imgInford1}
                        />
                       <View style={styles.InVisisbleSpace}></View>

                       
                       <Text style={styles.heading}>BMW all-weather floor mats front.</Text>
                      <Image
                        source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_836,h_380,q_auto,c_fill,f_auto,fl_lossy/auto-titan/77fcc1c7f2d603b214bcca776fa0821b/bmw_i4_edrive_40_onepager_mc_mpp_accessoires_accessoires_06.jpg' }}
                        style={styles.imgInford1}
                        />
                       <View style={styles.InVisisbleSpace}></View>

             </View>
        </View>

        <View style={styles.InVisisbleSpace}></View>





        {/* center content */}

        
        <View style={styles.mainTextCNT}>
        <View style={styles.mainLeftCTN}>
            <Text style={styles.headerText}>PRICES, FINANCING AND LEASING OF THE BMW i4.</Text>
          <Text style={styles.bulletText}>Whether for financing or leasing – each of our offers is individually adapted to your needs and desires</Text>
          <Image
                  source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_851,h_479,q_auto,c_fill,f_auto,fl_lossy/auto-titan/ae3b5e4ff4790806b568154c7964b47a/bmw_i4_edrive_40_onepager_ms_financial_services.jpg' }}
                  style={styles.image1}
                  />  
        </View>
        </View>






    




<View style={styles.mainTextCNT}>
<View style={styles.mainLeftCTN}>
  <Text style={styles.headerText}>TECHNICAL DATA OF THE BMW i4. </Text>
  <Text style={styles.heading}>BMW i4 eDrive40.</Text>
          <Image
                  source={{ uri: 'https://i.pinimg.com/564x/81/e8/f4/81e8f41fb5385a5e439d896f0505c1ca.jpg' }}
                  style={styles.image1}
                  />    

                <View style={styles.powDetailsTextCtn}>
                    <View style={styles.powTextItem}>
                        <Text style={styles.label}>Engine power in kW (hp) at 1/min:</Text>
                        <Text style={styles.value}>250(340)</Text>
                    </View>
                    <View style={styles.powTextItem}>
                        <Text style={styles.label}>Maximum torque in Nm:</Text>
                        <Text style={styles.value}>430</Text>
                    </View>
                    <View style={styles.powTextItem}>
                        <Text style={styles.label}>Acceleration 0–100 km/h in s:</Text>
                        <Text style={styles.value}>5.7</Text>
                    </View>
                    <View style={styles.powTextItem}>
                        <Text style={styles.label}>Electric range in km (WLTP):</Text>
                        <Text style={styles.value}>up to 590*</Text>
                    </View>
                    <View style={styles.powTextItem}>
                        <Text style={styles.label}>Maximum charging capacity:</Text>
                        <Text style={styles.value}> 10 min - 128Km
                        </Text>
                    </View>
                </View>              

          </View>
          </View>

{/* 
          <View style={styles.mainTextCNT}>
        <View style={styles.mainLeftCTN}>
            <Text style={styles.heading}>FUEL CONSUMPTION AND CO2 EMISSIONS.</Text>
            <Text style={styles.TextItem}>BMW Z4 Roadster sDrive20i:</Text>
            <Text style={styles.TextItem}>Fuel consumption in l/100 km (combined): 8.2</Text>
            <Text style={styles.TextItem}>CO2 emissions in g/km (combined): 189.52</Text>
        </View>
        </View> */}


        <View style={styles.containerStyle}>
          <View style={styles.customContentCTN}>
            <View style={styles.imgCTN}>
            <Image
                source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_850,h_478,q_auto,c_fill,f_auto,fl_lossy/auto-titan/e5e1906b0fb456c6db8ca230b97c2aa6/bmw_x4_onepager_wide_teaser_dlo.jpg' }} 
                style={styles.imgleft}
      
              />
            </View>
            <View style={styles.textRightCTN}>
              <Text style={styles.subtitle}>Would you like a personal consultation?</Text>
              <Text style={styles.description}>
              If you have any questions, require further information or would like specific offers for the BMW 3 Series Sedan, please contact a BMW partner near you. Our competent BMW service staff will be happy to advise you individually by phone or directly on-site.
              </Text>
              <TouchableOpacity style={styles.buttoncontent}>
                <Text style={styles.buttonTextContent}>Find a BMW dealer</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>





        <View style={styles.InVisisbleSpace}></View>
        <View style={styles.InVisisbleSpace}></View>

        {/* footer */}
        
        <View style={styles.footer}>
  <View style={styles.topSection}>
    <TouchableOpacity style={styles.iconContainer}>
      <FontAwesome name="car" size={24} color="black" />
      <Text style={styles.iconText}>Book a Test Drive</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconContainer}>
      <FontAwesome name="list-alt" size={24} color="black" />
      <Text style={styles.iconText}>BMW Price List</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconContainer}>
      <FontAwesome name="phone" size={24} color="black" />
      <Text style={styles.iconText}>Contact Dealer</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.bottomSection}>
    <View style={styles.contactColumn}>
      <Text style={styles.columnTitle}>CONTACT</Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.bmw.com/contact')}>
        <Text style={styles.linkText}>Contact BMW</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.bmw.com/dealer')}>
        <Text style={styles.linkText}>Contact Dealer</Text>
      </TouchableOpacity>
      <View style={styles.socialIcons}>
        <View style={styles.socialIconsCTN}>
          <FontAwesome name="facebook" size={24} color="black" />
        </View>
        <View style={styles.socialIconsCTN}>
          <FontAwesome name="instagram" size={24} color="black" />
        </View>
        <View style={styles.socialIconsCTN}>
          <FontAwesome name="youtube" size={24} color="black" />
        </View>
      </View>
    </View>

    <View style={styles.moreColumn}>
      <Text style={styles.columnTitle}>MORE ABOUT BMW</Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.bmw.com/learn-more')}>
        <Text style={styles.linkText}>Learn more BMW</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.press.bmwgroup.com/asia')}>
        <Text style={styles.linkText}>BMW PressClub Asia</Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.bottomLinks}>
    <TouchableOpacity onPress={() => Linking.openURL('https://www.bmw.com/legal')}>
      <Text style={styles.linkText}>Legal Disclaimer</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Linking.openURL('https://www.bmw.com/privacy')}>
      <Text style={styles.linkText}>Privacy Policy</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Linking.openURL('https://www.bmw.com/cookies')}>
      <Text style={styles.linkText}>Cookie Policy</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Linking.openURL('https://www.bmw.com/imprint')}>
      <Text style={styles.linkText}>Imprint</Text>
    </TouchableOpacity>
  </View>

  <Text style={styles.copyright}>© THACO AUTO 2024</Text>
</View>


    
      </Animated.ScrollView>



      {/* Modal cho các chức năng */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { backgroundColor: 'white' }]}>
            <Text style={styles.modalTitle}>Chức năng</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.modalOption}>Trang chủ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Mẫu xe')}>
              <Text style={styles.modalOption}>Mẫu xe</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('bookForm')}>
              <Text style={styles.modalOption}>Đặt hẹn lái thử</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Hệ thống phân phối')}>
              <Text style={styles.modalOption}>Hệ thống phân phối</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Tìm hiểu')}>
              <Text style={styles.modalOption}>Tìm hiểu</Text>
            </TouchableOpacity>
            <View style={styles.switchContainer}>
              <Text style={styles.modalOption}>Theme: </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isDarkTheme}
              />
              {isDarkTheme ? (
                <Ionicons name="moon" size={24} color="black" style={styles.icon} />
              ) : (
                <Ionicons name="sunny" size={24} color="black" style={styles.icon} />
              )}
            </View>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex: 1,
    backgroundColor:'#cccccc'
  },
  header: {
  

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    

  },
  optionsContainer: {

    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalSeparator: {
    width: 1,
    height: 40,
    backgroundColor: '#cccccc',
    marginHorizontal:10

  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 15,
  },
  content: {
    alignItems: 'center',
    padding: 0,
  },
  lightBackground: {
    backgroundColor: '#ffffff',
  },

  darkBackground: {
    backgroundColor: '#333333',
  },
  darkBackground1: {
    backgroundColor: '#525252',
    height:100,
    width:400,
  },
  lightHeaderText: {
    fontSize: 24,
    color: '#000000',
  },
  darkHeaderText: {
    fontSize: 24,
    color: '#ffffff',
  },
  lightText: {
    color: '#000000',
    marginVertical: 2,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  darkText: {
    color: '#ffffff',
    marginVertical: 2,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  lightText1: {
    color: '#000000',
    marginVertical: 2,
    marginTop:20,
    marginBottom:20,
    textAlign: 'center',
    fontSize: 28,
  },
  darkText1: {
    color: '#ffffff',
    marginVertical: 2,
    marginTop:20,
    marginBottom:20,
    textAlign: 'center',
    fontSize: 28,
  },
    darkText3: {
    color: '#ffffff',
    marginVertical: 2,
    marginTop:20,
    marginBottom:20,
    textAlign: 'flex-start',
    fontSize: 28,
  },
    lightText3: {
    flex:1,
    backgroundColor:'pink',
    color: '#000000',
    marginVertical: 1,
    marginTop:20,
    marginLeft:25,
    marginBottom:20,
    textAlign: 'flex-start',
    fontSize: 28,
  },
  lightText2: {
    color: '#000000',
    marginVertical: 2,
    textAlign: 'center',
  },
  darkText2: {
    color: '#ffffff',
    marginVertical: 2,
    textAlign: 'center',
  },
  image: {
    width: "100%",
    height: 700,
    marginBottom: 10,
    marginTop:5,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    // Android Shadow
    elevation: 8,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalOption: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    marginTop: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  icon: {
    marginLeft: 10,
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#ccc',
    borderTopColor: '#ccc',
  },
  tabContainercon: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#ccc',
    borderTopColor: '#ccc',
  },
  tabcon: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 35,
  },
  activeTab:{
    borderBottomWidth: 5,
  },
    activeTabd: {
    borderBottomColor: '#fff',
  },
    activeTabl: {
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#777',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  lightTabText: {
    color: '#000',
  },
  darkTabText: {
    color: '#fff',
  },
  logo: {
    width: 50,
    height: 50,
  },
  inforInBanner:{
    marginTop:10,
    flexDirection:'row',
  },
  priceRTag:{

    flexDirection:'row'
    
  },
  mainTextCNT:{
   width:"100%",
   paddingVertical:15,
   paddingHorizontal:10,
  },
  mainLeftCTN:{
    width:"100%",
    padding: 10,
    backgroundColor: '#ffffff', // White background for text area
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Adds shadow for Android
  },
  mainText:{
    fontSize: 16,
    lineHeight: 24,
    color: '#333', // Dark text for readability
    fontWeight: '600',
  },
  headerText:{
    fontSize:25,
    fontWeight:"500",
  },
  image1:{
    marginVertical:10,
    width:"100%",
    height:200,
  },
  headerText2:{
    fontSize: 16,
    lineHeight: 24,
    color: '#333', // Dark text for readability
    fontWeight: 'bold',
  },


  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headeing1:{
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 4,
  },
  bulletPoint: {
    fontSize: 20,
    lineHeight: 24,
    marginRight: 8,
  },
  bulletText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },

    containerStyle: {
      backgroundColor: '#fff',
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 16,
    },
    contentContainer: {
      flexDirection: 'row',
      backgroundColor: '#f5f5f5',
      borderRadius: 8,
      overflow: 'hidden',
      padding: 16,
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
      marginRight: 8,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 8,
    },
    description: {
      fontSize: 14,
      color: '#333',
    },
    imagecnt: {
      width: 120,
      height: 220,
      borderRadius: 8,
    },
  
// img left , content right
customContentCTN:{
  width:"100%",
  flexDirection:'row',
  backgroundColor: '#f5f5f5',
  borderRadius: 8,
  padding: 16,
  justifyContent:'center',
  alignItems:'center'


},
imgCTN:{
  flex:1,
},
imgleft:{
  width:120,
  height:220,
  borderRadius:8,


},
textRightCTN:{
  flex:2,
  marginLeft:30
},
buttoncontent:{
  marginTop:10,
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderWidth: 1,
  borderColor: '#000',
  borderRadius: 5,
  alignItems: 'center',
},
buttonTextContent: {
  fontSize: 16,
  color: '#000',
},

footer: {
  width:'100%',
  backgroundColor: '#f8f8f8',
  padding: 20,
},
topSection: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginBottom: 20,
},
iconContainer: {
  alignItems: 'center',

},
iconText: {
  marginTop: 5,
  fontSize: 14,
},
bottomSection: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
},
contactColumn: {
  flex: 1,
},
columnTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 10,
},
linkText: {
  fontSize: 14,
  color: '#007aff',
  marginBottom: 5,
},
socialIcons: {
  flexDirection: 'row',
  marginTop: 10,
  justifyContent:'center',
  alignItems:'center',
},
moreColumn: {
  flex: 1,
},


bottomLinks: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  marginBottom: 10,
},
copyright: {
  fontSize: 12,
  color: '#555',

  marginTop: 10,
},
socialIconsCTN:{
  padding:20,
},

containercarinfor: {
    width:"100%",
    alignItems: 'center',
    justifyContent: 'center',
},
imageInfor: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
},
infoContainer: {
    padding:4,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
},
infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
},
infoValue: {
    fontSize: 16,
    marginBottom: 10,
},
learnMore: {
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
},

fordIMGCNT:{
  width:"100%",
  height:600,
  padding:10,
},
inFordCTN:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center',
  
},
imgInford:{
    width:"50%",
    height:280,
    margin:5,

},
fordIMGCNT1:{
  width:'100%',
},
imgInford1:{
  width:"100&",
  height:200,
  margin:10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  // Android Shadow
  elevation: 8,
},
horizontalSpacing:{
    
  height:1,
  width:"100%",
  backgroundColor:"gray",
  marginVertical:20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  // Android Shadow
  elevation: 8,
},
TextItem:{
  fontSize:16,
  fontWeight:'300',
},
powDetailsTextCtn: {
    padding: 16,
    backgroundColor: '#fff',
},
powTextItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
},
label: {
    fontSize: 12,
    color: '#333',
},
value: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
},
spacingText:{
    width:"100%",
    height:10,
},
InVisisbleSpace:{
    width:"100%",
    marginVertical:40,
}
});

export default Home;
