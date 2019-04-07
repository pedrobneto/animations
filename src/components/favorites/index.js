import React, {Component} from "react";
import { 
  View,
  ScrollView,
  Image,
  Text,
  Animated,
} from "react-native";

import styles from './styles';

IMAGE_URI = 'https://www.morpht.com/sites/morpht/files/styles/landscape/public/dalibor-matura_1.jpg?itok=gxCAhwAV'
HEADER_MAX_HEIGHT = 70;
HEADER_MIN_HEIGHT = 30;
PROFILE_IMG_MAX_HEIGHT = 80;
PROFILE_IMG_MIN_HEIGHT = 40;


class Favorites extends Component {

  constructor(props) {
    super(props)

    this.state = {
      scrollY: new Animated.Value(0),

    }
  }

  render() {

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'  
    })
    

    return(
      <View style={styles.container}>
        <Animated.View style={[styles.headerContainer, { height: headerHeight }]}>
          
        </Animated.View>

        <ScrollView 
          style={styles.scrollContainer}
          onScroll= {Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}
        >
          <View style= {styles.imageContainer}>
            <Image style={styles.image} source={{ uri: IMAGE_URI }}/>
          </View>

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