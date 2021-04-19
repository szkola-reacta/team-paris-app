import React, {useState} from 'react';
import firebase from 'firebase';

import PropertyList from "./PropertyList";

function PropertyDatabase() {

    const [properties, setProperties] = useState([]);
    const dbRef = firebase.database().ref();

    dbRef.child("properties").get().then((snapshot) => {
        if (snapshot.exists()) {
            if (properties.length === 0) {
                setProperties(snapshot.val());
            }
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

    return (
        <div>
            <PropertyList properties={properties}/>
        </div>
    )
}

export default PropertyDatabase;