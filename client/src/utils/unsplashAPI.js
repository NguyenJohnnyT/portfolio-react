export const unsplashAPI = async () => {

  if (!process.env.REACT_APP_UNSPLASH_API_KEY || process.env.NODE_ENV !== "production") {
    console.error("Development build only: NO UNSPLASH API KEY || NOT PROD!");
    return [];
  };

  let imageURLs = [];
  var unsplashURL = `https://api.unsplash.com/collections/i-X3O5Jac7E/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;
  try {
    const response = await fetch(unsplashURL);
    const data = await response.json();
    data.forEach(apiResult => {
      imageURLs.push(apiResult.urls.regular)
    });
    let randomIdx =  Math.floor(Math.random()*imageURLs.length);
    return imageURLs[randomIdx]
  } catch (err) {
    console.error(err);
  }
}