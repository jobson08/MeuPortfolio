import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  body: {
    lineHeight: [{ unit: 'px', value: 26 }],
    fontSize: [{ unit: 'px', value: 14 }],
    fontFamily: '"Poppins", sans-serif'
  },
  body: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'p': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  h1: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  h2: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  h3: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  h4: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  h5: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  h6: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  // Main title css
============================================================================================
  'main_title h2': {
    fontSize: [{ unit: 'px', value: 40 }],
    lineHeight: [{ unit: 'px', value: 48 }],
    fontFamily: '"Poppins", sans-serif',
    color: '#232d37',
    fontWeight: '500'
  },
  'main_title p': {
    fontSize: [{ unit: 'px', value: 16 }],
    color: '#51545f',
    fontFamily: '"Poppins", sans-serif',
    lineHeight: [{ unit: 'px', value: 26 }],
    paddingTop: [{ unit: 'px', value: 15 }]
  },
  center_title: {
    color: '#fff',
    textAlign: 'center',
    paddingBottom: [{ unit: 'px', value: 40 }]
  },
  'center_title h2': {
    fontSize: [{ unit: 'px', value: 40 }],
    fontFamily: '"Poppins", sans-serif',
    fontWeight: '500'
  },
  'center_title p': {
    fontSize: [{ unit: 'px', value: 16 }],
    color: '#fff',
    fontFamily: '"Poppins", sans-serif',
    lineHeight: [{ unit: 'px', value: 26 }],
    paddingTop: [{ unit: 'px', value: 10 }]
  },
  b_center_title: {
    textAlign: 'center',
    paddingBottom: [{ unit: 'px', value: 50 }]
  },
  'b_center_title h2': {
    fontSize: [{ unit: 'px', value: 40 }],
    fontFamily: '"Poppins", sans-serif',
    fontWeight: '500',
    color: '#232d37'
  },
  'b_center_title p': {
    fontSize: [{ unit: 'px', value: 16 }],
    color: '#fff',
    fontFamily: '"Poppins", sans-serif',
    lineHeight: [{ unit: 'px', value: 26 }],
    paddingTop: [{ unit: 'px', value: 10 }],
    color: '#51545f'
  },
  // Main title css
============================================================================================
  // --------------------------
:NavBar Area CSS
--------------------------
  'navbar-nav li a:hover': {
    color: '#009688  !important',
    // cor prymatia
    backgroundColor: '#fff !important',
    borderRadius: '10px'
  },
  'navbar-nav liactive a': {
    color: '#009688  !important',
    // cor prymatia
    backgroundColor: '#fff !important',
    borderRadius: '10px'
  },
  // --------------------------
:: Banner Area CSS
--------------------------
  banner_area: {
    background: 'url(../img/Paisagem.jpg) no-repeat fixed center center',
    backgroundSize: 'cover',
    position: 'relative',
    zIndex: '2',
    padding: [{ unit: 'px', value: 115 }, { unit: 'px', value: 0 }, { unit: 'px', value: 115 }, { unit: 'px', value: 0 }],
    height: [{ unit: 'px', value: 700 }]
  },
  banner_contato: {
    background: 'url(../img/slider-1.jpg) no-repeat fixed center center',
    backgroundSize: 'cover',
    position: 'relative',
    zIndex: '2',
    padding: [{ unit: 'px', value: 115 }, { unit: 'px', value: 0 }, { unit: 'px', value: 115 }, { unit: 'px', value: 0 }]
  },
  'banner-heading > h2': {
    fontSize: [{ unit: 'px', value: 100 }],
    color: '#ffffff',
    fontWeight: '500',
    position: 'relative',
    zIndex: '3'
  },
  'banner-heading > p': {
    color: '#fff'
  },
  'banner-heading > h3': {
    fontSize: [{ unit: 'px', value: 332 }],
    position: 'absolute',
    top: [{ unit: 'px', value: -134 }],
    fontWeight: '900',
    left: [{ unit: 'px', value: -12 }],
    zIndex: '-1',
    color: '#fff',
    opacity: '.1',
    MsFilter: '"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)"'
  },
  // Creative Feature Area css
