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
import { styles } from './styles';

type NewsItemProps = {
  item: NewsType;
  onPress?: () => void;
};

function NewsItem({item, onPress}: NewsItemProps) {
  const {navigate} = useNavigationHooks<MainAppStackTypes>();

  return (
    <Card
      onPress={onPress}
      style={styles.card}>
      <Image style={styles.image} source={{uri: item.urlToImage}} />
      <Text
        numberOfLines={2}
        fontSize="FS13"
        fontFamily="BOLD"
        color="GRAY_474C5C"
        style={{width: getWidth(250), textAlign: 'center'}}>
        {item.title}
      </Text>
    </Card>
  );
}

export default memo(NewsItem);
