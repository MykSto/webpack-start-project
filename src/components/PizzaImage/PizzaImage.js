import React from 'react';

import pizzaImage from '../../assets/pizza.jpg';

import styles from './PizzaImage.css';

const pizzaImage = (props) => {
    <div className={StyleSheet.PizzaImage}>
        <img src={pizzaImage} className={styles.PizzaImg} />
    </div>
};

export default pizzaImage;
