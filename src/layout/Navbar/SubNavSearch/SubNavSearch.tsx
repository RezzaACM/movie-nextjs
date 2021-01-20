import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Style from './SubNavSearch.module.css';
import { connect } from "react-redux";


interface Props {
    open: boolean
    movieList: Array<any>
    searchValue: string
}

const SubNavSearch = (props: Props) => {
    let title: Array<any>;
    title = props.movieList.filter(res => {
        return res.title.toLowerCase().includes(props.searchValue.toLowerCase())
    });
    const open = props.open ? 'd-block' : 'd-none';
    return (
        <div className={`${Style.subnavsearch} ${open}`}>
            {
                title.map((res,i) => {
                    return (
                        <div key={i+1} className={Style.suggestion}>
                            <span>X</span>
                            <label>{res.title}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        movieList: state.movieReducers.data,
        searchValue: state.searchReducer.value
    };
};

export default connect(mapStateToProps)(SubNavSearch)
