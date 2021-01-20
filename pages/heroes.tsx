import React from 'react';
import Layout from '../src/layout';

interface Props {

}

const Heroes = (props: Props) => {
    return (
        <Layout>
            <div className="container">
                <h1>Hello World this is Heroes page!</h1>
            </div>
        </Layout>
    )
}

export default Heroes;
