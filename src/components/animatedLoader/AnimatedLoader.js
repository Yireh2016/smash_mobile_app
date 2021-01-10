/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View, Modal, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import LottieAnimation from 'lottie-react-native';

export default class AnimatedLoader extends React.PureComponent {
  constructor(props) {
    super(props);
    this._renderLottie = this._renderLottie.bind(this);
    this.styles = StyleSheet.create({
      titleContainer: {
        flex: 1,
      },
      container: {
        flex: 1,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
      },
      animationStyle: {
        height: '100%',
        width: '100%',
      },
    });
  }

  static defaultProps = {
    visible: false,
    overlayColor: 'rgba(0, 0, 0, 0.25)',
    animationType: 'none',
    source: undefined,
    animationStyle: {},
    speed: 1,
    loop: true,
  };

  static propTypes = {
    visible: PropTypes.bool,
    overlayColor: PropTypes.string,
    animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
    source: PropTypes.object,
    animationStyle: ViewPropTypes.style,
    speed: PropTypes.number,
    loop: PropTypes.bool,
    isTest: PropTypes.bool,
  };

  animation = React.createRef();

  componentDidMount() {
    if (this.animation.current) {
      this.animation.current.play();
    }
  }

  componentDidUpdate(previousProps) {
    const { visible } = this.props;
    if (visible !== previousProps.visible) {
      if (this.animation.current) {
        this.animation.current.play();
      }
    }
  }

  _renderLottie = () => {
    const { source, animationStyle, speed, loop } = this.props;
    return (
      <>
        {source && (
          <LottieAnimation
            ref={this.animation}
            source={source}
            loop={loop}
            speed={speed}
            style={[this.styles.animationStyle, animationStyle]}
          />
        )}
      </>
    );
  };

  render() {
    const { visible, overlayColor, animationType, title, message } = this.props;
    return (
      <Modal
        transparent
        visible={visible}
        animationType={animationType}
        supportedOrientations={['portrait']}
        onRequestClose={() => {}}
      >
        <View
          style={[this.styles.container, { backgroundColor: overlayColor }]}
        >
          {title && (
            <View
              style={{
                width: 200,
                flex: 1,
                justifyContent: 'flex-end',
              }}
            >
              {title}
            </View>
          )}
          <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {this._renderLottie()}
          </View>
          {message && (
            <View
              style={{
                width: 216,
                flex: 1,
                justifyContent: 'flex-start',
              }}
            >
              {message}
            </View>
          )}
        </View>
      </Modal>
    );
  }
}
