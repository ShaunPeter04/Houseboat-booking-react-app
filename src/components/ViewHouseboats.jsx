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

                                        <div key={value.boatId} className="col col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">

                                            <div className="card h-100" style={{ width: "18rem" }}>
                                                <img src={value.image} class="card-img-top" alt="..." style={{ height: "200px" }} />
                                                <div class="card-body ">
                                                    <h5 className="card-title">{value.boatName}</h5>
                                                    <h6 className="card-text">Boat ID : {value.boatId}</h6>
                                                    <h6 className="card-text">Category : {value.category}</h6>
                                                    <h6 className="card-text">Bedrooms : {value.bedrooms}</h6>
                                                    <h6 className="card-text">Capacity : {value.capacity}</h6>
                                                    <h6 className="card-text">AC Type{value.acType}</h6>
                                                    <h6 className="card-text">Price Per Night : {value.pricePerNight}</h6>
                                                    <h6 className="card-text">Route : {value.route}</h6>
                                                    

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