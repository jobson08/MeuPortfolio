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
  // ==================Conteudo Main title css==============================
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
  // ==================Conteudo Main title css==============================
  // ==================Componente NavBar css==============================
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
  // ==================Componente NavBar css==============================
  // ==================Componente Banner Home css==============================
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
  'texto-banner': {
    fontSize: [{ unit: 'px', value: 30 }]
  },
  // ==================Componente Banner Home css==============================
  // ==================Pagina Home css==============================
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
  // ==================Pagina Home css==============================
  // ==================Pagina Sobre css==============================
  latest_news_area: {
    marginTop: [{ unit: 'px', value: 100 }],
    textAlign: 'center',
    marginBottom: [{ unit: 'px', value: 20 }]
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
  // ==================Pagina Sobre css==============================
  // ==================Componente Banner Sevico css==============================
  service_area: {
    marginTop: [{ unit: 'px', value: 50 }],
    background: 'url(../img/service-bg.jpg) no-repeat fixed center center',
    backgroundSize: 'cover',
    position: 'relative',
    zIndex: '2',
    padding: [{ unit: 'px', value: 115 }, { unit: 'px', value: 0 }, { unit: 'px', value: 115 }, { unit: 'px', value: 0 }]
  },
  // ==================Componente Banner Sevico css==============================
  // ==================Pagina Sevico css==============================
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
    fontSize: [{ unit: 'px', value: 17 }],
    lineHeight: [{ unit: 'px', value: 26 }],
    fontFamily: '"Poppins", sans-serif',
    maxWidth: [{ unit: 'px', value: 360 }],
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }]
  },
  // ==================Pagina Sevico css==============================
  // ==================Plano de servico Css==============================
  'pricing-plane-area': {
    background: '#f5f9fc'
  },
  'titulo >h2': {
    color: '#5b32b4',
    margin: [{ unit: 'px', value: 30 }, { unit: 'px', value: 30 }, { unit: 'px', value: 30 }, { unit: 'px', value: 30 }],
    fontSize: [{ unit: 'px', value: 50 }]
  },
  'single-price-plan': {
    background: '#ffffff',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ebebeb' }],
    borderRadius: '30px 30px 30px 0',
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  'single-price-plan package-plan': {
    padding: [{ unit: 'px', value: 70 }, { unit: 'px', value: 0 }, { unit: 'px', value: 70 }, { unit: 'px', value: 0 }],
    borderRadius: '30px 30px 0 0'
  },
  'single-price-plan package-plan > h5': {
    color: '#5b32b4',
    fontSize: [{ unit: 'px', value: 18 }]
  },
  'single-price-plan package-plan ca-price h4': {
    color: '#fb397d',
    fontSize: [{ unit: 'px', value: 48 }],
    position: 'relative',
    zIndex: '1',
    marginBottom: [{ unit: 'px', value: 0 }],
    lineHeight: [{ unit: 'px', value: 1 }]
  },
  'single-price-plan package-plan ca-price span': {
    fontSize: [{ unit: 'px', value: 18 }],
    color: '#fb397d'
  },
  'single-price-plan plan-button > a': {
    background: '#726a84',
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 0 }, { unit: 'px', value: 15 }, { unit: 'px', value: 0 }],
    borderBottomRightRadius: '30px',
    color: '#ffffff',
    fontSize: [{ unit: 'px', value: 16 }],
    fontWeight: '500',
    display: 'block',
    WebkitTransitionDuration: '500ms',
    OTransitionDuration: '500ms',
    transitionDuration: '500ms'
  },
  'single-price-plan package-description > p': {
    marginBottom: [{ unit: 'px', value: 0 }],
    lineHeight: [{ unit: 'px', value: 1 }],
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 0 }, { unit: 'px', value: 15 }, { unit: 'px', value: 0 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ebebeb' }]
  },
  'single-price-plan package-description > p:first-child': {
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ebebeb' }]
  },
  'single-price-plan:hover package-plan': {
    backgroundColor: '#a865e1'
  },
  'single-price-plan:hover plan-button > a': {
    backgroundColor: '#a865e1'
  },
  'single-price-plan:hover plan-button > a': {
    backgroundColor: '#a865e1'
  },
  'single-price-plan:hover package-plan ca-price > h4': {
    color: '#fff'
  },
  'single-price-plan:hover package-plan ca-price > span': {
    color: '#fff'
  },
  'single-price-plan:hover package-plan > h5': {
    color: '#fff'
  },
  'single-price-plan:hover plan-button > a': {
    color: '#fff'
  },
  // ==================Plano de servico Css==============================
  // ==================Componente Banner Contato css==============================
  banner_contato: {
    background: 'url(../img/slider-1.jpg) no-repeat fixed center center',
    backgroundSize: 'cover',
    position: 'relative',
    zIndex: '2',
    padding: [{ unit: 'px', value: 115 }, { unit: 'px', value: 0 }, { unit: 'px', value: 115 }, { unit: 'px', value: 0 }]
  }
});
