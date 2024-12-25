import React from "react";
import Map from "../../components/map";
import LocationTracker from "../../components/alert";

function MapView() {
    return (
        <div>
            <LocationTracker></LocationTracker>
            <Map />
        </div>
    );
}


export default MapView;
