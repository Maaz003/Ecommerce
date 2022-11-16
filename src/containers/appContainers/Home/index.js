import React from 'react';
import {StyleSheet, View} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';

function Home(props) {
  return (
    <View style={styles.contentView}>
      <Text
        variant={'h3'}
        font={'Sequel551'}
        color={R.color.blackShade4}
        align={'left'}
        transform={'none'}>
        To-do
      </Text>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  contentView: {
    marginTop: R.unit.scale(32),
    paddingHorizontal: R.unit.scale(16),
    width: '100%',
    justifyContent: 'center',
  },
});
