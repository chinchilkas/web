import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from '../styles/ApplyButton.module.css';

const ApplyButton = () => {
    return (
        <Button
            variant="primary" className={styles.apply}>
            Apply
        </Button>
    );
};

export default ApplyButton;