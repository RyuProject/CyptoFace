import React from 'react';
import styles from './Popup.module.scss';

const popup :React.FC<{switch:boolean, title:string, message:string }> = ({ title,message }) => (
    <div className={styles.warp}>
    <div className={styles.mask}></div>
    <div className={styles.popup_body}>
        <div className={styles.popup_header}>
            <div className={styles.popup_title}>{title}</div>
        </div>
    </div>
    </div>
    // <div> {message} </div>
);

export default popup;