import React, { useState } from 'react'
import Navigation from './Navigation'

const ViewHouseboats = () => {

    const [data, changeData] = useState(
        [
            {
                "boatId": "HB301",
                "boatName": "Backwater Queen",
                "category": "Luxury",
                "bedrooms": 3,
                "capacity": 8,
                "acType": "Full-time AC",
                "pricePerNight": "18500",
                "route": "Alappuzha - Kumarakom",
                "builtYear": 2022,
                "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fm=jpg&q=60&w=1200&auto=format&fit=crop",
                "description": "Premium luxury houseboat with upper deck and glass-walled dining area."
            },
            {
                "boatId": "HB302",
                "boatName": "Kera Breeze",
                "category": "Deluxe",
                "bedrooms": 2,
                "capacity": 6,
                "acType": "Night AC",
                "pricePerNight": "9500",
                "route": "Alappuzha - Punnamada Lake",
                "builtYear": 2021,
                "image": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?fm=jpg&q=60&w=1200&auto=format&fit=crop",
                "description": "Traditional kettuvallam with modern interiors and sunset cruise option."
            },
            {
                "boatId": "HB303",
                "boatName": "Vembanad Pearl",
                "category": "Premium",
                "bedrooms": 4,
                "capacity": 10,
                "acType": "Full-time AC",
                "pricePerNight": "24000",
                "route": "Kumarakom - Vembanad Lake",
                "builtYear": 2023,
                "image": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?fm=jpg&q=60&w=1200&auto=format&fit=crop",
                "description": "Spacious family houseboat with conference deck and Kerala sadya on board."
            },
            {
                "boatId": "HB304",
                "boatName": "Coir Country",
                "category": "Budget",
                "bedrooms": 1,
                "capacity": 3,
                "acType": "Non AC",
                "pricePerNight": "5500",
                "route": "Alappuzha - Nedumudy",
                "builtYear": 2019,
                "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?fm=jpg&q=60&w=1200&auto=format&fit=crop",
                "description": "Cozy budget houseboat perfect for couples exploring village canals."
            },
            {
                "boatId": "HB305",
                "boatName": "Monsoon Melody",
                "category": "Deluxe",
                "bedrooms": 2,
                "capacity": 5,
                "acType": "Night AC",
                "pricePerNight": "11000",
                "route": "Alappuzha - Kainakary",
                "builtYear": 2020,
                "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=1200&auto=format&fit=crop",
                "description": "Popular honeymoon houseboat with candle-light dinner package."
            },
            {
                "boatId": "HB306",
                "boatName": "Paddy Field Drifter",
                "category": "Premium",
                "bedrooms": 3,
                "capacity": 7,
                "acType": "Full-time AC",
                "pricePerNight": "16000",
                "route": "Kuttanad - Champakulam",
                "builtYear": 2022,
                "image": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?fm=jpg&q=60&w=1200&auto=format&fit=crop",
                "description": "Cruises through below-sea-level paddy fields of Kuttanad."
            },
            {
                "boatId": "HB307",
                "boatName": "Lotus Lagoon",
                "category": "Luxury",
                "bedrooms": 5,
                "capacity": 12,
                "acType": "Full-time AC",
                "pricePerNight": "32000",
                "route": "Kumarakom - Pathiramanal Island",
                "builtYear": 2024,
                "image": "https://images.unsplash.com/photo-1519046904884-53103b34b206?fm=jpg&q=60&w=1200&auto=format&fit=crop",
                "description": "Flagship luxury vessel with jacuzzi deck and private chef."
            },
            {
                "boatId": "HB308",
                "boatName": "Village Whisper",
                "category": "Budget",
                "bedrooms": 1,
                "capacity": 4,
                "acType": "Non AC",
                "pricePerNight": "6500",
                "route": "Alappuzha - Thottappally",
                "builtYear": 2018,
                "image": "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?fm=jpg&q=60&w=1200&auto=format&fit=crop",
                "description": "Eco-friendly houseboat run by a local fishing family."
            }
        ]

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

                                            <div className="card" style={{ width: "18rem" }}>
                                                <img src={value.image} class="card-img-top" alt="..." />
                                                <div class="card-body">
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