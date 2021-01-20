import React from 'react'
import Style from './ThumbnailDetail.module.css';

interface Props {
    thumbnail: string
}

const ThumbnailDetail = (props: Props) => {
    return (
        <div className={Style.thumbnailWrap}>
            <img src={props.thumbnail} />
        </div>
    )
}

export default ThumbnailDetail
