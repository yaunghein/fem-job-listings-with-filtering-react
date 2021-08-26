import { useState, useEffect } from 'react';
import { Section } from '../Global-Containers';
import { Image, Wrapper } from './DecoImage-Styles';
import DecoImageDesktop from '../../images/bg-header-desktop.svg';
import DecoImageMobile from '../../images/bg-header-mobile.svg';

const DecoImage = () => {
  const [decoImage, setDecoImage] = useState(DecoImageDesktop);

  const changeDecoImage = () => {
    window.innerWidth <= 786 ? setDecoImage(DecoImageMobile) : setDecoImage(DecoImageDesktop);
  };

  useEffect(() => {
    changeDecoImage();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', changeDecoImage);
    return () => window.removeEventListener('resize', changeDecoImage);
  }, []);

  return (
    <Section bg='dark-cyan'>
      <Wrapper>
        <Image src={decoImage} alt='decorated image' />
      </Wrapper>
    </Section>
  );
};
export default DecoImage;
//Ask whether using two useEffect in this case is OK or not
