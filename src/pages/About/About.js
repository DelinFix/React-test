import React from 'react'

import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.root}>
            <p className={styles.title}>
                This page about my pet project
            </p>
            <p className={styles.subtitle}>
                In this project, I show my knowledge of React without
                using third-party libraries like Redux or TypeScript.
                I use various hooks like useState, useRef, useContext,
                useEffect, and created my own: useFetching, usePosts,
                useObserver. Also for getting API I use axios and for
                dynamic page navigation react-router-dom.
            </p>
            <p className={styles.thanks}>
                Thank you for visiting the project &#10084;
                Don't forget to visit the rest
            </p>
        </div>

    )
}

export default About
