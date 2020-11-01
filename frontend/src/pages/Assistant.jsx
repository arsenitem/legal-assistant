import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import MessageItem from '../components/MessageItem';
import { connect } from 'react-redux';
import addMessage from '../data/chat-reducer'
function Assistant(props) {
    let [fileName, setFileName] = useState("")

    let [msgText, setMsgText] = useState("")
    function sendFile() {
        var formData = new FormData();
            var file = document.querySelector('#file');
            formData.append("file", file.files[0]);
            setFileName(file.files[0].name);
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
    function inputFileClick() {
        var imagefile = document.querySelector('#file').click();
    }
    function sendMessage() {
        console.log(props)
        props.addMessage({sender:"user", message: msgText})
        console.log(props.messages)
    }
  return (
    <Container>

    
    <div className="messanger">
        <div className="messages-list">
            {props.messages.map(item => {
                return  <MessageItem sender={item.sender} text={item.message}/>
            })}
            <MessageItem sender="me" text="Мне отказали в осуществлении государственного кадастрового учета"/>
            <MessageItem sender="bot" text="У вас есть выписка из росеестра?"/>
            <MessageItem sender="me" text="Да"/>
            <MessageItem sender="bot" text="Пожалуйста прикрепите файл"/>
        </div>
        
        <div className="msg-text">
               <textarea rows="5" value={msgText} onChange={(e) => setMsgText(e.target.value)}/>
               <Row className="justify-content-between">
                   <Col md={2}>
                   <form enctype="multipart/form-data" onChange={sendFile}>
                    <i className="fas fa-paperclip" onClick={inputFileClick}>
                        <input type="file" id="file" name="file"/>
                    </i>
                        <label >{fileName}</label>
                </form>
                   </Col>
                   <Col md={1}>
                   <i class="far fa-paper-plane" onClick={sendMessage}></i>
                   </Col>
               </Row>
               
               

               
        </div>
        
    </div>
    </Container>
  );
}

let mapStateToProps = function(state) {
    return {
        messages : state.assistantPage.messages,
    }
};
let mapDipatchToProps = dispatch => {
    return {
      // dispatching plain actions
      addMessage: (message) => dispatch({type:"ADD-MESSAGE", data: {message}})
    }
  }
let AssistantStore = connect(mapStateToProps, mapDipatchToProps)(Assistant);

export default AssistantStore;
