import { StyleSheet } from 'react-native';
import sizes from '../sizes';

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
    alignItems: 'center',
  },

  scrollContainer: {
    flex: 1,
  },

  imageContainer: {
    height: sizes.PROFILE_IMG_MAX_HEIGHT,
    width: sizes.PROFILE_IMG_MAX_HEIGHT,
    borderRadius: sizes.PROFILE_IMG_MAX_HEIGHT/2,
    borderColor: 'white',
    borderWidth: 3,
    overflow: 'hidden',
    marginTop: sizes.HEADER_MAX_HEIGHT - (sizes.PROFILE_IMG_MAX_HEIGHT/2),
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
    color: 'black',
  },

  profileNameLittleContainer: {
    position: 'absolute',
  },

  profileNameLittle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },

  mockView: {
    height: 600,
  },

});

export default styles;