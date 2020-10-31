import React from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
function Assistant() {
    function sendFile() {
        var formData = new FormData();
            var imagefile = document.querySelector('#file');
            formData.append("file", imagefile.files[0]);

            axios.post('http://localhost:5000/api/v1/file_upload', formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            })
    }
  return (
    <Container>

    
    <div className="messanger">   
        <div className="msg-container darker">
            <img src="C:/Users/pc/Desktop/Работа/LeadersOfDigital/legal-assistant/frontend/src/assets/bot-avatar.png" alt="Avatar" className="right"/>
            <div className="msg-img right"></div>
            <p>Привет, я правовой помощник Enterpreneural, помогу вам решить вопросы в области права</p>
            <span className="time-left">11:01</span>
            </div>
        <div className="msg-text">
               <textarea rows="5"/>
               <i class="fas fa-paperclip">
               
               </i>
               <form enctype="multipart/form-data" onChange={sendFile}><input type="file" id="file" name="file"/></form>
        </div>
            {/* <div className="msg-container">
                <img src="/w3images/bandmember.jpg" alt="Avatar"/>
                <p>Hello. How are you today?</p>
                <span className="time-right">11:00</span>
            </div>

            <div className="msg-container darker">
            <img src="/w3images/avatar_g2.jpg" alt="Avatar" className="right"/>
            <p>Hey! I'm fine. Thanks for asking!</p>
            <span className="time-left">11:01</span>
            </div>

            <div className="msg-container">
            <img src="/w3images/bandmember.jpg" alt="Avatar"/>
            <p>Sweet! So, what do you wanna do today?</p>
            <span className="time-right">11:02</span>
            </div>

                <div className="msg-container darker">
                <img src="/w3images/avatar_g2.jpg" alt="Avatar" className="right"/>
                <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                <span className="time-left">11:05</span>
                </div>  */}
        
    </div>
    </Container>
  );
}

export default Assistant;
