import { RichText } from "prismic-reactjs";

import React from "react";
import Lightbox from "react-image-lightbox";

class AppLightbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: this.props.gallery,
      photoIndex: this.props.index,
      isOpen: false,
    };
  }

  handleClick = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { photoIndex, isOpen } = this.state;
    const { item, gallery } = this.props;

    return (
      <>
        <div
          className="collection-item"
          key={item.title}
          onClick={this.handleClick}
        >
          <img src={item.thumbnail || item.src} alt={item.alt} />
          {item.title && (
            <div className="image-overlay">
              {item.text && (
                <p>
                  {item.text}
                  {item.textSpan ? (
                    <>
                      <span>{item.textSpan}</span>
                      <br />
                      <span>&amp;</span>
                      <br />
                      <span>{item.textSpan2}</span>
                    </>
                  ) : null}
                </p>
              )}
            </div>
          )}
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={gallery[photoIndex].source_image.url}
            nextSrc={
              gallery[(photoIndex + 1) % gallery.length].source_image.url
            }
            prevSrc={
              gallery[(photoIndex + gallery.length - 1) % gallery.length]
                .source_image.url
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + gallery.length - 1) % gallery.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % gallery.length,
              })
            }
            imageCaption={RichText.asText(gallery[photoIndex].gallery_title)}
            animationDisabled
            enableZoom={false}
          />
        )}
      </>
    );
  }
}

export default AppLightbox;
