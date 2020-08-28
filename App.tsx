import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Animated,
	TouchableOpacity,
} from "react-native";

export default function App() {
	const leftValue = useState(new Animated.Value(0))[0];
	const opacity = useState(new Animated.Value(1))[0];

	function moveBall() {
		Animated.timing(leftValue, {
			toValue: 500,
			duration: 5000,
			useNativeDriver: true,
		}).start();
	}

	function fadeInBall() {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 3000,
			useNativeDriver: true,
		}).start();
	}

	function fadeOutBall() {
		Animated.timing(opacity, {
			toValue: 0,
			duration: 3000,
			useNativeDriver: true,
		}).start();
	}

	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Animated.View
					style={[
						{
							width: 100,
							height: 100,
							transform: [{ translateX: leftValue }],
							opacity,
							borderRadius: 100 / 2,
							backgroundColor: "red",
						},
					]}
				></Animated.View>
				<TouchableOpacity onPress={moveBall}>
					<Text>Move Ball</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={fadeInBall}>
					<Text>Fade In</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={fadeOutBall}>
					<Text>Fade Out</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
