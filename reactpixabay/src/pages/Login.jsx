import React from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import '../css/login.css';


const Login = ()=>{
    const responseGoogle = async (resp) =>{
        //console.log(resp);
        try {
          const {data} = await axios({
            method: 'POST',
            url: 'http://localhost:4001/api/auth/google/login',
            headers: {
              'Authorization': `Bearer ${resp.tokenId}`
            }
          });
         console.log(data); 
          
        } catch (error) {
          //console.log(error.toJSON());
          console.log(error.response.data);
        }
      } 
    
    return (
        <div className="main">
        <div className="section">
          <div className="imagen-login"></div>
          <div className="inicio-login">
            <h3 className="texto-login">Iniciar Sesión</h3>
            <div>
            <form>
              <input className="email-login" type="text" name="email" placeholder="Correo Electrónico" />
              <br/>
              <input className="password-login" type="text" name="email" placeholder="Contraseña" />
            </form>
            </div>
            <br/>
            <div className= "box-password">
            <h4 class="remember-password">Recordar mi contraseña</h4>
            <div class="wrapper">
                  <input type="checkbox" id="switch" />
                  <label for="switch" class="switch_label">
                    <span class="onf_btn"></span>
                  </label>
                </div>
            </div>
            <br/>
            <br/>
            <div class= "box-password2">
              <h4 class="forget-password">¿Haz olvidado tu contraseña?</h4>
            </div>
            <br/>
            <div class="separador"></div>
            <br/>
            <div className="google">
              <GoogleLogin className="google-login" 
                clientId="304541528584-pu6tp6dmmvtahco73t0qqp43aise7psn.apps.googleusercontent.com"
                buttonText="Iniciar con Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
                </div>
              <br />
            <button class="enter-login">Entrar</button>
            
          </div>
        </div>
      </div>
  
    );
}
export default Login;