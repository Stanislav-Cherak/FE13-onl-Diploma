import React from "react";

import { nFormatter } from "../../helpers/nFormatter";

import './CoinCard.scss';

import { CoinType } from "../../types/types.js";

const CoinCard: React.FC<CoinType> = ({ id, rank, name, iconUrl, price, marketCap, change }) => {

    const preparedPrice = nFormatter(Number(price), 2);
    const preparedMarketCap = nFormatter(marketCap, 2);

    return (
        <div className='coin-card'>
            <div className='card-header'>
                <span className='card-header_title'>{rank}. {name}</span>
                <img src={iconUrl} alt={name} />
            </div>
            <div className='card-body'>
                <span className='card-body_text'>
                    Price: {preparedPrice}
                </span>
                <span className='card-body_text'>
                    Market Cap: {preparedMarketCap}
                </span>
                <span className='card-body_text'>
                    Daily Change: {change}
                </span>
            </div>
        </div>
    )
}

export default CoinCard;
