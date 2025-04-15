/** @format */

function Project({title, description, imgURL, left}) {
    return (
        <div
            className={`
				snap-center
				flex-shrink-0
				w-[80%]
				h-fit
				flex flex-col md:flex-row
				${!left ? "md:flex-row-reverse" : ""}
				items-center justify-around
				md:gap-5
				
			`}>
            <img
                src={imgURL}
                alt={title}
                className='w-[300px] md:w-[500px] h-auto object-cover rounded-3xl hover:scale-120 hover:grayscale-75
				transition duration-200 ease-in-out'
            />
            <div className='flex flex-col justify-start w-full mt-10 md:w-[40%]'>
                <h2 className='text-3xl text-white'>{title}</h2>
                <p className='mt-5 leading-5 text-sm text-neutral-400 break-words'>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Project;
