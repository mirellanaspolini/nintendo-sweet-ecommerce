import Price from "componentes/Price";
import Rating from "componentes/Rating";
import { Link } from "react-router-dom";

const CardProductCart = ({ product }) => {
    return (
        <li className="flex flex-col md:flex-row mb-4 ">
            <Link to={"/produtos/" + product.slug} className="w-full">
                <div className=" rounded-3xl shadow-lg flex">
                        <img
                            className="w-3/5 lg:max-w-[180px] max-w-[160px] h-[140px] object-cover rounded-l-3xl"
                            src={product.images[0]}
                            alt={product.name}
                        />
                
                        <div className="p-4 w-full" >
                            <h3>{product.name}</h3>
                            <Price inPromotion={product.inPromotion}  price={product.price}/>
                        </div>
                </div>
            </Link>
        </li>
    );
}

export default CardProductCart;