import React, { Component } from 'react';
import { useRef } from 'react';
import { useState ,useEffect} from 'react';
import styles from './video_search.module.css';

const VideoSearch = (props) => {
    const inputRef = useRef();
    const btnRef = React.createRef();
    
    const handleSearch = () => {
        const keyword=inputRef.current.value;
        keyword && props.onSearch(keyword);
    };
    const onClick = (event) => {
        handleSearch();
    }

    const onKeyPress = (event) => {
        if (event.key ==='Enter') {
            handleSearch();
        }
    }

    return (
        <header className={styles.box}>
            <img className={styles.logo} src='/images/logo.png' alt='logo'></img>
            <span className={styles.name}>Youtube</span>
            <input className={styles.input} type='search' ref={inputRef} placeholder="Search.." onKeyPress={onKeyPress}></input>
            <button ref={btnRef} className={styles.searchBtn} type='submit' onClick={onClick} >
                <img className={styles.search} src="/images/search.png" alt='search'></img>
            </button>      
        </header>

    );
}

export default VideoSearch;