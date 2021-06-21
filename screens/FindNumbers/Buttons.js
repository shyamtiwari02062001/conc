import React from "react";
import {View,Image,TouchableOpacity} from "react-native";
import PropTypes from "prop-types";
const Buttons= (props) =>{
	let height,width;
	if(props.source===32||
		props.source===33||
		props.source===34||
		props.source===35||
		props.source===36||
		props.source===37||
		props.source===38||
		props.source===39||
		props.source===40){
		height=40;
		width=40;
	}
	else{
		height=50;
		width=50;
	}
	return (
		<View style={{
			margin:5,
			borderWidth:2,
			borderRadius:20,
			height:50,
			width:50,
			backgroundColor:"white",
			justifyContent:"center",
			alignItems:"center"
		}}>
			<TouchableOpacity
				onPress={()=>{
					props.fun(props.source);
				}}>
				<Image source={props.source}
					style={{height,width,borderRadius:20}}
				/>
			</TouchableOpacity>
		</View>
	);
};
Buttons.propTypes={
	fun:PropTypes.any,
	source:PropTypes.any
};
export default Buttons;