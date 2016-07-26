require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
//获取图片相关数据
var imageDatas = require('../data/tsconfig.json');


//利用自执行函数 ,将图片名信息转换为URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {

  for (var i = 0; i < imageDatasArr.length; i++) {
    var singleImageData = imageDatasArr[i];
    singleImageData.imageUrl = require('../images/' + singleImageData.fileName);

    imageDatasArr[i] = singleImageData;
  }

  return imageDatasArr;
})(imageDatas);

class ImgFigure extends React.Component {
  render() {
    return (
      <figure>
        <img/>

        <figcaption>
          <h2>

          </h2>
        </figcaption>
      </figure>
    )
  }
}
class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
