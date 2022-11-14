import React from 'react';
import { YellowButton } from "../../../Shared/YellowButton/YellowButton";



interface ISliderBodyProps {
    banner: ISliderBanner
}

export interface ISliderBanner {
    id: number,
    header: string,
    body: string,
    isActive: boolean
}

export const SliderBody = ({ banner : { header, body}} : ISliderBodyProps) => {
    return (
        <div className="item">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="detail-box">
                            <h1>
                                {header}
                            </h1>
                            <p>
                                {body}
                            </p>
                            <div className="btn-box">
                                <YellowButton to={"#"} className={"btn1"} text={"OrderNow"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
