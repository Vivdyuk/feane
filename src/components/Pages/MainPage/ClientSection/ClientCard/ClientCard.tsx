import React from 'react';
import { IClientComment } from "../ClientSection";


interface ClientCardProps {
    client: IClientComment,
}
export const ClientCard = ({client: { name, imgUrl, comment, timestamp}}: ClientCardProps) => {
    return (
        <div className="item">
            <div className="box">
                <div className="detail-box">
                    <p>
                        {comment}
                    </p>
                    <h6>
                        {name}
                    </h6>
                    <p>
                        {timestamp.toString()}
                    </p>
                </div>
                <div className="img-box">
                    <img src={ imgUrl } alt={name} className="box-img"/>
                </div>
            </div>
        </div>
    );
};
