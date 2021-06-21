import React,{useState} from "react";
import {View,ImageBackground,Image,Pressable,StyleSheet} from "react-native";
import PropTypes from "prop-types";
const Button = (props) =>{
	const [sourceImage,setSouceImage]=useState(null);
	const [imageid,setImageID]=useState(0);
	return(
		<View style={styles.view}>
			{
				(sourceImage!=imageid)
			&&
			<Pressable
				onPress={()=>{
					props.fun((props.source===props.required)?1:0);
					setSouceImage(props.source);
					setImageID(props.required);
				}}>
				<Image
					source={props.source}
					style={[
						styles.image,
						{height:props.height-5,width:props.width-5,padding:3}]}
				/>
			</Pressable>
			}
			{(sourceImage==imageid)
			&&<View>
				<ImageBackground
					source={props.source}
					style={[styles.image,{
						height:(props.height-5)||60,
						width:(props.width-5)||60,padding:3}]}
				>

					<View style={{
						alignItems:"center",
						justifyContent:"center",
						flex:1
					}}>
						<Image
							source={
								require(
									"../../assets/findallobjectsImages/tick.png"
								)
							}
							style={
								[styles.img,
									{height:props.height||60,
										width:props.width||60}]}
						/>
					</View>
				</ImageBackground>
			</View>
			}
		</View>
	);
};
const styles=StyleSheet.create({
	view:{
		borderWidth:1,
		margin:5,
		borderRadius:10,
		backgroundColor:"lightblue",
		padding:3
	},
	image:{
		height:60,
		width:60
	},
	img:{
		height:60,
		width:60,
		tintColor:"green"
	}
});
Button.propTypes={
	source:PropTypes.any,
	required:PropTypes.any,
	fun:PropTypes.any,
	height:PropTypes.number,
	width:PropTypes.number
};
export default Button;