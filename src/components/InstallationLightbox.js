import React from "react"
import Lightbox from "react-image-lightbox"
import { installations } from '../data'

class InstallationLightbox extends React.Component {
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
          <img src={item.thumbnail || item.src} alt={item.alt} />
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
            mainSrc={installations[photoIndex].title && installations[photoIndex].src}
            nextSrc={installations[(photoIndex + 1) % installations.length].src}
            prevSrc={installations[(photoIndex + installations.length - 1) % installations.length].src}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + installations.length - 1) % installations.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % installations.length,
              })
            }
            imageCaption={installations[photoIndex].title}
            animationDisabled
            enableZoom={false}
          />
        )}
      </>
    );
  }
}

export default InstallationLightbox