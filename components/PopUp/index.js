import React from "react";
import {  Modal, View,Pressable,Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles/index";
const Popup = (props) => {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={props.visible}
			style={{height:"40%"}}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Pressable onPress={()=>{props.fun();}}
						style={{position:"absolute",top:10,right:10}}>
						<Image
							source={require("../../assets/cancel.png")}
							style={{height:20,width:20}}/>
					</Pressable>
					<View style={{marginTop:20,justifyContent:"space-around"}}>
						{props.children}
					</View>
				</View>

			</View>
		</Modal>
	);
};
Popup.propTypes = {
	fun:PropTypes.func,
	type:PropTypes.string,
	visible:PropTypes.bool,
	content:PropTypes.string,
	onClose:PropTypes.func,
	title:PropTypes.string,
};
export default Popup;