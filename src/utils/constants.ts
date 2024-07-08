export const resizeImage = (url: string, width = '', height = '') =>
  `//wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&h=${height}&fit=outside`;

export const getPathImage = (pathImage: string, path: string) => `${pathImage}${path}`;
