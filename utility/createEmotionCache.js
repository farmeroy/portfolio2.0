import createCache from '@emotion/cache';

// this file helps to properely apply our css styles

const createEmotionCache = () => {
  return createCache({ key: 'css' });
};

export default createEmotionCache;
