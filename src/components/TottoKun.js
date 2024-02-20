import React, { useEffect, useState } from 'react';

const TottoKun = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    setIsBottom(bottom);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={`totto_kun ${isMobile ? (isBottom ? 'fade-out' : 'fade-in') : ''}`}>
        <a href='https://www.chatbase.co/chatbot-iframe/l8HAJ5b0D-EA21iPuJ_v0' target='_blank' rel='noopenner noreferrer'>
          <img src='/images/totto_s0203.gif' height={260} loading='lazy' alt='AIとっとくんの画像' />
        </a>
      </div>
    </>
  );
};

export default TottoKun;