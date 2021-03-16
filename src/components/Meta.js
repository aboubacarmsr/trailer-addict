import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({title}) => {
    return (
        <Helmet>
            <title> {title} </title>
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Trailer Addict - Movies, Tv Shows'
}

export default Meta;
