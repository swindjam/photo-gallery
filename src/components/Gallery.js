import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import GalleryItem from './GalleryItem';
import styles from './gallery.scss';


export default class extends React.Component {

  constructor(props) {
    super(props);
    const images = [
      {
        title: 'Blackpool Tower',
        url: '/images/Blackpool_Tower.jpg'
      },
      {
        title: 'Ben Nevis',
        url: '/images/Ben_Nevis.jpg'
      },
      {
        title: 'Ystradfellte',
        url: '/images/Ystradfellte.jpg'
      }
    ];
    const imageIndex = 0;

    this.state = {
      images,
      selectedImage: images[imageIndex],
      imageIndex,
      showProgress: true
    }
  }

  componentDidMount() {
    const interval = window.setInterval(this.changeImage.bind(this), 5000);

    this.setState({
      interval
    });
  }

  changeImage() {
    let {images, imageIndex} = this.state;

    this.setState({
      showProgress: false
    });

    window.setTimeout(() => {
        if(imageIndex === (images.length - 1)) {
          imageIndex = 0;
        } else {
          imageIndex++;
        }

        this.setState({
          imageIndex,
          selectedImage: images[imageIndex],
          showProgress: true
        });
      }, 2000);
  }

    render() {
      const {selectedImage, showProgress} = this.state;

        return(
            <div className={styles['container']}>
              <ReactCSSTransitionGroup  transitionName={{
                appear: styles['appear'],
                appearActive: styles['appear-active'],
                enter: styles['enter'],
                enterActive: styles['enter-active'],
                leave: styles['leave'],
                leaveActive: styles['leave-active']
              }}
                                        transitionAppear={true}
                                        transitionAppearTimeout={2000}
                                        transitionEnter={true}
                                        transitionEnterTimeout={2000}
                                        transitionLeave={true}
                                        transitionLeaveTimeout={2000}
              >
                {selectedImage ? <GalleryItem image={selectedImage} key={selectedImage.title}/>: null}
              </ReactCSSTransitionGroup>
              <ReactCSSTransitionGroup  transitionName={{
                appear: styles['progress-appear'],
                appearActive: styles['progress-appear-active'],
                enter: styles['enter-progress'],
                enterActive: styles['enter-progress-active']
              }}
                                        transitionAppear={true}
                                        transitionAppearTimeout={4000}
                                        transitionEnter={true}
                                        transitionEnterTimeout={4000}
                                        transitionLeave={false}
              >
                {showProgress ? <div className={styles['progress-bar']} key="progress"></div> : null}
              </ReactCSSTransitionGroup>
            </div>
        )
    }

}
