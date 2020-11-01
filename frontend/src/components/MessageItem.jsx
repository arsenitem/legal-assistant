import react from 'react'
import img from '../assets/logo.png'
// import bot_av from 'src\assets\bot-avatar.png'
//sender, text,
function MessageItem(props) {

    return (
        <div className="msg-container darker">
            <img src={props.sender==="bot"? "images/bot-avatar.png": "images/user-avatar.png"} alt="Avatar" className={props.sender==="bot"? "right": ""}></img>
            <div className={"msg-img " + (props.sender==="bot"? "right": "")}></div>
                <p>{props.text}</p>
            <span className={props.sender==="bot"? "time-left": "time-right"}>11:01</span>
        </div>
    );
  }
export default MessageItem;