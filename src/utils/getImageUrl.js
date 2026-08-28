import { constructFromSymbol } from "date-fns/constants";

export let ImagePath;

(function (ImagePath) {
  ImagePath['LANDING'] = 'landing';
  ImagePath['USER'] = 'user';
  ImagePath['ECOMMERCE'] = 'e-commerce';
  ImagePath['PROFILE'] = 'profile';
  ImagePath['TRADEMARK'] = 'trademark';  
})(ImagePath || (ImagePath = {}));

// ==============================|| UTIL - GET IMAGE URL ||============================== //

export function getImageUrl(name, path, dir = 'system') {

  if(name == 'null' || name == undefined || name == 'undefined')
    return new URL(`/public/${path}/no-img.png`, import.meta.url).href;
  else {
    if(dir === 'system') 
      return new URL(`/src/assets/images/${path}/${name}`, import.meta.url).href;
    else //public
      return new URL(`/public/${path}/${name}`, import.meta.url).href;
  }
}
