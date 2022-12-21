import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { Input } from "../../shared/Input/Input";
import { capitalize, generateBookMsg, INPUT_TYPES } from "../../../utils/stringUtils";
import './BookSection.scss'
import { Image } from "react-bootstrap";
import { Confirm, Notify } from "notiflix";
import { useNavigate } from "react-router-dom";

export interface IForm {
    name: string,
    date: string,
    email: string,
    phone: string,
    persons: string
}

export const BookSection = () => {
    const inputNames = ['name', 'phone', 'email'];
    const navigate = useNavigate();
    const [form, setForm] = useState<IForm>({
        name: '',
        date: '',
        email: '',
        phone: '',
        persons: ''
    });

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        Confirm.show(
            'Is everything ok?',
            generateBookMsg(form),
            'Yes',
            'No',
            () => {
                Notify.info('Great. See you!');

                (event.target as HTMLFormElement).reset();
                setTimeout(() => {
                    navigate('/')
                }, 1000);

            }
        )
    }

    const handleChange: ChangeEventHandler = (event) => {
        const { name, value } = event.target as HTMLInputElement;
        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

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
                            <form onSubmit={ handleSubmit }>
                                { inputNames.map((name) => (
                                        <Input
                                            key={ name }
                                            type={ INPUT_TYPES.find(type => name === type) || "text" }
                                            name={ name }
                                            state={ form[name] }
                                            setState={ handleChange }
                                            placeholder={ `Your ${ capitalize(name) }` }
                                            className="form-control"
                                        />
                                    )
                                ) }
                                <select className="form-control nice-select wide" name={ 'persons' }
                                        onChange={ handleChange }>
                                    <option defaultValue={ "" } disabled>
                                        How many persons?
                                    </option>
                                    <option value="1">
                                        1
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
                                    type={ 'datetime-local' }
                                    name={ 'date' }
                                    state={ form['date'] }
                                    setState={ handleChange }
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
                                src={ 'https://i.insider.com/602ee9ced3ad27001837f2ac?width=2000&format=jpeg&auto=webp' }
                                roundedCircle={ true }
                                fluid={ true }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
