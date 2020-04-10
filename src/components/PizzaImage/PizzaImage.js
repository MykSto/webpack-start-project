import React from 'react';

import pizzaPic from '../../assets/pizza.jpg';

import styles from './PizzaImage.css';

const pizzaImage = (props) => {
    return(
    <div className={StyleSheet.PizzaImage}>
        <img src={pizzaPic} className={styles.PizzaImg} />
    </div>
    );
};

export default pizzaImage;
