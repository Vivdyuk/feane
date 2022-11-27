import { Notify } from "notiflix";
import { MouseEventHandler } from "react";

export const revertBooleanState = (prevState: boolean) => !prevState

export const madeFeaturesLazy: MouseEventHandler = (event) => {
    event.preventDefault();

    Notify.info('We\'ll add that feature in the future. Keep posted!')
}


export const defaultFlexProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
