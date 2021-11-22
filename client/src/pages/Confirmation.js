import React from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

const canvasStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
}

export default class ConfirmationPage extends React.Component {
    constructor(props) {
        super(props);
        this.isAnimationEnabled = false;
        this.animationInstance = null;
        this.intervalId = null;
    }

    getAnimationSettings(originXA, originXB) {
        return {
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 0,
            particleCount: 150,
            origin: {
                x: randomInRange(originXA, originXB),
                y: Math.random() - 0.2
            }
        }
    }

    nextTickAnimation = () => {
        this.animationInstance && this.animationInstance(this.getAnimationSettings(0.1, 0.3));
        this.animationInstance && this.animationInstance(this.getAnimationSettings(0.7, 0.9));
    }

    startAnimation() {
        if (!this.isAnimationEnabled) {
            this.isAnimationEnabled = true;
            this.intervalId = setInterval(this.nextTickAnimation, 400);
        }
    }

    pauseAnimation() {
        this.isAnimationEnabled = false;
        return this.intervalId && clearInterval(this.intervalId);
    }

    stopAnimation() {
        this.isAnimationEnabled = false;
        this.animationInstance && this.animationInstance.reset();
        return this.intervalId && clearInterval(this.intervalId);
    }

    handlerClickStart = () => {
        this.startAnimation();
    }

    handlerClickPause = () => {
        this.pauseAnimation();
    }

    handlerClickStop = () => {
        this.stopAnimation();
    }

    componentWillUnmount() {
        this.isAnimationEnabled = false;
        this.intervalId && clearInterval(this.intervalId);
    }

    getInstance = (instance) => {
        this.animationInstance = instance
    }
    componentDidMount = () => {
        this.startAnimation();
        setTimeout(() => {
            this.stopAnimation();
        }, 10000);
    }

    render() {
        return (
            <div className="page">
                <div className="container-fluid">
                    <div className="jumbotron confirm-jumbo mt-5">
                        <h1 className="display-2 confirm-title">Congratulations! You have booked the subscription</h1>
                        <p className="lead">Your confirmation ID is XXXXXXXXX</p>
                        <ReactCanvasConfetti refConfetti={this.getInstance} style={canvasStyles} />
                    </div>
                </div>
            </div>
        );
    }
}