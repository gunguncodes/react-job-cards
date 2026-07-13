import { configs } from "@eslint/js";
import { useParams } from "react-router-dom";

function Product() {
    const {id} = useParams();

    return (
        <div
        className="text-center mt-20"
        >
            <h1 className="text-4xl font-bold">
                Product ID : {id}
            </h1>

        </div>
    )
}

export default Product;