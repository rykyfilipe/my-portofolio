/** @format */

import { useState, useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
	const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
	const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
	const [isMoving, setIsMoving] = useState(false);
	const [lastMoveTime, setLastMoveTime] = useState(0);

	useEffect(() => {
		let animationFrameId = null;
		let timeout = null;

		const updateCursorPosition = (e) => {
			const currentTime = Date.now();
			setIsMoving(true);
			setLastMoveTime(currentTime);

			if (timeout) clearTimeout(timeout);
			timeout = setTimeout(() => {
				setIsMoving(false);
			}, 200);

			setDotPosition((prevPos) => {
				const dx = e.clientX - prevPos.x;
				const dy = e.clientY - prevPos.y;
				return {
					x: prevPos.x + dx * 0.2,
					y: prevPos.y + dy * 0.2,
				};
			});
		};

		const animateCircle = () => {
			setCirclePosition((prevPos) => {
				const dx = dotPosition.x - prevPos.x;
				const dy = dotPosition.y - prevPos.y;
				return {
					x: prevPos.x + dx * 0.05,
					y: prevPos.y + dy * 0.05,
				};
			});

			animationFrameId = requestAnimationFrame(animateCircle);
		};

		window.addEventListener("mousemove", updateCursorPosition);
		animationFrameId = requestAnimationFrame(animateCircle);

		return () => {
			window.removeEventListener("mousemove", updateCursorPosition);
			if (animationFrameId) cancelAnimationFrame(animationFrameId);
			if (timeout) clearTimeout(timeout);
		};
	}, [dotPosition]);

	const getDotStyle = () => {
		if (!isMoving) {
			return {
				left: `${circlePosition.x}px`,
				top: `${circlePosition.y}px`,
				transition: "left 0.3s ease-out, top 0.3s ease-out",
			};
		}

		return {
			left: `${dotPosition.x}px`,
			top: `${dotPosition.y}px`,
			transition: "none",
		};
	};

	return (
		<>
			<div
				className='cursor-circle'
				style={{
					left: `${circlePosition.x}px`,
					top: `${circlePosition.y}px`,
				}}
			/>
			<div className='cursor-dot' style={getDotStyle()} />
		</>
	);
};

export default CustomCursor;
