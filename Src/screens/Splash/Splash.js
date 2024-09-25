
import {
    React, useEffect, Image, View, StatusBar,
    images, SplashScreen
} from '../import'


export default function Splash({ navigation }) {
    React.useEffect(() => {
        setTimeout(async () => {
            SplashScreen.hide();
            navigation.navigate('Onboard')
        }, 500);
    }, []);

    return (
        <View style={styles.main}>
            <StatusBar backgroundColor='#ffffff' barStyle="dark-content" />
            <Image style={styles.logos} resizeMode='stretch' source={images.Logo}></Image>
        </View>
    )
}
