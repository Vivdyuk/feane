import axios from "axios";
import { Notify } from "notiflix";
import { IMenuItem } from "../components/Pages/MainPage/MenuSection/MenuCard/MenuCard";

const GLOBAL_URL = "https://my-json-server.typicode.com/vivdyuk/mockjson/";

export const getData = async (endpoint: string, options?: any) => {

    console.log(options);
    // const formattedOptions = options ?
    //     Object.entries(options).reduce((acc, [key, value]) => value ?  acc + `${ key }=${ value }&` : acc , '?')
    //     : '';
    return fetch(`${ GLOBAL_URL }${ endpoint }?${ options }`)
        .then(data => data.json())
        .catch(error => {
            Notify.failure(error.message)

            return [];
        })
}

export const prepareSearchParams = (oldSearchParams: IMenuItem, key: keyof IMenuItem, value?: string): IMenuItem => {
    const oldSearchParamsCopy: IMenuItem = { ...oldSearchParams };
    if (!value) {
        delete oldSearchParamsCopy[key];
    }

    oldSearchParamsCopy[key] = value;

    return oldSearchParamsCopy;

}
