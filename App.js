import React from "react";

import HomeScreen from "./screens/Home";
import PopularScreen from "./screens/Popular";
import RecommendedScreen from "./screens/Recommendation";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import { RFValue } from "react-native-responsive-fontsize";


export default function App() {
  return <HomeScreen />;
}

const AppTopNavigation = createMaterialTopTabNavigator({
  RecommendedMovies : {
    screen : RecommendedScreen ,
    navigationOptions: {
      tabBarLabel: "Recommended",
      tabBarOptions: {
        tabStyle: { backgroundColor: "#fff" },
        labelStyle: { color: "#000" },
        indicatorStyle: { backgroundColor: "#000" }
      }
    }
  },

  PopularMovies : {
    screen : PopularScreen ,
    navigationOptions: {
      tabBarLabel: "Popular",
      tabBarOptions: {
        tabStyle: { backgroundColor: "#fff" },
        labelStyle: { color: "#000" },
        indicatorStyle: { backgroundColor: "#000" }
      }
    }
  }
})

const AppStackNavigator = createStackNavigator({
  Home : {
    screen : HomeScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  AppTopNav: {
    screen: AppTopNavigation,
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: "#fff",
      headerTitle: "Recommended Movies",
      headerStyle: {
        backgroundColor: "#d500f9"
      },
      headerTitleStyle: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: RFValue(18)
      }
    }
  }
},
{
  initialRouteName: "Home"
}
);

const AppContainer = createAppContainer(AppStackNavigator);
