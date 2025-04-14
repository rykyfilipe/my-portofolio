/** @format */

function Button({text, imgURL, handleClick}) {
    return (
        <button
            className={`cursor-pointer w-fit bg-transparent border border-accent rounded-full flex items-center justify-center py-2 text-white transition-all duration-300 hover:bg-accent/20 hover:border-white ${
                text ? "px-4" : "px-2"
            }`} onClick={handleClick}>
            {text && <span className='text-base font-medium'>{text} </span>}
            {imgURL && <img src={imgURL} alt='icon' className='w-6 h-6 invert-100'/>}
        </button>
    );
}

export default Button;
