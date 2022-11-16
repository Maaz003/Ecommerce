import React from 'react';
import {Image, View} from 'react-native';
import Text from '@components/common/Text';
import R from '@components/utils/R';

function LoginScreen(props) {
  return (
    <View>
      <Text
        variant={'h3'}
        font={'Sequel551'}
        gutterTop={10}
        gutterBottom={R.unit.scale(24)}
        color={R.color.black}
        align={'left'}
        style={{width: '100%'}}
        transform={'none'}>
        Welcome LOGIN SCREEN
      </Text>
    </View>
  );
}
export default LoginScreen;
