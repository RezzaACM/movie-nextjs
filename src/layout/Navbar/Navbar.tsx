import React, { useState } from 'react'
import Style from './Navbar.module.css';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { search as searchAction } from '../../redux/action/searchAction';
import SubNavSearch from './SubNavSearch/SubNavSearch';

interface Props {
    dispatch: any
}

const Navbar = (props: Props) => {
    const [search, setSearch] = useState('');
    const [openSuggestion, setOpenSuggestion] = useState(false);

    const handleChange = (e: any) => {
        let value = e.target.value;
        setSearch(value)
        props.dispatch(searchAction(value))
        if (value.length > 0) {
            setOpenSuggestion(true);
        } else {
            setOpenSuggestion(false)
        }
    }

    return (
        <div className={Style.myNavbar}>
            <div className={Style.myNavbar__logo}>
                <Link href={'/'}>
                    <a className={Style.myLogo}>Heroku.com</a>
                </Link>
            </div>
            <div className={Style.myNavbar__search}>
                <div className={Style.search_navbar}>
                    <input
                        value={search}
                        placeholder={'Search Movie tittle or Date in here...'}
                        onChange={handleChange}
                        className={Style.search_navbar__input}
                    />
                    <button className={Style.search_navbar__button}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <SubNavSearch open={openSuggestion} />
            </div>
            <div className={Style.myNavbar__list}>
                <div className={Style.listNavbar}>
                    <Link href={'/heroes'} >Hero</Link>
                    <Link href={'/news'} >News</Link>
                    <Link href='http://www.twitter.com/rezzaacm' ><a onClick={() => window.location.href = 'http://www.twitter.com/rezzaacm'}>twitter</a></Link>
                </div>
            </div>
        </div>
    )
}

export default connect()(Navbar)
