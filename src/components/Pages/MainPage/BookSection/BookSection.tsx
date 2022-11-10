import React, { FormEventHandler, useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, GoogleMapProps } from '@react-google-maps/api';
import { Input } from "../../../Shared/Input/Input";
import { capitalize, INPUT_TYPES } from "../../../../utils/Stringutils";
import './BookSection.scss'

export const BookSection = () => {
    const inputNames = ['name', 'number', 'email']

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ""
    });

    const [map, setMap] = useState<google.maps.Map | null>(null)

    const center = {
        lat: -3.745,
        lng: -38.523
    }

    const onLoad = useCallback((map: google.maps.Map) => {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])


    const onUnmount = useCallback((map: google.maps.Map) => {
        setMap(null)
    }, [])

    return (
        <section className="book_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2>
                        Book A Table
                    </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form_container">
                            <form action="">
                                { inputNames.map((name) => (
                                        <Input
                                            key={ name }
                                            type={ INPUT_TYPES.find(type => name === type) || "text" }
                                            name={ name }
                                            placeholder={ `Your ${ capitalize(name) }` }
                                            className="form-control"
                                        />
                                    )
                                ) }
                                <select className="form-control nice-select wide">
                                    <option defaultValue={ "" } disabled>
                                        How many persons?
                                    </option>
                                    <option value="2">
                                        2
                                    </option>
                                    <option value="3">
                                        3
                                    </option>
                                    <option value="4">
                                        4
                                    </option>
                                    <option value="5">
                                        5
                                    </option>
                                </select>
                                { <Input
                                    type={ 'date' }
                                    name={ 'date' }
                                    className={ 'form-control' }
                                /> }
                                <div className="btn_box">
                                    <button type={ "submit" }>
                                        Book Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="map_container ">
                            { isLoaded ?
                                <GoogleMap
                                    onLoad={ onLoad }
                                    onUnmount={ onUnmount }
                                >

                                </GoogleMap>
                                :
                                <div id="googleMap"></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
