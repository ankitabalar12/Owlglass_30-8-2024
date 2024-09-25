
import { styles } from './styles';
import {
    React,
    useState,useEffect,
    Image,
    ScrollView, Text, useRef,Swiper,
    TouchableOpacity, View, StatusBar, SafeAreaView,String,
     Redbuttons, images, AsyncStorage
} from '../import'


export const Onboard = ({ navigation }) => {
  const swiperRef = useRef(null);
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
    }
  };

  useEffect(() => {
    navigation.addListener('focus', async () => {
      const result = await AsyncStorage.getItem('owlglasslogin')
      const screenData = JSON.parse(result)
      console.log('screenData', screenData)
      if (screenData) {
        global.name = screenData.name
        global.email =  screenData.email
        
        navigation.navigate('Home')
      }
    })
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
      <StatusBar animated={true} backgroundColor="#ffff" />
      <View style={styles.contain}>
        <View style={styles.container}>
          <Swiper
            ref={swiperRef}
            spaceBetween={0}
            showsPagination={false}
            slidesPerView={1}
          // controlsProps={{
          //   prevPos: false,
          //   nextPos: false,
          //   dotsWrapperStyle: { width: '100%' },
          //   dotProps: { width: 28 }
          // }}
          // activeDotStyle={{ backgroundColor: 'red', marginTop: '-120%' }}
          // dotStyle={{ marginTop: '-120%' }}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ height: 25 }}></View>
              <Image style={styles.logos} source={images.barcimg}></Image>
              <Text style={styles.header}>{String.Allyourfavourites}</Text>
              <Text style={styles.headertwo}>{String.onbord}</Text>
              <View style={{ height: 15 }}></View>
              <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <View style={{ width: 10, height: 10, backgroundColor: 'red', borderRadius: 50, alignSelf: 'center' }}></View>
                <View style={{ width: 10, height: 10, backgroundColor: '#FFB9BD', borderRadius: 50, alignSelf: 'center', marginHorizontal: 8 }}></View>
              </View>
              <View style={{ height: 70 }}></View>

              <Redbuttons
                title={String.Next}
                onPress={goToNextSlide} />
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.headertwo}>{String.Skip}</Text>
              </TouchableOpacity>
              <View style={{ height: 20 }}></View>

            </ScrollView>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                <View style={{ height: 25 }}></View>
                <Image style={styles.logos} source={images.bartwo}></Image>
                <Text style={styles.header}>{String.Allyourfavourites}</Text>
                <Text style={styles.headertwo}>{String.onbordtwo}</Text>
                <View style={{ height: 15 }}></View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                  <View style={{ width: 10, height: 10, backgroundColor: '#FFB9BD', borderRadius: 50, alignSelf: 'center', marginHorizontal: 8 }}></View>
                  <View style={{ width: 10, height: 10, backgroundColor: 'red', borderRadius: 50, alignSelf: 'center' }}></View>
                </View>
                <View style={{ height: 70 }}></View>
                <Redbuttons
                  title={String.Getstarted}
                  onPress={() => navigation.navigate('Login')} />
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.headertwo}>{String.Skip}</Text>
                </TouchableOpacity>
              </View>
              <View style={{ height: 20 }}></View>
            </ScrollView>
          </Swiper>
        </View>
      </View>

    </SafeAreaView>
  );
}
