import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class Loading extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.spinner)} />
      </div>
    );
  }
}

const spin = {
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    borderRadius: '2%',
    backgroundColor: 'white',
  },
  spinner: {
    border: '0.5vw solid #BBDEFB',
    borderTop: '0.5vw solid #2196F3',
    borderRadius: '50%',
    width: '4vw',
    margin: '3vh 1vw 3vh 1vw',
    height: '4vw',
    animationName: [spin],
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
});
