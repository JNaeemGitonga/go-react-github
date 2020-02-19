import React from 'react';
import styles from './App.module.css';
import Entry from './components/Entry';

const App = () => {
    return (
        <div className={styles.App}>
            <Entry />
        </div>
    );
};

export default App;
