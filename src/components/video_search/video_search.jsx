import React, { Component } from 'react';
import styles from './video_search.module.css';

const VideoSearch = (props) => {
    return (
        <header className={styles.box}>
            <img className={styles.logo} src='/images/logo.png' alt='logo'></img>
            <span className={styles.name}>Youtube</span>
            <input className={styles.input} type='search' placeholder="Search.."></input>
            <button className={styles.searchBtn} type='submit'>
                <img className={styles.search} src="/images/search.png" alt='search'></img>
            </button>        
        </header>
    );
}

export default VideoSearch;