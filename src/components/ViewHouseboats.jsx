import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import axios from 'axios'

const ViewHouseboats = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/houseboat.json").then(

            (response) => {

                changeData(response.data)
            }

        ).catch()
    }

    useEffect(

        () => {

            fetchData()
        }
    )

    return (
        <div>

            <Navigation />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            {data.map(

                                (value, index) => {

                                    return (

                                        <div key={value.boatId} className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                            <div className="card h-100" style={{ width: "18rem", height: "300px" }}>
                                                <img src={value.image} class="card-img-top" alt="..." />
                                                <div class="card-body ">
                                                    <h5 className="card-title">{value.boatName}</h5>
                                                    <p className="card-text">{value.boatId}</p>
                                                    <p className="card-text">{value.category}</p>
                                                    <p className="card-text">{value.bedrooms}</p>
                                                    <p className="card-text">{value.capacity}</p>
                                                    <p className="card-text">{value.acType}</p>
                                                    <p className="card-text">{value.pricePerNight}</p>
                                                    <p className="card-text">{value.route}</p>
                                                    <p className="card-text">{value.builtYear}</p>
                                                    <p className="card-text">{value.description}</p>

                                                    <a href="#" class="btn btn-primary">More Details</a>
                                                </div>
                                            </div>

                                        </div>


                                    )
                                }

                            )}


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewHouseboats