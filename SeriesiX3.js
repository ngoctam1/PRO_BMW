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
          source={{ uri: 'https://i.pinimg.com/564x/a2/14/13/a2141310b4668e02bf236eaf51f29d0a.jpg' }}
          style={styles.image}
        />
         <View style={{position:'absolute',top:450,left:40}}>
            <Text style={{fontSize:50,fontWeight:'200',color:'white'}}>THE iX3</Text>
            <Text style={{fontSize:25,fontWeight:'400',color:'white'}}>BMW iX3</Text>

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
                <Text style={{fontSize:15,color:'white',fontWeight:"400"}}> VND 3,539,000,000</Text>
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
                <Text style={styles.bulletText}>Thanks to the standard-feature M Sport package in its new design, the new BMW iX3 looks sportier than ever. Aerodynamic elements and blue accents bring out the electric nature of the vehicle to its full effect. Whether for short or longer journeys – with a range of up 461 km* and electricity consumption from 3.3 kWh/100 km*, the new BMW iX3 is ideally suited to every route.</Text>
            </View>
          </View>

          <View style={styles.InVisisbleSpace}></View>
        





        


        <View style={styles.mainTextCNT}>
        <View style={styles.mainLeftCTN}>
        <Text style={styles.headerText}>THE ELECTRIFYING DRIVING PERFORMANCE OF THE NEW BMW iX3.</Text>
        <Text style={styles.bulletText}>More dynamic, efficient and innovative than ever: the fifth-generation BMW eDrive technology installed in the BMW iX3. In combination with the newly developed high-voltage battery and Adaptive suspension, it allows this SAV to offer an electrifying driving performance and acceleration over every metre.</Text>
        <View style={styles.InVisisbleSpace}></View>
          <Image
                  source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_547,h_308,q_auto,c_fill,f_auto,fl_lossy/auto-titan/e92c24a3f0ec238e219d3ec3c866d39d/he_tho_ng_treo_thi_ch_u_ng_min.jpg' }}
                  style={styles.image1}
                  />

                <Text style={styles.heading}>Adaptive suspension.</Text>
                <Text style={styles.bulletText}>The adaptive suspension makes it possible to adjust the damper characteristics to suit any given driving situation, increasing tyre comfort and driving dynamics. In addition to the standard COMFORT setting for increased driving comfort, the SPORT program offers athletic damper settings.</Text>
         
        </View>
        </View>

        <View style={styles.mainTextCNT}>
        <View style={styles.mainLeftCTN}>
          <Image
                  source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_547,h_308,q_auto,c_fill,f_auto,fl_lossy/auto-titan/e2928f2226627d551d2560f83dd65b3d/bmw_ix3_onepager_mc_driving_dynamics_02.jpg' }}
                  style={styles.image1}
                  />

                <Text style={styles.heading}>Electric drive unit.</Text>
                <Text style={styles.bulletText}>The highly integrated drive unit combines electric motor, transmission and power electronics in an aluminium housing, saving space and weight. The direct, spontaneous implementation of acceleration requests ensures the typical BMW driving pleasure. By managing without rare earths, the electric motor is particularly sustainable.</Text>
         
        </View>
        </View>


        <View style={styles.mainTextCNT}>
        <View style={styles.mainLeftCTN}>
          <Image
                  source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_547,h_308,q_auto,c_fill,f_auto,fl_lossy/auto-titan/4478ee1ba962b84a3f91c2e51648e054/bmw_ix3_onepager_mc_driving_dynamics_03.jpg' }}
                  style={styles.image1}
                  />

                <Text style={styles.heading}>Recuperation system.</Text>
                <Text style={styles.bulletText}>The recuperation system converts the kinetic energy generated during deceleration and braking into electricity and feeds this into the drive's high-voltage battery to increase the range. The adjustability of the recuperation level in four stages enables increased individualisation and a significant gain in comfort.</Text>
         
        </View>
        </View>

        




        


      {/* 4 img */}

      <View style={styles.mainTextCNT}>
             <Text style={styles.headerText}>EXTERIOR HIGHLIGHTS OF THE BMW iX3.</Text>
             <View style={styles.fordIMGCNT1}>
             <View style={styles.InVisisbleSpace}></View>
                        

                      <Image
                        source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_547,h_308,q_auto,c_fill,f_auto,fl_lossy/auto-titan/1e3236a6330e9f51db7512086f623fe7/bmw_ix3_onepager_mc_exterior_01.jpg' }}
                        style={styles.imgInford1}
                        />
                         <Text style={styles.heading}>Front design.</Text>
                         <Text style={styles.bulletText}>The almost completely closed BMW i kidney grille forms the central optical element of the impressive front. Together with the L-shaped arrangement of the air inlets in BMW i Blue, it underlines the all-electric nature of the new BMW iX3. The flat Adaptive LED headlights in the new design give the front of the BMW iX3 a focused look.</Text>
                        

                       <View style={styles.InVisisbleSpace}></View>


                     
                       <Image
                        source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_547,h_308,q_auto,c_fill,f_auto,fl_lossy/auto-titan/1a269d0053e83a2d93758ace76c479c0/bmw_ix3_onepager_mc_exterior_02.jpg' }}
                        style={styles.imgInford1}
                        />
                        <Text style={styles.heading}>Side view.</Text>
                         <Text style={styles.bulletText}>The generously proportioned contours around the wheel housings self-assuredly showcase the 20" M Aerodynamic 890 M style wheels in Jet Black with aluminium accents. The Air Breather in BMW M design on the wing behind the front wheel optimises the airflow.</Text>
                       <View style={styles.InVisisbleSpace}></View>


        
                       <Image
                        source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_547,h_308,q_auto,c_fill,f_auto,fl_lossy/auto-titan/c6cee4916d3398735b99dd9c2c2d499f/bmw_ix3_onepager_mc_exterior_03.jpg' }}
                        style={styles.imgInford1}
                        />
                        <Text style={styles.heading}>Rear design.</Text>
                        <Text style={styles.bulletText}>In combination with the vertical Air Breather, new LED rear lights with three-dimensional cover glass, pincer graphic and horizontal indicators ensure an appearance with maximum focus. Diffusers in Blue complete the tail above the road. The trim positioned in between has a high-quality appearance in Frozen Grey.</Text>
                       <View style={styles.InVisisbleSpace}></View>



             </View>
        </View>





      {/* 4 img */}

      <View style={styles.mainTextCNT}>
             <Text style={styles.headerText}>INTERIOR HIGHLIGHTS OF THE BMW iX3.</Text>
             <View style={styles.fordIMGCNT1}>

                        <Text style={styles.heading}>Cockpit.</Text>
                      <Image
                        source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_835,h_380,q_auto,c_fill,f_auto,fl_lossy/auto-titan/3ef517c3fdb4ae84b8fd548a160c24f6/bmw_ix3_onepager_mc_interior_01.jpg' }}
                        style={styles.imgInford1}
                        />
                       <View style={styles.InVisisbleSpace}></View>


                        <Text style={styles.heading}>Panorama glass roof..</Text>
                      <Image
                        source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_835,h_380,q_auto,c_fill,f_auto,fl_lossy/auto-titan/7e1c16ea8db35dac4e7a5c90425238a5/di21_000020846.jpg' }}
                        style={styles.imgInford1}
                        />
                       <View style={styles.InVisisbleSpace}></View>

                       
                       <Text style={styles.heading}>Sport seats..</Text>
                      <Image
                        source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_835,h_380,q_auto,c_fill,f_auto,fl_lossy/auto-titan/9f3d751a9da2f9e9bed0000bad53f876/di21_000020838.jpg' }}
                        style={styles.imgInford1}
                        />
                       <View style={styles.InVisisbleSpace}></View>


                       
                        <Text style={styles.heading}>Cockpit.</Text>
                      <Image
                        source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_835,h_380,q_auto,c_fill,f_auto,fl_lossy/auto-titan/3ef517c3fdb4ae84b8fd548a160c24f6/bmw_ix3_onepager_mc_interior_01.jpg' }}
                        style={styles.imgInford1}
                        />
                       <View style={styles.InVisisbleSpace}></View>


             </View>
        </View>

        <View style={styles.InVisisbleSpace}></View>





        {/* center content */}

        
        <View style={styles.mainTextCNT}>
        <View style={styles.mainLeftCTN}>
            <Text style={styles.headerText}>BMW FINANCIAL SERVICES FOR THE BMW iX3..</Text>
          <Text style={styles.bulletText}>Get there quickly and flexibly with tailor-made financial products from BMW Financial Services. Whether financing or leasing - each of our offers is individually tailored to your needs and wishes. Find out more about attractive financing solutions or the appropriate leasing offer for your new BMW iX3.</Text>
          <Image
                  source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_840,h_473,q_auto,c_fill,f_auto,fl_lossy/auto-titan/db513d5b96599f54d3911b61d7dca6fb/bmw_ix3_onepager_ms_financial_services.jpg' }}
                  style={styles.image1}
                  />  
        </View>
        </View>






    




