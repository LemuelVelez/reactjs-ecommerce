import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from '../../../assets/logo_big.png';

function ViewCategory() {

    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/getCategory`);
                if (isMounted && res.data.status === 200) {
                    setCategory(res.data.category);
                    setLoading(false);
                }
            } catch (error) {
                if (error.response && error.response.status === 429) {
                    // Handle rate limit exceeded
                    console.error("Rate limit exceeded. Slow down your requests.");
                } else {
                    console.error("Error fetching data:", error.message);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) {
        return <h4>Loading Categories...</h4>
    }
    else {
        var showCategoryList = '';
        showCategoryList = category.map((item, idx) => {
            return (
                <div className="col-md-4" key={idx}>
                    <div className="card">
                        <Link to="">
                            <img src={logo} className="w-36" alt={item.name} />
                        </Link>
                        <div className="card-body">
                            <Link to={`collections/${item.slug}`}>
                                <h5>{item.name}</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6> Category Page</h6>
                </div>
            </div>

            <div className="py-3">
                <div className="container">
                    <div className="row">
                        {showCategoryList}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewCategory;