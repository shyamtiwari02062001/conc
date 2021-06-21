import React from "react";
import {View,Text,Image,StyleSheet} from "react-native";
import GamePointContext from "../context/GamePoints";
const GamePoint=()=>{
	const {gamePoint}=React.useContext(GamePointContext);
	return(
		<View style={styles.container}>
			<Text style={styles.text}>{gamePoint}</Text>
			<Image style={styles.img} source={require("../assets/dollar.png")}/>
		</View>
	);
};
const styles=StyleSheet.create({
	container:{
		flexDirection:"row",
		position:"absolute",
		right:30,
		top:"5%",
		alignItems:"center",
	},
	text:{
		fontSize:20,
		fontWeight:"bold",
		color:"white",
		marginRight:5
	},
	img:{
		height:20,
		width:20
	}
});
export default GamePoint;