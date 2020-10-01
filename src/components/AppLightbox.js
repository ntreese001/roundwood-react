import React from "react"
import Lightbox from "react-image-lightbox"
import { galleries } from '../data'

class AppLightbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: this.props.index,
      isOpen: false,
    };
  }

  handleClick = () => {
    this.setState({ isOpen: true })
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const { item } = this.props;
    return (
      <>
        <div className="collection-item" key={item.id} onClick={this.handleClick}>
          <img src={item.src} alt={item.alt} />
          {item.title && <div className="image-overlay">
            {item.text && <p>{item.text}
              {item.textSpan
                ? <><span>{item.textSpan}</span><br /><span>&amp;</span><br /><span>{item.textSpan2}</span></>
                : null
              }
            </p>}
          </div>}
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={galleries[photoIndex].src}
            nextSrc={galleries[(photoIndex + 1) % galleries.length].src}
            prevSrc={galleries[(photoIndex + galleries.length - 1) % galleries.length].src}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + galleries.length - 1) % galleries.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % galleries.length,
              })
            }
            imageCaption={galleries[photoIndex].title}
            animationDisabled
            enableZoom={false}
          />
        )}
      </>
    );
  }
}

export default AppLightbox