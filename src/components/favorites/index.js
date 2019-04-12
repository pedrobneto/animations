import React, {Component} from "react";
import { 
  View,
  ScrollView,
  Image,
  Text,
  Animated,
} from "react-native";

import styles from './styles';
import sizes from '../sizes';

IMAGE_URI = 'https://www.morpht.com/sites/morpht/files/styles/landscape/public/dalibor-matura_1.jpg?itok=gxCAhwAV'


class Favorites extends Component {

  constructor(props) {
    super(props)

    this.state = {
      scrollY: new Animated.Value(0),

    }
  }

  render() {

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0,sizes.HEADER_MAX_HEIGHT-sizes.HEADER_MIN_HEIGHT],
      outputRange: [sizes.HEADER_MAX_HEIGHT, sizes.HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'  
    });
    
    const imageHeight = this.state.scrollY.interpolate({
      inputRange: [0,sizes.HEADER_MAX_HEIGHT-sizes.HEADER_MIN_HEIGHT],
      outputRange: [sizes.PROFILE_IMG_MAX_HEIGHT, sizes.PROFILE_IMG_MIN_HEIGHT],
      extrapolate: 'clamp'  
    });

    const imageWidth = this.state.scrollY.interpolate({
      inputRange: [0,sizes.HEADER_MAX_HEIGHT-sizes.HEADER_MIN_HEIGHT],
      outputRange: [sizes.PROFILE_IMG_MAX_HEIGHT, sizes.PROFILE_IMG_MIN_HEIGHT],
      extrapolate: 'clamp'  
    });

    const profileImageMarginTop = this.state.scrollY.interpolate({
      inputRange: [0,sizes.HEADER_MAX_HEIGHT-sizes.HEADER_MIN_HEIGHT],
      outputRange: [sizes.HEADER_MAX_HEIGHT - (sizes.PROFILE_IMG_MAX_HEIGHT/2), sizes.HEADER_MAX_HEIGHT+5],
      extrapolate: 'clamp'  
    });

    const imageZIndex = this.state.scrollY.interpolate({
      inputRange: [0,sizes.HEADER_MAX_HEIGHT-sizes.HEADER_MIN_HEIGHT],
      outputRange: [0,1],
      extrapolate: 'clamp'  
    });

    const profileNameLittle = this.state.scrollY.interpolate({
      inputRange: [0,sizes.HEADER_MAX_HEIGHT-sizes.HEADER_MIN_HEIGHT,
        (sizes.HEADER_MAX_HEIGHT-sizes.HEADER_MIN_HEIGHT) + sizes.PROFILE_IMG_MIN_HEIGHT + 5,
        (sizes.HEADER_MAX_HEIGHT-sizes.HEADER_MIN_HEIGHT) + sizes.PROFILE_IMG_MIN_HEIGHT+26],
      outputRange: [-20, -20, -20, 0],
      extrapolate: 'clamp'  
    });

    return(
      <View style={styles.container}>
        <Animated.View style={[styles.headerContainer, { height: headerHeight, zIndex: imageZIndex }]}>
          <Animated.View style={[styles.profileNameLittleContainer, {bottom: profileNameLittle,}]}>
            <Text style={styles.profileNameLittle}>
              Pedro Neto
            </Text>
          </Animated.View>
        </Animated.View>

        <ScrollView 
          style={styles.scrollContainer}
          scrollEventThrottle={16}
          onScroll= {Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}
        >
          <Animated.View 
            style= {[styles.imageContainer, {height: imageHeight, 
                    width: imageWidth, marginTop: profileImageMarginTop}]}
          >
            <Image style={styles.image} source={{ uri: IMAGE_URI }}/>
          </Animated.View>

          <View style={styles.profileNameContainer}>
            <Text style= {styles.profileName}>
              Pedro Neto
            </Text>
          </View>

          <View style={styles.mockView}>

          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Favorites;