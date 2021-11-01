import { RichText } from "prismic-reactjs";

import React from "react";
import Lightbox from "react-image-lightbox";

class InstallationLightbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      installations: this.props.installations,
      photoIndex: this.props.index,
      isOpen: false,
    };
  }

  handleClick = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { photoIndex, isOpen } = this.state;
    const { item, installations } = this.props;

    return (
      <>
        <div
          className="collection-item"
          key={item.id}
          onClick={this.handleClick}
        >
          <img src={item.src} alt={item.alt} />
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
            mainSrc={
              installations[photoIndex].title &&
              installations[photoIndex].source_image.url
            }
            nextSrc={
              installations[(photoIndex + 1) % installations.length]
                .source_image.url
            }
            prevSrc={
              installations[
                (photoIndex + installations.length - 1) % installations.length
              ].source_image.url
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + installations.length - 1) %
                  installations.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % installations.length,
              })
            }
            imageCaption={RichText.asText(installations[photoIndex].title)}
            animationDisabled
            enableZoom={false}
          />
        )}
      </>
    );
  }
}

export default InstallationLightbox;
