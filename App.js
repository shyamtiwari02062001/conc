import React,{useEffect} from "react";
import { LogBox } from "react-native";
import{ NavigationContainer }	from	"@react-navigation/native";
import{ createStackNavigator }	from	"@react-navigation/stack";
import * as ScreenOrientation from "expo-screen-orientation";
import SplashScreen	from	"./screens/splashscreen/splashscreen";
import DashboardScreen from "./screens/Dashboard/dashboardscreen";
import TurnAround from "./screens/TurnAround/TurnAround";
import Reaction from "./screens/Reaction/ReactionPage";
import FindAllObject from "./screens/FindAllObjects/FindAllSimilarImage";
import Memorize from "./screens/MemorizePicture/MemorizePicture";
import CountGame from "./screens/Count/CountPage";
import FindNumbers from "./screens/FindNumbers/FindNumbersPage";
import { GamePointProvider } from "./context/GamePoints";
import { Audio } from "expo-av";
const Stack = createStackNavigator();

export default function App() {
	LogBox.ignoreAllLogs();
	// eslint-disable-next-line func-style
	async function playSound() {
		const { sound } = await Audio.Sound.createAsync(
			require("./assets/Hello.mp3")
		);
		await sound.playAsync();
	}
	useEffect(()=>{
		ScreenOrientation.lockAsync(
			ScreenOrientation.OrientationLock.LANDSCAPE
		);
		setTimeout(()=>{
			call();
		},1000);
	},[1]);
	const call=()=>{
		playSound();
		setTimeout(()=>{
			call();
		},24000);
	};
	return (
		<GamePointProvider>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{headerShown: false,}}
					initialRouteName="Splash"
				>
					<Stack.Screen name="Splash"	component={SplashScreen}/>
					<Stack.Screen name="Dashboard" component={DashboardScreen}/>
					<Stack.Screen name="TurnAround" component={TurnAround}/>
					<Stack.Screen name="Reaction" component={Reaction}/>
					<Stack.Screen
						name="FindAllObject"
						component={FindAllObject}
					/>
					<Stack.Screen name="Memorize" component={Memorize}/>
					<Stack.Screen name="Count" component={CountGame}/>
					<Stack.Screen name="FindNumbers" component={FindNumbers}/>
				</Stack.Navigator>
			</NavigationContainer>
		</GamePointProvider>
	);
}
