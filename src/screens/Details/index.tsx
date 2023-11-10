import React, {FC, useEffect} from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {
  AnimatedFlatList,
  Button,
  Header,
  Image,
  Line,
  Text,
} from '../../components';
import {useNavigationHooks} from '../../hooks/navigation-hooks';
import {MainAppStackTypes} from '../../navigation/navigation-types';

import NewsItem from '../../components/organisms/NewsItem/NewsItem';
import {NewsType} from '../../@types';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getNewsAction} from '../../redux/actions/NewsAction';
import {useDispatch} from 'react-redux';
import {getHeight, getWidth, scale} from '../../styles/dimensions';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Colors, Spacing} from '../../styles';
import moment from 'moment';
import { styles } from './styles';

const Details: FC = () => {
  const {
    params: {newsDetails},
  } = useRoute<RouteProp<MainAppStackTypes, 'Details'>>();
  return (
    <View style={styles.main}>
      <Header backTitle title={'Details'} />
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{uri: newsDetails.urlToImage}}
        />
        <Text fontSize="FS18" fontFamily="BOLD">
          {newsDetails.title}
        </Text>

        <Text numberOfLines={5} style={styles.description} fontSize="FS14">
          {newsDetails.description}
        </Text>
        <Text fontSize="FS14" style={styles.author}>
          {newsDetails.author}
        </Text>
        <Text fontSize="FS11" style={styles.publishedAt}>
          {moment(newsDetails.publishedAt).fromNow()}
        </Text>
      </View>
    </View>
  );
};


export default Details;
