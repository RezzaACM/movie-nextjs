import React from 'react'
import ThumbnailDetail from '../../../src/components/ThumbnailDetail/ThumbnailDetail'
import Layout from '../../../src/layout'
import { GetStaticPaths, GetStaticProps } from 'next';
import { isEmpty } from 'lodash';
import moment from 'moment';


export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(`https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies/${context.params.id}`);
    const detail = await res.json()

    return {
        props: {
            detail
        }
    }
}


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: '*' } }
        ],
        fallback: true
    };
}

interface Props {
    detail: any
}

const DetailMovie = (props: Props) => {
    return (
        <Layout>
            <div className="container">
                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <ThumbnailDetail thumbnail={isEmpty(props.detail) ? '' : props.detail.image} />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <h1>{isEmpty(props.detail) ? '' : props.detail.title}</h1>
                                </div>
                                <div className="time">
                                    <h4>{moment(isEmpty(props.detail) ? '' : props.detail.showTime).format('YYYY-MM-DD HH:mm:ss')}</h4>
                                </div>
                                <div className="like">
                                    <p>{isEmpty(props.detail) ? '' : props.detail.like}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DetailMovie
