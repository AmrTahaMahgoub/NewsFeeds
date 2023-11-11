import React, {FC} from 'react';
import {View} from 'react-native';
import {Header, Image, Text} from '../../components';
import {MainAppStackTypes} from '../../navigation/navigation-types';
import {RouteProp, useRoute} from '@react-navigation/native';
import moment from 'moment';
import {styles} from './styles';

const Details: FC = () => {
  const {
    params: {newsDetails},
  } = useRoute<RouteProp<MainAppStackTypes, 'Details'>>();
  return (
    <View style={styles.main}>
      <Header backTitle title={'Details'} />
      <View style={styles.container}>
      <Text fontSize="FS11" style={styles.publishedAt}>
          {moment(newsDetails.publishedAt).fromNow()}
        </Text>
        <Text numberOfLines={2} fontSize="FS20" fontFamily="BOLD" style={styles.title}>
          {newsDetails.title}
        </Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{uri: newsDetails.urlToImage}}
        />

        <Text numberOfLines={5} style={styles.description} fontSize="FS14" color="GRAY_8D8D8D">
          {newsDetails.description}
        </Text>
        <Text numberOfLines={5} style={styles.description} fontSize="FS14" color="GRAY_8D8D8D">
          {newsDetails.content}
        </Text>
        <Text fontSize="FS14" style={styles.author} color="GRAY_8D8D8D">
          {newsDetails.author}
        </Text>
       
      </View>
    </View>
  );
};

export default Details;
