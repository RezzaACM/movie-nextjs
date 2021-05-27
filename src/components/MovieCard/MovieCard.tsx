import moment from 'moment';
import React from 'react';
import Style from './MovieCard.module.css';

interface Props {
    image: string
    title: string
    showtime?: string,
    id?: number
    like: number
}

const MovieCard = (props: Props) => {
    return (
        <div className={Style.movieCard}>
            <div className={Style.movieCard__thumbnail}>
                <img loading="lazy" src={props.image} />
            </div>
            <div className={Style.movieCard__info}>
                <div className={Style.infoMovie}>
                    <div className={Style.infoMovie__title}>
                        <label>{props.title}</label>
                    </div>
                    <div className={Style.infoMovie__tl}>
                        <label>{moment(props.showtime).format('YYYY-MM-DD HH:mm:ss')}</label>
                        <label>{props.like}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
