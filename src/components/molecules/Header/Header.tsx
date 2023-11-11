import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Svgs} from '../../../assets';
import {Colors} from '../../../styles';
import {Button, Input, Text, ViewRow} from '../../atoms';
import {styles} from './styles';

type HeaderProps = {
  title: string;
  search?: boolean;
  backTitle?: boolean;
  value?: any;

  onChangeText?: (item: any) => void;
};
const Header: React.FC<HeaderProps> = ({
  title,
  backTitle,
  search,
  value,
  onChangeText,
}) => {
  const navigation = useNavigation();
  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(!isSearch);
  };


  return (
    <>
      <ViewRow style={styles.container}>
        {backTitle ? (
          <Button style={styles.row} onPress={() => navigation.goBack()}>
            <Svgs name="arrow" color={Colors.PRIMARY} />
            <Text style={styles.backText} fontSize="FS18">
              Back
            </Text>
          </Button>
        ) : (
          <Button
            iconContainerStyle={styles.iconContainer}
            iconName="menu"
            iconStyle={styles.iconStyle}
            onPress={()=>{}}
          />
        )}

        {title ? (
          <Text
            fontSize="FS18"
            fontFamily="REGULAR"
            style={search ? undefined : styles.title}>
            {title}
          </Text>
        ) : null}
        {search && (
          <Button
            iconContainerStyle={styles.iconContainer}
            iconName={isSearch ? 'close' : 'search'}
            iconStyle={styles.iconStyle}
            onPress={() => handleSearch()}
          />
        )}
      </ViewRow>

      {isSearch && (
        <Input
          style={styles.input}
          placeholder="Search ..."
          value={value}
          onChangeText={onChangeText}
        />
      )}
    </>
  );
};

export default Header;
