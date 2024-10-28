import React from 'react';
import './contact.css';
import proInd from'./images/ProjectInd.jpg';
import proBud from './images/ProjectBud.jpg';
import proRsrch from './images/ProjectRsrch.jpg';
import proDB from './images/ProjectDB.jpg';

const contact = () => {
  return(
    <div className="Contact" id="contact">
        <div className="contactCard">
          <h2>Contact Me</h2>
        </div>
        <table className="contactTb">
          <tr>
            <td>
              <div className="contactInfo">
                <h3>Contact Info</h3>
                <div className="contactInfoBx">
                <div className="box">
                      <div className="text">
                         <h3>Designation:</h3>
                         <p>&nbsp;Software Engineer</p>
                      </div>
                   </div>
                   <div className="box">
                      <div className="text">
                         <h3>Home Address:</h3>
                         <p>&nbsp;Hyderabad, TS</p>
                      </div>
                   </div>
                   <div className="box">
                      <div className="text">
                         <h3>Mobile Phone:</h3>
                         <p>&nbsp;+91-6360591271</p>
                      </div>
                   </div>
                   <div className="box">
                      <div className="text">
                         <h3>Work Email:</h3>
                         <p>&nbsp;saimadhav.kaza@gmail.com</p>
                      </div>
                   </div>
                </div>
              </div>
            </td>
            <td>
               <div className="formBx">
                <form>
                 <label>First:</label>&#9;&#9;<input type="text" name="firstName" placeholder="First Name" defaultValue={"John"}/><br/>
                 <label>Last:</label>&#9;&#9;<input type="text" name="lastName" placeholder="Last Name" defaultValue={"Doe"}/><br/>
                 <label>Email:</label>&#9;&#9;<input type="Email" name="email" placeholder="Email Address" defaultValue={"john.doe@gmail.com"}/><br/>
                 <label>Contact:</label>&#9;&#9;&#9;<input type="text" name="phone" placeholder="Contact Number" defaultValue={"9999999999"}/><br/>
                 <label>Message:</label>&nbsp;<textarea placeholder="Your Message" defaultValue={"Hi, How are You ..."}/>
                 <br/><center><input type="submit" name="send" value="send"/></center><br/>
                </form>
               </div>
            </td>
            <td>
               <div className="projectH"> 
                  <h2>Projects URL</h2><br/>
               </div>
               <div className="projectCard">
                  <div class="projectBx">
                     <a href="https://github.com/kvsaimadhav/ITC691-Research" rel="noreferrer" target="_blank"><img src={proInd} alt="Industrial Project"/></a>
                     <a href="https://github.com/kvsaimadhav/ITC686-Research" rel="noreferrer" target="_blank"><img src={proBud} alt="Buddie Project"/></a>
                     <a href="https://github.com/kvsaimadhav/ITC520-Research" rel="noreferrer" target="_blank"><img src={proRsrch} alt="Research Project"/></a>
                     <a href="https://github.com/kvsaimadhav/CPS541-Research" rel="noreferrer" target="_blank"><img src={proDB} alt="Database Project"/></a>
                  </div>
               </div>
            </td>
         </tr>
        </table> 
   </div>
  );
}

export default contact;
