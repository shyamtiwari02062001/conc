import React,{useState} from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Image,
	ImageBackground
} from "react-native";
import Close from "../../components/close";
import PropTypes from "prop-types";
import MemorizePic from "../../constants/MemorizePic";
import Buttons from "./Buttons";
import GamePointContext from "../../context/GamePoints";
import GamePoint from "../../components/gamepoints";
const MemorizePicturePage=(props)=>{
	const {gamePoint,setGamePoint}=React.useContext(GamePointContext);
	const [playing,setPlaying]=useState(false);
	const [count,setCount]=useState(0);
	const [countall,setCountall]=useState(0);
	// eslint-disable-next-line prefer-const
	let [gameId,setGameId]=useState(0);
	const [success,setSuccess]=useState(false);
	const check=(val,countAll)=>{
		console.log(val," input ",countAll);
		setCountall(countAll+countall);
		setCount(val+count);
		console.log(count," ",countall);
	};
	const match=()=>{
		setPlaying(true);
		if(count||countall!=0){
			if(count===countall&&count===MemorizePic[gameId][0]){
				setSuccess(true);
				setGamePoint(gamePoint+10);
				setTimeout(()=>{
					setGameId(++gameId);
					setPlaying(false);
					setCount(0);
					setCountall(0);
					setSuccess(false);
				},3000);
			}
			else{
				setSuccess("wrong");
				setTimeout(()=>{
					setPlaying(false);
					setCount(0);
					setCountall(0);
					setSuccess(false);
				},5750);
			}
		}
	};
	return(
		<View style={styles.container}>
			{(success===false)&&
			<ImageBackground
				source={require("../../assets/memorizeImages/memorizeback.png")}
				style={styles.image}
			>
				{(playing==false)&&<View style={{flexDirection:"row"}}>
					{MemorizePic[gameId].map((data,index)=>
						(index>=1   && index<=MemorizePic[gameId][0]
						)&&<View key={index} style={styles.findImage}>
							<Image
								source={data}
								style={{height:80,width:80}}
							/>
						</View>
					)}
				</View>
				}
				{(MemorizePic[gameId].length<=16)?
					<View style={{marginBottom:40}}>
						{(playing==true)&&<View style={{flexDirection:"row"}}>
							{MemorizePic[gameId].map((data,index)=>
								(index>MemorizePic[gameId][0]&&
							index<=4+MemorizePic[gameId][0]
								)&&<View key={index} style={{paddingBottom:10}}>
									<Buttons id={gameId}
										source={data}
										fun={
											(val,countAll)=>{
												check(val,countAll);
											}}
									/>
								</View>
							)}
						</View>}
						{(playing==true)&&<View style={{flexDirection:"row"}}>
							{MemorizePic[gameId].map((data,index)=>
								(index>4+MemorizePic[gameId][0]&&
							index<=8+MemorizePic[gameId][0]
								)&&<View key={index} style={{paddingBottom:10}}>
									<Buttons id={gameId}
										source={data}
										fun={
											(val,countAll)=>{
												check(val,countAll);
											}}
									/>
								</View>
							)}
						</View>}
						{(playing==true)&&<View style={{flexDirection:"row"}}>
							{MemorizePic[gameId].map((data,index)=>
								(index>8+MemorizePic[gameId][0]&&
							index<=12+MemorizePic[gameId][0]
								)&&<View key={index} style={{paddingtop:10}}>
									<Buttons id={gameId}
										source={data}
										fun={
											(val,countAll)=>{
												check(val,countAll);
											}}
									/>
								</View>
							)}
						</View>}
					</View>:

					<View style={{marginBottom:40}}>
						{(playing==true)&&<View style={{flexDirection:"row"}}>
							{MemorizePic[gameId].map((data,index)=>
								(index>MemorizePic[gameId][0]&&
		index<=6+MemorizePic[gameId][0]
								)&&<View key={index} style={{paddingBottom:10}}>
									<Buttons id={gameId}
										source={data}
										fun={
											(val,countAll)=>{
												check(val,countAll);
											}}
									/>
								</View>
							)}
						</View>}
						{(playing==true)&&<View style={{flexDirection:"row"}}>
							{MemorizePic[gameId].map((data,index)=>
								(index>6+MemorizePic[gameId][0]&&
		index<=12+MemorizePic[gameId][0]
								)&&<View key={index} style={{paddingBottom:10}}>
									<Buttons id={gameId}
										source={data}
										fun={
											(val,countAll)=>{
												check(val,countAll);
											}
										}
									/>
								</View>
							)}
						</View>}
						{(playing==true)&&<View style={{flexDirection:"row"}}>
							{MemorizePic[gameId].map((data,index)=>
								(index>12+MemorizePic[gameId][0]&&
		index<=18+MemorizePic[gameId][0]
								)&&<View key={index} style={{paddingtop:10}}>
									<Buttons id={gameId}
										source={data}
										fun={
											(val,countAll)=>{
												check(val,countAll);
											}}
									/>
								</View>
							)}
						</View>}
					</View>
				}
				<GamePoint/>
				<Close fun={()=>{props.navigation.navigate("Dashboard");}}/>
				<View style={styles.bottomTextView}>
					{(playing!==true)?
						<Text style={styles.text}>
                    Look at the pictures and memorize them
						</Text>
						:
						<Text style={styles.text}>
                        Now pick only the pictures
                        you have just seen on the screen
						</Text>}
				</View>
				<View style={styles.ok}>
					<TouchableOpacity onPress={()=>{match();}}>
						<Image
							source={
								require("../../assets/memorizeImages/ok.png")
							}
							style={styles.img}
						/>
					</TouchableOpacity>
				</View>
				{(playing===true)&&<View style={styles.prev}>
					<TouchableOpacity onPress={()=>{setPlaying(false);}}>
						<Image
							source={
								require("../../assets/memorizeImages/prev.png")
							}
							style={styles.img}
						/>
					</TouchableOpacity>
				</View>
				}
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
			{(success==="wrong")&&
			<View style={{
				zIndex:3,
				elevation:3,
				flex:1,
				width:"100%",
				height:"100%",
				justifyContent:"center",
				alignItems:"center"
			}}>
				<Image
					source={require("../../assets/memorizeImages/failure.gif")}
					style={{height:"100%",width:"100%"}}
				/>
			</View>
			}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		flexDirection:"row"
	},
	image:{
		flex:1,
		justifyContent:"center",
		alignItems:"center"
	},
	bottomTextView:{
		position:"absolute",
		bottom:10,
		borderWidth:2,
		borderRadius:50,
		padding:10,
		width:"80%",
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
	ok:{
		position:"absolute",
		bottom:10,
		right:10
	},
	img:{
		height:50,
		width:50
	},
	prev:{
		position:"absolute",
		bottom:10,
		left:10
	},
	findImage:{
		margin:5,
		backgroundColor:"teal",
		borderRadius:50,
		padding:15
	}
});
MemorizePicturePage.propTypes={
	fun:PropTypes.any,
	navigation:PropTypes.any,
};
export default MemorizePicturePage;