import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ViewCategory() {

    const[loading, setLoading] = useState(true)
    
    return (
        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4> Category List
                        <Link to="/admin/add-category" className="btn btn-primary btn-sm float-end">Add Category</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Slug</th>
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ViewCategory;