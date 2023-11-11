import moment from 'moment';
import React, {memo, useEffect, useState} from 'react';
import {NewsType} from '../../../@types';
import {Card, Image, Text, ViewRow} from '../../../components';
import {MainAppStackTypes} from '../../../navigation/navigation-types';
import {useNavigationHooks} from '../../../hooks/navigation-hooks';

import {useSelector} from 'react-redux/es/hooks/useSelector';
import {getHeight, getWidth, scale} from '../../../styles/dimensions';
import {getNewsAction} from '../../../redux/actions/NewsAction';
import {StyleSheet, View} from 'react-native';
import {Colors, Spacing} from '../../../styles';
import {styles} from './styles';

type NewsItemProps = {
  item: NewsType;
  onPress?: () => void;
};

function NewsItem({item, onPress}: NewsItemProps) {
  const {navigate} = useNavigationHooks<MainAppStackTypes>();

  return (
    <Card onPress={onPress} style={styles.card}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{uri: item.urlToImage}}
      />
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: 'white',
          justifyContent: 'space-between',
          height:getHeight(100),
          width:getWidth(220),
          marginLeft:Spacing.S8,
        }}>
        <Text
          numberOfLines={2}
          fontSize="FS13"
          fontFamily="BOLD"
          color="GRAY_474C5C"
          style={{width: getWidth(220), textAlign: 'left'}}>
          {item.title}
        </Text>
        <Text fontSize="FS11" style={styles.publishedAt}>
          {moment(item.publishedAt).fromNow()}
        </Text>
      </View>
    </Card>
  );
}

export default memo(NewsItem);
