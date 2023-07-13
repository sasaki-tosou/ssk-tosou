import React, { useState } from 'react';
import * as styles from '../css/embedyoutube.module.scss';

const EmbedYoutube = ({ id }) => {
  const [isThumbnail, setIsThumbnail] = useState(true);

  const handleClick = () => {
    setIsThumbnail(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      setIsThumbnail(false);
    }
  };

  return (
    <div className={styles.youtubewrapper}>
      {isThumbnail ? (
        <div
          className={styles.youtube}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label="サムネイル"
        >
          <img
            loading="lazy"
            src="/images/maxresdefault.webp"
            alt="サムネイル"
          />
        </div>
      ) : (
        <iframe
          className={styles.youtube}
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default EmbedYoutube;
