import React from 'react';
import { Input } from "../../shared/Input/Input";
import { capitalize, INPUT_TYPES } from "../../../utils/Stringutils";
import './BookSection.scss'
import { Image } from "react-bootstrap";

export const BookSection = () => {
    const inputNames = ['name', 'number', 'email']

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
                            <form action="components/sections/BookSection/BookSection">
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
                            <Image
                                src={'https://i.insider.com/602ee9ced3ad27001837f2ac?width=2000&format=jpeg&auto=webp'}
                                roundedCircle={true}
                                fluid={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
