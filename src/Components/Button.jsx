/** @format */

function Button({ text, imgURL, handleClick, variant = "default", className = "" }) {
    const baseClasses = "cursor-pointer w-fit rounded-full flex items-center justify-center py-2 transition-all duration-300";
    const variants = {
        default: "bg-[linear-gradient(135deg,#00A3FF_0%,#0057FF_100%)] text-[#E1E7EF] hover:opacity-90",
        outline: "bg-[#020817]/50 backdrop-blur-sm border-2 border-[#00A3FF]/20 hover:border-[#00A3FF]/50 hover:bg-[#00A3FF]/10",
        ghost: "hover:bg-[#00A3FF]/10"
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${text ? "px-4" : "px-2"} ${className}`}
            onClick={handleClick}
        >
            {text && <span className="text-base font-medium">{text}</span>}
            {imgURL && <img src={imgURL} alt="icon" className="w-6 h-6" />}
        </button>
    );
}

export default Button;
