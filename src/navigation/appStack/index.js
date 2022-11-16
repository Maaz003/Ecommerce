import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import HomeScreen from '@containers/appContainers/Home';

const CoachStack = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const CustomTabBar = props => {
    return (
      <View>
        {Platform.OS === 'ios' ? (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 0.08,
              backgroundColor: 'transparent',
            }}>
            <BottomTabBar {...props.props} />
          </View>
        ) : (
          <View>
            <BottomTabBar {...props.props} />
          </View>
        )}
      </View>
    );
  };

  const CoachTabNavigator = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            headerShown: false,
            tabBarVisible: true,
          }}
          tabBar={props => <CustomTabBar props={props} />}
          tabBarOptions={{
            showLabel: false,
            activeTintColor: 'white',
            inactiveTintColor: '#d9d9d9',
            paddingBottom: 0,

            style: {
              backgroundColor: R.color.white,
              height: 70,
              paddingVertical: 0,
              alignItems: 'center',
              paddingBottom: 0,
              marginBottom: 0,
            },
          }}>
          <Tab.Screen
            name="Home"
            component={HomeStackNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.tab}>
                  <Text
                    variant={'body2'}
                    font={focused ? 'InterSemiBold' : 'interRegular'}
                    gutterTop={4}
                    color={focused ? R.color.red : R.color.gray}
                    align={'center'}
                    transform={'none'}>
                    To do
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="ScheduleTab"
            component={ScheduleStackNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.tab}>
                  <Text
                    variant={'body2'}
                    font={focused ? 'InterSemiBold' : 'interRegular'}
                    gutterTop={4}
                    color={focused ? R.color.red : R.color.gray}
                    align={'center'}
                    style={{width: '100%'}}
                    transform={'none'}>
                    Schedule
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={NotificationsStackNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.tab}>
                  <Text
                    variant={'body2'}
                    font={focused ? 'InterSemiBold' : 'interRegular'}
                    gutterTop={3}
                    color={focused ? R.color.red : R.color.gray}
                    align={'center'}
                    transform={'none'}>
                    Notifications
                  </Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

  //********COACH STACKS *********//
  const HomeStackNavigator = props => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'ToDo'}>
        <Stack.Screen name="ToDo" component={HomeScreen} />
      </Stack.Navigator>
    );
  };

  const ScheduleStackNavigator = props => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'ToDo'}>
        <Stack.Screen name="ToDo" component={HomeScreen} />
      </Stack.Navigator>
    );
  };

  const NotificationsStackNavigator = props => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'ToDo'}>
        <Stack.Screen name="ToDo" component={HomeScreen} />
      </Stack.Navigator>
    );
  };

  return <CoachTabNavigator />;
};
export default CoachStack;

const styles = StyleSheet.create({
  dot: {
    backgroundColor: R.color.white,
    marginTop: R.unit.scale(5),
    height: R.unit.scale(5),
    width: R.unit.scale(5),
    borderRadius: R.unit.scale(10),
  },
  svgView: {
    aspectRatio: 1,
    height: R.unit.scale(29),
    // backgroundColor: 'green',
  },
  tab: {
    width: R.unit.width(0.19),
    alignItems: 'center',
  },
});
