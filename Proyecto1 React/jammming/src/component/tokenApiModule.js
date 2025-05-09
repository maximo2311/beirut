//TODO ESTE MODULO ES PRACTICAMENTE OBSOLETO HASTA RESOLVER EL PEO DEL TOKEN!!!
/*const CLIENT_ID = "18f20e42f0524fd8b01cd4c908ad7a72";
const REDIRECT_URI = "https://maximo2311.github.io/jammming/"; // La misma que configures en Spotify
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "code";
const SCOPE = encodeURIComponent("user-read-private user-read-email");*/

export const Login = () => {
  const loginSpotify = (e) => {
  
    //props.onLogin(true)
  
    //PARA CUANDO SE TENGA QUE CONECTAR A SOLICITAR LA APIKEY
    try {
      var client_id = '18f20e42f0524fd8b01cd4c908ad7a72';
      var redirect_uri = 'https://maximo2311.github.io/jammming/';

      //var state = generateRandomString(16);

      
      var scope = 'user-read-private user-read-email';

      var url = 'https://accounts.spotify.com/authorize';
      url += '?response_type=token';
      url += '&client_id=' + encodeURIComponent(client_id);
      url += '&scope=' + encodeURIComponent(scope);
      url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
      //url += '&state=' + encodeURIComponent(state);
      window.location.href = url;
    //window.location.href =`${AUTH_ENDPOINT}?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}`
    //window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <h2>Logeate con Spotify</h2>
      <button onClick={loginSpotify} >Iniciar sesión</button>
    </div>
  );
};

//POR AHORA ESTO NO SIRVE PORQUE NO SE PUDO CONSEGUIR EL TOKEN DE NINGUNA FORMA
export const getAccessCode = () => {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const token = params.get("code");
  
    if (token) {
      localStorage.setItem("spotify_token", token);
      window.location.hash = ""; // Limpia la URL para seguridad
    }
  
    return token;
  };

  