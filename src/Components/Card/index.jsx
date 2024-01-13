
const Card = () => {

    return (
        <div className = "bg-white hover:cursor-pointer w-56 h-60">
            <figure className = 'relative mb-2 w-full h-4/5'>
                <span className = "absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5">
                    Electronics
                </span>
                <img 
                    alt = "Headphones" 
                    className = "w-full h-full object-cover rounded-lg"
                    src = "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg" 
                />
                <div
                    className = "absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                >
                    +
                </div>
            </figure>
            <p className = 'flex justify-between items-center'>
                <span className = "text-sm font-light">Headphones</span>
                <span className = "text-lg font-medium">$300</span>
            </p>
        </div>
    );
}

export default Card;
