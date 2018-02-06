import React from 'react';
import styles from './gallery-item.scss';


export default ({image}) => {

    return(
      <div className={styles['container']}>
        <div className={styles['title-box']}></div>
      	<h3 className={styles['title']}>{image.title}</h3>
        <img className={styles['image']} src={image.url} />
      </div>
    );

};