============================================================================================
  creative_feature_area: {
    background: '#f7f7f7'
  },
  c_feature_box: {
    WebkitBoxShadow: '0px 25px 49px 0px rgba(58, 74, 88, 0.1)',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 25 }, { unit: 'px', value: 49 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(58, 74, 88, 0.1)' }],
    borderRadius: '2px',
    background: '#fff',
    padding: [{ unit: 'px', value: 45 }, { unit: 'px', value: 0 }, { unit: 'px', value: 45 }, { unit: 'px', value: 0 }],
    marginTop: [{ unit: 'px', value: -100 }],
    zIndex: '22',
    position: 'relative'
  },
  'c_feature_box col-lg-4:last-child c_box_item:before': {
    display: 'none'
  },
  c_box_item: {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 35 }, { unit: 'px', value: 0 }, { unit: 'px', value: 40 }],
    position: 'relative'
  },
  'c_box_item:before': {
    content: '""',
    background: '#e5e5e5',
    height: [{ unit: 'px', value: 145 }],
    width: [{ unit: 'px', value: 1 }],
    position: 'absolute',
    right: [{ unit: 'px', value: -15 }],
    top: [{ unit: 'px', value: 0 }]
  },
  'c_box_item h4': {
    fontSize: [{ unit: 'px', value: 20 }],
    color: '#232d37',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: '500',
    lineHeight: [{ unit: 'px', value: 36 }],
    paddingBottom: [{ unit: 'px', value: 10 }],
    WebkitTransition: 'all 400ms linear 0s',
    OTransition: 'all 400ms linear 0s',
    transition: 'all 400ms linear 0s'
  },
  'c_box_item h4 i': {
    paddingRight: [{ unit: 'px', value: 10 }],
    color: '#2bc0a4'
  },
  'c_box_item h4:hover': {
    color: '#2bc0a4'
  },
  'c_box_item p': {
    fontSize: [{ unit: 'px', value: 14 }],
    lineHeight: [{ unit: 'px', value: 26 }],
    color: '#51545f',
    fontFamily: '"Poppins", sans-serif'
  },
  digital_feature: {
    marginTop: [{ unit: 'px', value: 50 }]
  },
  'd_feature_text main_title': {
    paddingBottom: [{ unit: 'px', value: 20 }]
  },
  'd_feature_text p': {
    fontSize: [{ unit: 'px', value: 14 }],
    color: '#51545f',
    fontFamily: '"Poppins", sans-serif',
    lineHeight: [{ unit: 'px', value: 26 }],
    paddingBottom: [{ unit: 'px', value: 12 }]
  },
  'd_feature_text p + p': {
    paddingBottom: [{ unit: 'px', value: 0 }]
  },
  'd_feature_text read_btn': {
    marginTop: [{ unit: 'px', value: 34 }]
  },
  d_feature_img: {
    paddingLeft: [{ unit: 'px', value: 70 }]
  },
  // End Creative Feature Area css
============================================================================================
  // Latest News Area css
============================================================================================
  latest_news_area: {
    marginTop: [{ unit: 'px', value: 100 }],
    textAlign: 'center'
  },
  l_news_item: {
    WebkitTransition: 'all 400ms linear 0s',
    OTransition: 'all 400ms linear 0s',
    transition: 'all 400ms linear 0s'
  },
  'l_news_item l_news_img': {
    overflow: 'hidden'
  },
  'l_news_item l_news_img a': {
    display: 'block'
  },
  'l_news_item l_news_img img': {
    WebkitTransition: 'all 400ms linear 0s',
    OTransition: 'all 400ms linear 0s',
    transition: 'all 400ms linear 0s'
  },
  'l_news_item l_news_img img:hover': {
    WebkitTransform: 'scale(1.05)',
    MsTransform: 'scale(1.05)',
    transform: 'scale(1.05)'
  },
  'l_news_item l_news_content': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ebebeb' }],
    borderTop: [{ unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 30 }, { unit: 'px', value: 35 }, { unit: 'px', value: 30 }, { unit: 'px', value: 35 }]
  },
  'l_news_item l_news_content h4': {
    fontSize: [{ unit: 'px', value: 18 }],
    color: '#232d37',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: '500',
    WebkitTransition: 'all 400ms linear 0s',
    OTransition: 'all 400ms linear 0s',
    transition: 'all 400ms linear 0s'
  },
  'l_news_item l_news_content h4:hover': {
    color: '#2bc0a4'
  },
  'l_news_item l_news_content p': {
    fontSize: [{ unit: 'px', value: 14 }],
    lineHeight: [{ unit: 'px', value: 26 }],
    color: '#51545f',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: '400',
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }]
  },
  'l_news_item:hover': {
    WebkitBoxShadow: '0px 25px 49px 0px rgba(58, 74, 88, 0.1)',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 25 }, { unit: 'px', value: 49 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(58, 74, 88, 0.1)' }]
  },
  // Latest News Area css
