import { StyleSheet } from 'react-native';

HEADER_MAX_HEIGHT = 120;
HEADER_MAX_HEIGHT = 70;
PROFILE_IMG_MAX_HEIGHT = 80;
PROFILE_IMG_MIN_HEIGHT = 40;

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'lightskyblue',
    height: HEADER_MAX_HEIGHT,
  },

  scrollContainer: {
    flex: 1,
  },

  imageContainer: {
    height: PROFILE_IMG_MAX_HEIGHT,
    width: PROFILE_IMG_MAX_HEIGHT,
    borderRadius: PROFILE_IMG_MAX_HEIGHT/2,
    borderColor: 'white',
    borderWidth: 3,
    overflow: 'hidden',
    marginTop: HEADER_MAX_HEIGHT - (PROFILE_IMG_MAX_HEIGHT/2),
    marginLeft: 10,
  },

  image: {
    flex: 1,
    height: null,
    width: null,
  },

  profileNameContainer: {
    paddingLeft: 10,
  },

  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  mockView: {
    height: 600,
  },

});

export default styles;