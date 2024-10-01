'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';

export default function index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);
    const [localTime, setLocalTime] = useState('');

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    const updateTime = () => {
        const now = new Date();
        setLocalTime(now.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}));
      };
    
      useEffect(() => {
        updateTime();
        const interval = setInterval(updateTime, 1000);
    
        return () => clearInterval(interval);
      }, []);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
            }
        })
    }, [])

    

    return (
        <>
        <div ref={header} className={styles.header}>
            <div className={styles.logo}>
                <p className={styles.copyright}>©</p>
                <div className={styles.name}>
                    <p>Raul Javier</p>
                </div>
            </div>

            <div className={styles.logo}>
                <div className={styles.localTime}>
                    <p>{localTime}</p>
                </div>
            </div>

            <div className={styles.navUnderline}>
                    <div className={styles.el}>
                        <a>Work</a>
                    </div>
                    <div className={styles.el}>
                        <a>About</a>
                    </div>
                    <div className={styles.el}>
                        <a>Contact</a>
                    </div>
            </div>
        </div>
        <div ref={button} className={styles.headerButtonContainer}>
            <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
        </>
    )
}