============================================================================================
  // Our Service Area css
============================================================================================
  service_area: {
    marginTop: [{ unit: 'px', value: 50 }],
    background: 'url(../img/service-bg.jpg) no-repeat fixed center center',
    backgroundSize: 'cover',
    position: 'relative',
    zIndex: '2',
    padding: [{ unit: 'px', value: 115 }, { unit: 'px', value: 0 }, { unit: 'px', value: 115 }, { unit: 'px', value: 0 }]
  },
  'service_area:before': {
    content: '""',
    background: 'rgba(4, 8, 29, 0.7)',
    position: 'absolute',
    left: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 0 }],
    zIndex: '-1',
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }]
  },
  service_item: {
    textAlign: 'center',
    color: '#fff'
  },
  'service_item i': {
    backgroundImage: '-moz-linear-gradient(180deg, #20d497 0%, #744fff 100%)',
    backgroundImage: '-webkit-linear-gradient(180deg, #20d497 0%, #744fff 100%)',
    backgroundImage: '-ms-linear-gradient(180deg, #20d497 0%, #744fff 100%)',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    fontSize: [{ unit: 'px', value: 40 }]
  },
  'service_item h4': {
    fontSize: [{ unit: 'px', value: 20 }],
    fontFamily: '"Poppins", sans-serif',
    fontWeight: '500',
    padding: [{ unit: 'px', value: 18 }, { unit: 'px', value: 0 }, { unit: 'px', value: 12 }, { unit: 'px', value: 0 }]
  },
  'service_item p': {
    fontSize: [{ unit: 'px', value: 14 }],
    lineHeight: [{ unit: 'px', value: 26 }],
    fontFamily: '"Poppins", sans-serif',
    maxWidth: [{ unit: 'px', value: 360 }],
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }]
  },
  // End Our Service Area css
============================================================================================
  // Border Button Area css
============================================================================================
  read_btn: {
    height: [{ unit: 'px', value: 46 }],
    width: [{ unit: 'px', value: 160 }],
    lineHeight: [{ unit: 'px', value: 48 }],
    color: '#232d37',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: '600',
    fontSize: [{ unit: 'px', value: 13 }],
    textTransform: 'uppercase',
    backgroundImage: '-webkit-gradient(linear, left top, right top, from(#744fff), color-stop(51%, #21d397), to(#744fff))',
    backgroundImage: '-webkit-linear-gradient(left, #744fff 0%, #21d397 51%, #744fff 100%)',
    backgroundImage: '-o-linear-gradient(left, #744fff 0%, #21d397 51%, #744fff 100%)',
    backgroundImage: 'linear-gradient(to right, #744fff 0%, #21d397 51%, #744fff 100%)',
    textAlign: 'center',
    position: 'relative',
    backgroundSize: '200% auto',
    zIndex: '2',
    display: 'block',
    WebkitTransition: 'all 400ms ease-out',
    OTransition: 'all 400ms ease-out',
    transition: 'all 400ms ease-out'
  },
  'read_btn:before': {
    content: '""',
    background: '#f7f7f7',
    position: 'absolute',
    left: [{ unit: 'px', value: 2 }],
    top: [{ unit: 'px', value: 2 }],
    width: [{ unit: '%H', value: 0.98 }],
    height: [{ unit: 'px', value: 42 }],
    zIndex: '-1',
    WebkitTransition: 'all 400ms linear 0s',
    OTransition: 'all 400ms linear 0s',
    transition: 'all 400ms linear 0s'
  },
  'read_btn:hover': {
    backgroundPosition: 'right center',
    color: '#232d37'
  },
  // Border Button Area css
============================================================================================
  // --------------------------
:: Banner Contato CSS
--------------------------
  banner_contato: {
    background: 'url(../img/slider-1.jpg) no-repeat fixed center center',
    backgroundSize: 'cover',
    position: 'relative',
    zIndex: '2',
    padding: [{ unit: 'px', value: 115 }, { unit: 'px', value: 0 }, { unit: 'px', value: 115 }, { unit: 'px', value: 0 }]
  }
});