<View style={styles.mainTextCNT}>
<View style={styles.mainLeftCTN}>
  <Text style={styles.headerText}>DISCOVER THE BMW iX3 RANGES.</Text>
  <Text style={styles.heading}>Explore the long-distance range of the BMW iX3! Use the setting options and you see how surprisingly far you can go, if you take just a few factors into account.</Text>
          <Image
                  source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_840,h_560,q_auto,c_fill,f_auto,fl_lossy/auto-titan/8f711b54477742c94ff8d7c9b5623af8/bmw_ix3_onepager_model_brief_tech_data.jpg' }}
                  style={styles.image1}
                  />    

                <View style={styles.powDetailsTextCtn}>
                    <View style={styles.powTextItem}>
                        <Text style={styles.label}>Engine power in kW (hp) at 1/min:</Text>
                        <Text style={styles.value}>210 (286)</Text>
                    </View>
                    <View style={styles.powTextItem}>
                        <Text style={styles.label}>Maximum torque in Nm:</Text>
                        <Text style={styles.value}>400</Text>
                    </View>
                    <View style={styles.powTextItem}>
                        <Text style={styles.label}>Acceleration 0–100 km/h in s:</Text>
                        <Text style={styles.value}>6.8</Text>
                    </View>
                    <View style={styles.powTextItem}>
                        <Text style={styles.label}>Electric range in km (WLTP):</Text>
                        <Text style={styles.value}>up to 461*</Text>
                    </View>
                    <View style={styles.powTextItem}>
                        <Text style={styles.label}>Maximum charging capacity:</Text>
                        <Text style={styles.value}>7.5 hour
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
