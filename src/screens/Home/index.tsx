import React, {FC, useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import {Header, Text} from '../../components';
import {useNavigationHooks} from '../../hooks/navigation-hooks';
import {MainAppStackTypes} from '../../navigation/navigation-types';
import {styles} from './styles';
import NewsItem from '../../components/organisms/NewsItem/NewsItem';
import {NewsType} from '../../@types';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getNewsAction} from '../../redux/actions/NewsAction';
import {useDispatch} from 'react-redux';
import {getHeight, scale} from '../../styles/dimensions';
import {Colors} from '../../styles';

const Home: FC = () => {
  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  const newsData = useAppSelector(state => state.news.data);
  const loading = useAppSelector(state => state.news.loading);
  const error = useAppSelector(state => state.news.error);
  const [refreshing, setRefreshing] = useState(false);
  const [searchedData, setSearchedData] = useState('');
  const filteredNews = newsData.filter(
    news =>
      news.title.toLowerCase().includes(searchedData.toLowerCase()) ||
      news.description.toLowerCase().includes(searchedData.toLowerCase()),
  );
  console.log('author', newsData);
  const dispatch = useDispatch();
  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getNewsAction());
    setRefreshing(false);
  };

  useEffect(() => {
    dispatch(getNewsAction());
  }, []);

  const RenderNewsItem: ListRenderItem<NewsType> = ({item, index}) => (
    <NewsItem
      item={item}
      onPress={() => {
        navigate('Details', {newsDetails: item});
      }}
    />
  );

  return (
    <View style={styles.rootScreen}>
      <Header
        title="News"
        search
        value={searchedData}
        onChangeText={text => setSearchedData(text)}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#432E9D" />
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text fontSize="FS18">Error: {error}</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{
            backgroundColor: 'white',
          }}
          data={filteredNews}
          renderItem={RenderNewsItem}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['blue']}
              progressBackgroundColor="white"
            />
          }
        />
      )}
    </View>
  );
};

export default Home;
