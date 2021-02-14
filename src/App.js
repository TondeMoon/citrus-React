import React from 'react';
import { Parallax } from 'react-parallax';

import Header from './Header';
import './App.css';
import image1 from './../src/images/lemons.jpeg';
import image2 from './../src/images/pomelo.jpeg';
import image3 from './../src/images/grapef.jpeg';
import image4 from './../src/images/citrus1.jpeg';
import image5 from './../src/images/lime.jpeg';

const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
  fontSize: '30px',
};

function App() {
  return (
    <div className="page">
      <Header />
      <Parallax bgImage={image1} strength={500} pagination>
        <div style={{ height: '50vh' }}>
          <div style={inlineStyle}>Цитрусовые</div>
        </div>
      </Parallax>
      <div style={{ height: '20vh' }}>
        <div className="citrus-description">
          Ци́трус (лат. Citrus) — род вечнозелёных деревьев и кустарников
          семейства Рутовые (Rutaceae). Входит в подтрибу Цитрусовые (Citrinae)
          трибы Померанцевые (Aurantieae) подсемейства Померанцевые
          (Aurantioideae).
        </div>
      </div>

      <Parallax bgImage={image2} strength={500}>
        <div style={{ height: '500px' }}>
          <div style={inlineStyle}>Мандарин</div>
        </div>
      </Parallax>

      <div style={{ height: '10vh' }}></div>

      <Parallax bgImage={image3} strength={500}>
        <div style={{ height: '500px' }}>
          <div style={inlineStyle}>Грейпфрут</div>
        </div>
      </Parallax>

      <div style={{ height: '10vh' }}></div>

      <Parallax bgImage={image4} strength={500}>
        <div style={{ height: '500px' }}>
          <div style={inlineStyle}>Апельсин</div>
        </div>
      </Parallax>

      <div style={{ height: '10vh' }}></div>

      <Parallax bgImage={image5} strength={500}>
        <div style={{ height: '500px' }}>
          <div style={inlineStyle}>Лайм</div>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
