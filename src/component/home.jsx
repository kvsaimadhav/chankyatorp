import React from 'react';
import './home.css';
import Photo from './images/Photo.jpg';

const home = () =>{
  return(
    <div className="Home" id="home">
      <table className="table">
       <tr>
        <td className="image">
          <img src={Photo} alt="Self"/>
        </td>
        <td className="para">
          <p>
            <b>Hello</b>, <i>Everyone</i> .... <br/>
            <i>I'm a Software Engineer</i>specialized in <b>Web Designer &#38; Developer</b> .... <br/>
            You can reach out to me via <a href="https://www.linkedin.com/in/smadhavkv96/" rel="noreferrer" target="_blank">LinkedIn</a> 
            &nbsp; <i>or</i> &nbsp; <a href="https://github.com/kvsaimadhav/" rel="noreferrer" target="_blank">GitHub</a>
          </p>
        </td>
        </tr>
      </table>
    </div>
  );
}

export default home;
