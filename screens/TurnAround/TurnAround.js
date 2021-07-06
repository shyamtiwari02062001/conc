import React,{useState} from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Image,
	ImageBackground,
	Text,
} from "react-native";
import Tiles from "../../constants/tiles";
import Close from "../../components/close";
import GamePoint from "../../components/gamepoints";
import GamePointContext from "../../context/GamePoints";
import PropTypes from "prop-types";
import TurnAroundImageName from "../../constants/TurnAroundImageName";
import PopUp from "../../components/PopUp";
const  TurnAround=(props)=>{
	const {gamePoint,setGamePoint}=React.useContext(GamePointContext);
	const [match,setMatched]=useState(false);
	const [story,setStory]=useState(false);
	// eslint-disable-next-line prefer-const
	let [count,setCount]=useState(0);
	const [id1,setId1]=useState(null);
	const [id2,setId2]=useState(null);
	const [id3,setId3]=useState(null);
	const [id4,setId4]=useState(null);
	const [id5,setId5]=useState(null);
	const [id6,setId6]=useState(null);
	const [id7,setId7]=useState(null);
	const [id8,setId8]=useState(null);
	const [id9,setId9]=useState(null);
	const [id10,setId10]=useState(null);
	const [id11,setId11]=useState(null);
	const [id12,setId12]=useState(null);
	const [imageId1,setImageId1]=useState(null);
	const [imageId2,setImageId2]=useState(0);
	const [imageId3,setImageId3]=useState(null);
	const [imageId4,setImageId4]=useState(0);
	const [imageId5,setImageId5]=useState(null);
	const [imageId6,setImageId6]=useState(0);
	const [imageId7,setImageId7]=useState(null);
	const [imageId8,setImageId8]=useState(0);
	const [imageId9,setImageId9]=useState(null);
	const [imageId10,setImageId10]=useState(0);
	const [imageId11,setImageId11]=useState(null);
	const [imageId12,setImageId12]=useState(0);
	const [success,setSuccess]=useState(false);
	const print=(matchedImage)=>{
		if(matchedImage===9){
			//story of bharatnatyam
			// eslint-disable-next-line max-len
			setStory("Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC.");
		}
		else if(matchedImage===10){
			//story of kathak
			// eslint-disable-next-line max-len
			setStory("Kathak is one of the eight major forms of Indian classical dance.");
		}
		else if(matchedImage===12){
			//story of krishna
			// eslint-disable-next-line max-len
			setStory("Lord Krishna killed his maternal uncle Kamsa and destroyed sin.");
		}
		else if(matchedImage===11){
			//story of arjuna
			// eslint-disable-next-line max-len
			setStory("Arjun was cursed by Urvashi an Apsara of Indralok as he was addressing her 'mother' and said that he would become a eunuch");
		}
		else if(matchedImage===13){
			//story of tajmahal
			// eslint-disable-next-line max-len
			setStory("Taj Mahal is famous as 7th Wonder of the World.  It was built by Mughal emperor Shahjahan in the memory of his beloved wife, Mumtaz Mahal.");
		}
		else if(matchedImage===14){
			//story of udaipurpalce
			setStory("Arvind Singh Mewar is the owner of City Palace");
		}
		else if(matchedImage===16){
			//story of rastrapatibhawan
			// eslint-disable-next-line max-len
			setStory("Rashtrapati Bhavan also known as Presidential palace is the second largest in the world after the Quirinal Palace, Rome");
		}
		else if(matchedImage===15){
			//story of GingeeFort
			// eslint-disable-next-line max-len
			setStory("Gingee fort was constructed during the time of Chola dynasty. Later, it was revamped by the Kurumbas (who ruled for sometime). The present structure was built by Gingee Nayaks in the 15th and 16th century.");
		}
		else if(matchedImage===18){
			//story of kuchipudi
			// eslint-disable-next-line max-len
			setStory("Kuchipudi is a dance-drama performance, with its roots in the ancient Hindu Sanskrit text of Natya Shastra");
		}
		else if(matchedImage===17){
			//story of kathakali
			// eslint-disable-next-line max-len
			setStory("Kathakali is another traditional dance form of Indian state of kerala.");
		}
		else if(matchedImage===20){
			//story of eid
			// eslint-disable-next-line max-len
			setStory("THE WHITE HOUSE HELD ITS FIRST EID AL-FITR DINNER IN 1996.");
		}
		else if(matchedImage===24){
			//story of ganeshchaturthi
			// eslint-disable-next-line max-len
			setStory("It is believed that Ganesh Chaturthi is the day when Lord Ganesh was born.");
		}
		else if(matchedImage===21){
			//story of onam
			// eslint-disable-next-line max-len
			setStory("Onam festival is celebrated to honour the kind-hearted and much-beloved demon King Mahabali, who is believed to return to Kerala during this festival. ");
		}
		else if(matchedImage===23){
			//story of durgapuja
			setStory("Goddess durga is a major deity in Hinduism.");
		}
		else if(matchedImage===22){
			//story of christmas
			setStory("Santa Claus was known as Sinterklaas in Dutch");
		}
		else if(matchedImage===19){
			//story of janmastmi
			// eslint-disable-next-line max-len
			setStory("Krishna Janmashtami, also known simply as Janmashtami or Gokulashtami, is an annual Hindu festival that celebrates the birth of Krishna, the eighth avatar of Vishnu");
		}
		else if(matchedImage===27){
			//story of ram
			// eslint-disable-next-line max-len
			setStory("Lord Shri Ram was born in Treta Yuga in present day Ayodhya in Uttar Pradesh.");
		}
		else if(matchedImage===25){
			//story of sattriya
			// eslint-disable-next-line max-len
			setStory("The Sattriya dance form was introduced in the 15th century A.D by the great Vaishnava saint and reformer of Assam, Mahapurusha Sankaradeva");
		}
		else if(matchedImage===26){
			//story of karn
			// eslint-disable-next-line max-len
			setStory("Karna, also known as Vasusena, Anga-raja, and Radheya, is one of the major characters of the Hindu epic Mahābhārata. ");
		}
	};
	// eslint-disable-next-line prefer-const
	let [gameId,setGameId]=useState(0);
	const arrayLength=Tiles[gameId].length;
	const check=(tile,index)=>{
		setCount(++count);
		if(imageId1!=imageId2){
			if(count==1){
				setId1(index);
				setImageId1(tile);
			}
			else{
				setId2(index);
				setImageId2(tile);
				if(tile==imageId1){
					console.log("matched1");
					setMatched(true);
					print(tile);
					setTimeout(()=>{
						setMatched(false);
					},3000);
					setCount(0);
				}
				else{
					setTimeout(()=>{
						setCount(0);
						setImageId1(null);
						setImageId2(0);
						setId1(null);
						setId2(null);
					},500);
				}
			}
		}
		else if(imageId1==imageId2&&imageId3!=imageId4){
			if(count==1){
				setId3(index);
				setImageId3(tile);
			}
			else{
				setId4(index);
				setImageId4(tile);
				if(tile==imageId3){
					console.log("matched2");
					setMatched(true);
					print(tile);
					setTimeout(()=>{
						setMatched(false);
					},3000);
					setCount(0);
					if(arrayLength===4){
						setTimeout(()=>{
							setGamePoint(gamePoint+10);
							setSuccess(true);
						},2800);
						setTimeout(()=>{
							setImageId1(null);
							setImageId2(0);
							setId1(null);
							setId2(null);
							setImageId3(null);
							setImageId4(0);
							setId3(null);
							setId4(null);
							setGameId(++gameId);
						},2000);
						setTimeout(()=>{
							setSuccess(false);
						},6000);
					}
				}
				else{
					setTimeout(()=>{
						setCount(0);
						setImageId3(null);
						setImageId4(0);
						setId3(null);
						setId4(null);
					},500);
				}
			}
		}
		else if(imageId1==imageId2&&imageId3==imageId4&&imageId5!=imageId6){
			if(count==1){
				setId5(index);
				setImageId5(tile);
			}
			else{
				setId6(index);
				setImageId6(tile);
				if(tile==imageId5){
					console.log("matched3");
					setMatched(true);
					print(tile);
					setTimeout(()=>{
						setMatched(false);
					},3000);
					setCount(0);
				}
				else{
					setTimeout(()=>{
						setCount(0);
						setImageId5(null);
						setImageId6(0);
						setId5(null);
						setId6(null);
					},500);
				}
			}
		}
		else if(imageId1==imageId2&&
            imageId3==imageId4&&
            imageId5==imageId6&&
            imageId7!=imageId8){
			if(count==1){
				setId7(index);
				setImageId7(tile);
			}
			else{
				setId8(index);
				setImageId8(tile);
				if(tile==imageId7){
					console.log("matched4");
					setMatched(true);
					print(tile);
					setTimeout(()=>{
						setMatched(false);
					},3000);
					setCount(0);
					if(arrayLength===8){
						setTimeout(()=>{
							setGamePoint(gamePoint+10);
							setSuccess(true);
						},2800);
						setTimeout(()=>{
							setImageId1(null);
							setImageId2(0);
							setId1(null);
							setId2(null);
							setImageId3(null);
							setImageId4(0);
							setId3(null);
							setId4(null);
							setImageId5(null);
							setImageId6(0);
							setId5(null);
							setId6(null);
							setImageId7(null);
							setImageId8(0);
							setId7(null);
							setId8(null);
							setGameId(++gameId);
						},2000);
						setTimeout(()=>{
							setSuccess(false);
						},6000);
					}
				}
				else{
					setTimeout(()=>{
						setCount(0);
						setImageId7(null);
						setImageId8(0);
						setId7(null);
						setId8(null);
					},500);
				}
			}
		}
		else if(imageId1==imageId2&&
			imageId3==imageId4&&
			imageId5==imageId6&&
			imageId7==imageId8&&
			imageId9!=imageId10
		){
			if(count==1){
				setId9(index);
				setImageId9(tile);
			}
			else{
				setId10(index);
				setImageId10(tile);
				if(tile==imageId9){
					console.log("matched5");
					setMatched(true);
					print(tile);
					setTimeout(()=>{
						setMatched(false);
					},3000);
					setCount(0);
				}
				else{
					setTimeout(()=>{
						setCount(0);
						setImageId9(null);
						setImageId10(0);
						setId9(null);
						setId10(null);
					},500);
				}
			}
		}
		else if(imageId1==imageId2&&
            imageId3==imageId4&&
            imageId5==imageId6&&
            imageId7==imageId8&&
			imageId9==imageId10&&
			imageId11!=imageId12){
			if(count==1){
				setId11(index);
				setImageId11(tile);
			}
			else{
				setId12(index);
				setImageId12(tile);
				if(tile==imageId11){
					console.log("matched6");
					setMatched(true);
					print(tile);
					setTimeout(()=>{
						setMatched(false);
					},3000);
					setCount(0);
					if(arrayLength===12){
						setTimeout(()=>{
							setSuccess(true);
							setGamePoint(gamePoint+10);
						},2800);
						setTimeout(()=>{
							setImageId1(null);
							setImageId2(0);
							setId1(null);
							setId2(null);
							setImageId3(null);
							setImageId4(0);
							setId3(null);
							setId4(null);
							setImageId5(null);
							setImageId6(0);
							setId5(null);
							setId6(null);
							setImageId7(null);
							setImageId8(0);
							setId7(null);
							setId8(null);
							setImageId9(null);
							setImageId10(0);
							setId9(null);
							setId10(null);
							setImageId11(null);
							setImageId12(0);
							setId11(null);
							setId12(null);
							setGameId(++gameId);
						},2000);
						setTimeout(()=>{
							setSuccess(false);
						},6000);
					}
				}
				else{
					setTimeout(()=>{
						setCount(0);
						setImageId11(null);
						setImageId12(0);
						setId11(null);
						setId12(null);
					},500);
				}
			}
		}
	};
	return (
		<View style={styles.container}>
			{(success===false)&&<ImageBackground
				source={
					require("../../assets/turnAroundImages/TurnAroundBack.png")
				}
				style={styles.backgroundImage}
			>
				<Close fun={()=>{props.navigation.navigate("Dashboard");}}/>
				<GamePoint/>
				<PopUp visible={match} fun={()=>{setMatched(false);}}>
					<Text style={{
						fontSize:20,
						fontWeight:"bold",
						textAlign:"center"
					}}>Did you know ?</Text>
					<Text style={{fontSize:18}}>{story}</Text>
				</PopUp>
				{(Tiles[gameId].length!==12)&&
				<View style={[styles.view,{marginLeft:"5%",marginTop:"10%"}]}>
					{Tiles[gameId].map((tile,index)=>
						<View style={styles.map} key={index}>
							{	(index<=3&&Tiles[gameId].length!=12)&&<View>
								{(id1==index||
							id2==index||
							id3==index||
							id4==index||
							id5==index||
							id6==index||
							id7==index||
							id8==index)?
									<ImageBackground
									// eslint-disable-next-line max-len
										source={require("../../assets/turnAroundImages/back.png")}
										style={styles.upperLevelImage}
									>
										<Image
											source={tile}
											style={{
												height:90,
												width:90,
											}}
										/>
										<Text
											style={{
												fontSize:12,
												fontWeight:"bold"
											}}
										>
											{TurnAroundImageName[gameId][index]}
										</Text>
									</ImageBackground>
									:<TouchableOpacity key={index}
										onPress={()=>{
											check(tile,index);
										}}>
										<View
											style={styles.upperLevelView}
										/>
									</TouchableOpacity>}
							</View>
							}
						</View>
					)}
				</View>
				}
				{(Tiles[gameId].length!==12)&&
				<View style={[styles.view,{marginRight:"27%",marginTop:"5%"}]}>
					{Tiles[gameId].map((tile,index)=>
						<View style={styles.map} key={index}>
							{	(index>=4&&index<=7&&
							Tiles[gameId].length!=12)&&<View>
								{(id1==index||
					id2==index||
					id3==index||
					id4==index||
					id5==index||
					id6==index||
					id7==index||
					id8==index)?
									<View style={{borderRadius:20}}>
										<ImageBackground
										// eslint-disable-next-line max-len
											source={require("../../assets/turnAroundImages/back.png")}
											style={styles.lowerLevelImage}
										>
											<Image
												source={tile}
												style={{
													height:90,
													width:90,
												}}
											/>
											<Text
												style={{
													fontSize:12,
													fontWeight:"bold"
												}
												}
											>{TurnAroundImageName[gameId][index]
												}
											</Text>
										</ImageBackground>
									</View>
									:<TouchableOpacity key={index}
										onPress={()=>{
											check(tile,index);
										}}>
										<View
											style={styles.lowerLevelView}
										/>
									</TouchableOpacity>}
							</View>
							}
						</View>
					)}
				</View>
				}
				<View style={[styles.view,{marginTop:"5%",marginRight:"4%"}]}>
					{Tiles[gameId].map((tile,index)=>
						<View style={styles.map1} key={index}>
							{	(index<=5&&Tiles[gameId].length===12)&&<View>
								{(id1==index||
						id2==index||
						id3==index||
						id4==index||
						id5==index||
						id6==index||
						id7==index||
						id8==index||
						id9==index||
						id10==index||
						id11==index||
						id12==index)?
									<ImageBackground
										// eslint-disable-next-line max-len
										source={require("../../assets/turnAroundImages/back.png")}
										style={styles.upperLevelImage}
									>
										<Image
											source={tile}
											style={{
												height:90,
												width:90,
											}}
										/>
										<Text
											style={{
												fontSize:12,fontWeight:"bold"
											}}>
											{TurnAroundImageName[gameId][index]}
										</Text>
									</ImageBackground>
									:<TouchableOpacity key={index}
										onPress={()=>{
											check(tile,index);
										}}>
										<View
											style={styles.upperLevelView}
										/>
									</TouchableOpacity>}
							</View>
							}
						</View>
					)}
				</View>
				<View style={[styles.view,{marginRight:"14%",marginTop:"5%"}]}>
					{Tiles[gameId].map((tile,index)=>
						<View style={styles.map1} key={index}>
							{	(index>=6&&index<=11&&
								Tiles[gameId].length===12)&&<View>
								{(id1==index||
						id2==index||
						id3==index||
						id4==index||
						id5==index||
						id6==index||
						id7==index||
						id8==index||
						id9==index||
						id10==index||
						id11==index||
						id12==index)?
									<View style={{borderRadius:20}}>
										<ImageBackground
											// eslint-disable-next-line max-len
											source={require("../../assets/turnAroundImages/back.png")}
											style={styles.lowerLevelImage}
										>
											<Image
												source={tile}
												style={{
													height:90,
													width:90,
												}}
											/>
											<Text
												style={{
													fontSize:12,
													fontWeight:"bold"
												}}
											>{TurnAroundImageName[gameId][index]
												}
											</Text>
										</ImageBackground>
									</View>
									:<TouchableOpacity key={index}
										onPress={()=>{
											check(tile,index);
										}}>
										<View
											style={styles.lowerLevelView}
										/>
									</TouchableOpacity>}
							</View>
							}
						</View>
					)}
				</View>
			</ImageBackground>}
			{(success===true)&&<View style={{flex:1}}>
				<Image
					source={
						require("../../assets/success.gif")
					}
					style={styles.gif}/>
			</View>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		flexDirection:"row",
	},
	lowerLevelView:{
		marginBottom:40,
		height:120,
		width:100,
		borderRadius:20,
		backgroundColor:"#cbfe00"
	},
	lowerLevelImage:{
		marginBottom:40,
		height:120,
		borderRadius:20,
		width:100,
		justifyContent:"center",
		alignItems:"center"
	},
	upperLevelView:{
		marginTop:40,
		height:120,
		width:100,
		borderRadius:20,
		backgroundColor:"#cbfe00"
	},
	upperLevelImage:{
		marginTop:40,
		height:120,
		width:100,
		justifyContent:"center",
		alignItems:"center"
	},
	map:{
		marginLeft:"5%",
	},
	map1:{
		marginLeft:"1%",
	},
	view:{
		flexDirection:"row",
		width:"80%",
		alignItems:"center"
	},
	backgroundImage:{
		flex:1,
		justifyContent:"center",
		alignItems:"center"
	},
	gif:{
		height:"100%",
		width:"100%"
	}
});
TurnAround.propTypes={
	fun:PropTypes.any,
	navigation:PropTypes.any
};
export default TurnAround;