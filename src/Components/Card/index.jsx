import PropTypes from 'prop-types';

const Card = ({ data }) => {

    const { category, image, title, price } = data;

    return (
        <div className = "bg-white hover:cursor-pointer w-56 h-60">
            <figure className = 'relative mb-2 w-full h-4/5'>
                <span className = "absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5 capitalize">
                    { category }
                </span>
                <img 
                    alt = { title }
                    className = "w-full h-full object-cover rounded-lg"
                    src = { image }
                />
                <div
                    className = "absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                >
                    +
                </div>
            </figure>
            <p className = 'flex justify-between items-center'>
                <span className = "text-sm font-light truncate">{ title }</span>
                <span className = "text-lg font-medium">${ price }</span>
            </p>
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.objectOf({
        category: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
    }),
}

export default Card;
