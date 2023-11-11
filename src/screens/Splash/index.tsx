import React, {useEffect, useRef} from 'react';
import {View, Animated, Easing} from 'react-native';
import {useNavigationHooks} from '../../hooks/navigation-hooks';
import {MainAppStackTypes} from '../../navigation/navigation-types';
import {styles} from './styles';
import {Image, Text} from '../../components';
import {Images} from '../../assets/images';
const Splash = () => {
  const imageSlideAnim = useRef(new Animated.Value(-100)).current;
  const textOpacityAnim = useRef(new Animated.Value(0)).current;
  const {navigate} = useNavigationHooks<MainAppStackTypes>();

  useEffect(() => {
    const animationDuration = 2000;

    Animated.timing(imageSlideAnim, {
      toValue: 0,
      duration: animationDuration,
      easing: Easing.out(Easing.exp),
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        Animated.timing(textOpacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start(() => {
          navigate('Home');
        });
      }
    });
  }, []);

  return (
    <View style={styles.rootScreen}>
      <View style={styles.content}>
        <Animated.View
          style={{
            opacity: textOpacityAnim,
          }}>
          <Text fontSize="FS18" fontFamily="BOLD">
            Newsfeed
          </Text>
        </Animated.View>

        <Animated.View
          style={{
            transform: [{translateX: imageSlideAnim}],
          }}>
          <Image
            source={Images.dynamic}
            style={styles.image}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default Splash;
