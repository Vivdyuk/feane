import React from 'react';
import { IClientComment } from "../ClientSection";
import { lorem } from "../../../../utils/loremInit";


interface ClientCardProps {
    client: IClientComment,
}



export const ClientCard = ({client: { name, imgUrl, timestamp}}: ClientCardProps) => {
    return (
        <div className="item">
            <div className="box">
                <div className="detail-box">
                    <p>
                        <i>{lorem.generateSentences(Math.round(Math.random() * 4))}</i>
                    </p>
                    <h6>
                        {name}
                    </h6>
                    <p>
                        {timestamp as string}
                    </p>
                </div>
                <div className="img-box">
                    <img src={imgUrl} alt={name} className="box-img"/>
                </div>
            </div>
        </div>
    );
};
