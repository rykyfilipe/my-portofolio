/** @format */
import Button from "./Button";

function Service({ title, description, cta, color, imgURL }) {
	const colorClasses = {
		red: {
			border: "border-red-500",
			hover: "hover:bg-red-500",
			text: "group-hover:text-red-500",
		},
		green: {
			border: "border-green-500",
			hover: "hover:bg-green-500",
			text: "group-hover:text-green-500",
		},
		blue: {
			border: "border-blue-500",
			hover: "hover:bg-blue-500",
			text: "group-hover:text-blue-500",
		},
		yellow: {
			border: "border-yellow-500",
			hover: "hover:bg-yellow-500",
			text: "group-hover:text-yellow-500",
		},
	};

	const selectedColor = colorClasses[color] || colorClasses.green; // Default to green if color not found

	return (
		<div
			className={`w-[350px] h-[400px] md:w-[400px] md:h-[400px] flex-shrink-0 rounded-xl overflow-hidden p-8 flex flex-col
                justify-between border-2 ${selectedColor.border} transition-all duration-300 group ${selectedColor.hover}
				snap-center flex-shrink-0`}>
			<div>
				<h1 className={`text-3xl font-bold mb-4 `}>{title}</h1>
				<p className='text-lg text-gray-300'>{description}</p>
			</div>
			<Button text={cta} imgURL={imgURL} />
		</div>
	);
}

export default Service;
