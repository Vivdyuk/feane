import { Notify } from "notiflix";
import { IMenuItem } from "../components/sections/MenuSection/MenuCard/MenuCard";

const GLOBAL_URL = "https://my-json-server.typicode.com/vivdyuk/mockjson/";

export const getData = (endpoint: string, options?: any) => {
    return fetch(`${ GLOBAL_URL }${ endpoint }?${ options }`)
        .then(data => data.json())
        .catch(error => {
            Notify.failure(error.message);


            return require(`jsons/${ endpoint }`);
        })
}

export const getCustomers = (amount: number) => {
    return fetch(`https://randomuser.me/api/?results=${ amount }`)
        .then(data => data.json())
        .then(data => {
            console.log(data.results)
            return data.results
        })
        .then((data => data.map((user: any[]) => {
            return {
            // @ts-ignore
                name: `${ user!.name.first } ${ user!.name.last }`,
            // @ts-ignore
                id: user!.id.value,
            // @ts-ignore
                imgUrl: user!.picture.medium,
            // @ts-ignore
                timestamp: user!.dob.date,
            }
        })))
        .catch(error => {
            console.log(error)
            Notify.failure(error.message);
            return require('jsons/clients.json');
        })

    /* ({
                                     name: { first, last },
                                     id: { value: id },
                                     picture: { thumb: imgUrl },
                                     dob: { data: timestamp }
                                 }: any*/
}

export const prepareSearchParams = (oldSearchParams: IMenuItem, key: keyof IMenuItem, value?: string): IMenuItem => {
    const oldSearchParamsCopy: IMenuItem = { ...oldSearchParams };
    if (!value) {
        delete oldSearchParamsCopy[key];
    }

    oldSearchParamsCopy[key] = value;

    return oldSearchParamsCopy;

}
