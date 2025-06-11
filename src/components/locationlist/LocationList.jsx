import React, { useEffect, useState } from "react";
import axios from "axios";

const LocationList = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get("https://admin-new-xp8v.onrender.com/api/locations/locations/")
            .then(res => setLocations(res.data))
            .catch(err => console.error("Ошибка при загрузке локаций:", err));
    }, []);

    return (
        <div>
            {Array.isArray(locations) && locations.map((loc) => (
                <div key={loc.id} style={{ marginBottom: "10px" }}>
                    <iframe
                        src={loc.iframe}>
                    </iframe>
                </div>
            ))}
        </div>
    );
};

export default LocationList;
