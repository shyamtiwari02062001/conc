import React,{useState} from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	ImageBackground,
} from "react-native";
import Buttons from "./Buttons";
import FindAllSimilar from "../../constants/FindAllSimilarImages";
import FindAllImagesData from "../../constants/FindAllImagesData";
import Close from "../../components/close";
import PropTypes from "prop-types";
import FindAllSimilarImages from "../../constants/FindAllSimilarImages";
import FindSimilarImagesData from "../../constants/findAllObjectSearchingImage";
import GamePointContext from "../../context/GamePoints";
import GamePoint from "../../components/gamepoints";
const  FindAllObjects=(props)=>{
	const {gamePoint,setGamePoint}=React.useContext(GamePointContext);
	// eslint-disable-next-line prefer-const
	let [gameid,setGameid]=useState(0);
	// eslint-disable-next-line prefer-const
	let [count,setCount]=useState(0);
	const [success,setSuccess]=useState(false);
	const check=(val)=>{
		setCount(count+val);
		console.log(count);
		if(FindAllImagesData[gameid]==count+val){
			setTimeout(()=>{
				setGamePoint(gamePoint+10);
				setSuccess(true);
			},400);
			setTimeout(()=>{
				setCount(0);
				setGameid(++gameid);
				setSuccess(false);
			},3000);
		}
	};
	return (
		<View style={styles.container}>
			{(success===false)&&<ImageBackground style={styles.container}
				source={
					require(
						"../../assets/findallobjectsImages/findAllObectBack.png"
					)}
			>
				<Close fun={()=>{props.navigation.navigate("Dashboard");}}/>
				<GamePoint/>
				<View style={styles.extraImage}>
					<Image
						source={FindSimilarImagesData[gameid]}
						style={{height:60,width:60}}
					/>
				</View>
				{(FindAllSimilarImages[gameid].length<=21)?
					<View style={{alignItems:"center"}}>
						<View style={{flexDirection:"row"}}>
							{FindAllSimilar[gameid].map((data,index)=>
								(index<=6)&&
				<Buttons key={index}
					height={60}
					width={60}
					fun={(val)=>{check(val);}}
					source={data}
					required={FindSimilarImagesData[gameid]}
				/>
							)}
						</View>
						<View style={{flexDirection:"row"}}>
							{FindAllSimilar[gameid].map((data,index)=>
								(index>=7&&index<=13)&&
				<Buttons key={index}
					height={60}
					width={60}
					fun={(val)=>{check(val);}}
					source={data}
					required={FindSimilarImagesData[gameid]}
				/>
							)}
						</View>
						<View style={{flexDirection:"row"}}>
							{FindAllSimilar[gameid].map((data,index)=>
								(index>=14&&index<=20)&&
				<Buttons key={index}
					height={60}
					width={60}
					fun={(val)=>{check(val);}}
					source={data}
					required={FindSimilarImagesData[gameid]}
				/>
							)}
						</View>
					</View>:(FindAllSimilarImages[gameid].length<=30)?
						<View style={{alignItems:"center",marginBottom:20}}>
							<View style={{flexDirection:"row"}}>
								{FindAllSimilar[gameid].map((data,index)=>
									(index<=9)&&
		<Buttons key={index}
			height={45}
			width={45}
			fun={(val)=>{check(val);}}
			source={data}
			required={FindSimilarImagesData[gameid]}
		/>
								)}
							</View>
							<View style={{flexDirection:"row"}}>
								{FindAllSimilar[gameid].map((data,index)=>
									(index>=10&&index<=19)&&
		<Buttons key={index}
			height={45}
			width={45}
			fun={(val)=>{check(val);}}
			source={data}
			required={FindSimilarImagesData[gameid]}
		/>
								)}
							</View>
							<View style={{flexDirection:"row"}}>
								{FindAllSimilar[gameid].map((data,index)=>
									(index>=20&&index<=29)&&
		<Buttons key={index}
			height={45}
			width={45}
			fun={(val)=>{check(val);}}
			source={data}
			required={FindSimilarImagesData[gameid]}
		/>
								)}
							</View>
							<View style={{flexDirection:"row"}}>
								{FindAllSimilar[gameid].map((data,index)=>
									(index>=30&&index<=39)&&
		<Buttons key={index}
			height={45}
			width={45}
			fun={(val)=>{check(val);}}
			source={data}
			required={FindSimilarImagesData[gameid]}
		/>
								)}
							</View>
						</View>
						:
						<View style={{alignItems:"center",marginBottom:20}}>
							<View style={{flexDirection:"row"}}>
								{FindAllSimilar[gameid].map((data,index)=>
									(index<=9)&&
			<Buttons key={index}
				height={35}
				width={35}
				fun={(val)=>{check(val);}}
				source={data}
				required={FindSimilarImagesData[gameid]}
			/>
								)}
							</View>
							<View style={{flexDirection:"row"}}>
								{FindAllSimilar[gameid].map((data,index)=>
									(index>=10&&index<=19)&&
			<Buttons key={index}
				height={35}
				width={35}
				fun={(val)=>{check(val);}}
				source={data}
				required={FindSimilarImagesData[gameid]}
			/>
								)}
							</View>
							<View style={{flexDirection:"row"}}>
								{FindAllSimilar[gameid].map((data,index)=>
									(index>=20&&index<=29)&&
			<Buttons key={index}
				height={35}
				width={35}
				fun={(val)=>{check(val);}}
				source={data}
				required={FindSimilarImagesData[gameid]}
			/>
								)}
							</View>
							<View style={{flexDirection:"row"}}>
								{FindAllSimilar[gameid].map((data,index)=>
									(index>=30&&index<=39)&&
			<Buttons key={index}
				height={35}
				width={35}
				fun={(val)=>{check(val);}}
				source={data}
				required={FindSimilarImagesData[gameid]}
			/>
								)}
							</View>

							<View style={{flexDirection:"row"}}>
								{FindAllSimilar[gameid].map((data,index)=>
									(index>=40&&index<=50)&&
			<Buttons key={index}
				height={35}
				width={35}
				fun={(val)=>{check(val);}}
				source={data}
				required={FindSimilarImagesData[gameid]}
			/>
								)}
							</View>
						</View>
				}
				<View style={styles.text}>
					<Text style={styles.bottomText}>
					Mark all the objects in the table which
					are similar to the object on the left.
					</Text>
				</View>
			</ImageBackground>}
			{(success===true)&&<View style={{flex:1}}>
				<ImageBackground style={styles.gif} source={
					require("../../assets/success.gif")
				}>
					<Image
						source={
							require("../../assets/success.gif")
						}
						style={styles.gif}/>
				</ImageBackground>
			</View>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection:"row",
		justifyContent:"center",
		backgroundColor: "#fff",
		alignItems:"center",
		width:"100%",
		height:"100%"
	},
	extraImage:{
		flexDirection:"row",
		marginRight:20,
		borderRadius:40,
		borderWidth:2,
		padding:10,
		backgroundColor:"lightblue"
	},
	text:{
		borderRadius:40,
		borderWidth:3,
		position:"absolute",
		bottom:10,
		padding:10,
		width:"90%",
		backgroundColor:"white",
	},
	bottomText:{
		textShadowColor: "purple",
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 1,
		textAlign:"center",
		fontSize:20,
		color:"teal"
	},
	gif:{
		height:"100%",
		width:"100%"
	}
});
FindAllObjects.propTypes={
	fun:PropTypes.any,
	navigation:PropTypes.any
};
export default FindAllObjects;