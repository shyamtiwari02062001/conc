import React,{useState,useEffect} from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
	ImageBackground,
} from "react-native";
import Reaction from "../../constants/Reaction";
import Close from "../../components/close";
import PropTypes from "prop-types";
import GamePointContext from "../../context/GamePoints";
import GamePoint from "../../components/gamepoints";
const ReactionPage = (props) => {
	const {gamePoint,setGamePoint}=React.useContext(GamePointContext);
	// eslint-disable-next-line prefer-const
	let [gameid,setGameid]=useState(0);
	const [sideImage,setSideImage]=useState(Reaction[gameid][10]);
	const [success,setSuccess]=useState(false);
	// eslint-disable-next-line prefer-const
	let [times,setTimes]=useState(0);
	// eslint-disable-next-line prefer-const
	let [value,setValue]=useState(0);
	// eslint-disable-next-line prefer-const
	let [count,setCount]=useState(0);
	const lastValue=Reaction[gameid][11];
	const [random,setRandom]=useState(2);
	// eslint-disable-next-line prefer-const
	useEffect(()=>{
		changeImage();
	});
	const changeImage=()=>{
		if(count!=lastValue){
			for(let i=0;i<Reaction[gameid].length-2;i++){
				if(i==value){
					setTimeout(()=>{
						setValue(++value);
					},2000);
				}
			}
		}
	};
	if(value==10&&count!=lastValue){
		setTimeout(()=>{
			setValue(0);
			changeImage();
		},1000);
	}
	const check=()=>{
		setTimes(++times);
		if(times==random){
			setSideImage(Reaction[gameid][random]);
			const rand=Math.floor(Math.random() * 10)+1;
			setRandom(rand);
			setTimes(0);
		}
		if(sideImage===Reaction[gameid][value]&&count!=lastValue){
			setCount(++count);
		}
		if(sideImage!==Reaction[gameid][value]&&count!=0){
			setCount(--count);
		}
		if(count==lastValue){
			setSuccess(true);
			setGamePoint(gamePoint+10);
			setGameid(++gameid);
			setValue(0);
			setCount(0);
			setTimes(0);
			setTimeout(()=>{
				setSuccess(false);
			},3000);
		}
	};
	return(
		<View style={{flex:1}}>
			{(success==false)&&	<ImageBackground
				source={require("../../assets/reactionImage/reactionBack.png")}
				style={styles.container}
			>
				<Close fun={()=>{props.navigation.navigate("Dashboard");}}/>
				<GamePoint/>
				<View>
					<Text style={styles.text}>{count}/{lastValue}</Text>
				</View>
				<View style={styles.sideImage}>
					<Image
						source={sideImage}
						style={{height:80,width:80,borderRadius:15}}
					/>
				</View>
				<View style={{marginTop:40,marginBottom:"15%"}}>
					<Image
						source={Reaction[gameid][value]}
						style={{height:150,width:150}}
					/>
				</View>
				<View style={{position:"absolute",right:"20%",top:"40%"}}>
					<TouchableOpacity onPress={()=>{check();}}>
						<Image
							source={require("../../assets/button.png")}
							style={styles.img}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.textView}>
					<Text style={styles.text}>
					When the picture in
					center is same as in
					the left then press the button.
					</Text>
				</View>
			</ImageBackground>}
			{(success==true)&&
			<View style={
				{flex:1,width:"100%",height:"100%"}}
			>
				<Image
					source={require("../../assets/success.gif")}
					style={{height:"100%",width:"100%"}}
				/>
			</View>
			}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems:"center",
		justifyContent:"space-evenly",
		flexDirection:"column",
		width:"100%",
	},
	img:{
		height:60,
		width:60
	},
	textView:{
		borderWidth:3,
		borderRadius:50,
		width:"90%",
		padding:10,
		position:"absolute",
		bottom: 10,
		backgroundColor:"white"
	},
	text:{
		textShadowColor: "purple",
		textShadowOffset: {width: -1, height: 0},
		textShadowRadius: 1,
		textAlign:"center",
		fontSize:20,
		color:"teal"
	},
	sideImage:{
		backgroundColor:"white",
		position:"absolute",
		left:"19.1%",
		top:"34.9%",
		borderWidth:2,
		borderRadius:80,
		padding:10,
	}
});
ReactionPage.propTypes={
	fun:PropTypes.any,
	navigation:PropTypes.any
};
export default ReactionPage;