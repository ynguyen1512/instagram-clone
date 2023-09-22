import { Avatar } from "@mui/material";
import "./WindowChat.scss";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function WindowChat() {
  return (
    <div className="window-chat-wrapper">
      <div className="window-chat__left">
        <Avatar className="window-chat__icon">Kaity</Avatar>
        <span>Kaity</span>
      </div>
      <div className="window-chat__right">
        <div className="window-chat__icons">
          <CallOutlinedIcon className="window-chat__icon" />
          <VideocamOutlinedIcon className="window-chat__icon" />
          <InfoOutlinedIcon className="window-chat__icon" />
        </div>
        {/* start */}
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9 window-chat-content">
          <div class="selected-user">
            <span>
              To: <span class="name">Emily Russell</span>
            </span>
          </div>
          <div class="chat-container">
            <ul class="chat-box chatContainerScroll">
              <li class="chat-left">
                <div class="chat-avatar">
                  <img
                    src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                    alt="Retail Admin"
                  />
                  <div class="chat-name">Russell</div>
                </div>
                <div class="chat-text">
                  Hello, I'm Russell.
                  <br />
                  How can I help you today?
                </div>
                <div class="chat-hour">
                  08:55 <span class="fa fa-check-circle"></span>
                </div>
              </li>
              <li class="chat-right">
                <div class="chat-hour">
                  08:56 <span class="fa fa-check-circle"></span>
                </div>
                <div class="chat-text">
                  Hi, Russell
                  <br /> I need more information about Developer Plan.
                </div>
                <div class="chat-avatar">
                  <img
                    src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                    alt="Retail Admin"
                  />
                  <div class="chat-name">Sam</div>
                </div>
              </li>
              <li class="chat-left">
                <div class="chat-avatar">
                  <img
                    src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                    alt="Retail Admin"
                  />
                  <div class="chat-name">Russell</div>
                </div>
                <div class="chat-text">
                  Are we meeting today?
                  <br />
                  Project has been already finished and I have results to show
                  you.
                </div>
                <div class="chat-hour">
                  08:57 <span class="fa fa-check-circle"></span>
                </div>
              </li>
              <li class="chat-right">
                <div class="chat-hour">
                  08:59 <span class="fa fa-check-circle"></span>
                </div>
                <div class="chat-text">
                  Well I am not sure.
                  <br />I have results to show you.
                </div>
                <div class="chat-avatar">
                  <img
                    src="https://www.bootdey.com/img/Content/avatar/avatar5.png"
                    alt="Retail Admin"
                  />
                  <div class="chat-name">Joyse</div>
                </div>
              </li>
              <li class="chat-left">
                <div class="chat-avatar">
                  <img
                    src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                    alt="Retail Admin"
                  />
                  <div class="chat-name">Russell</div>
                </div>
                <div class="chat-text">
                  The rest of the team is not here yet.
                  <br />
                  Maybe in an hour or so?
                </div>
                <div class="chat-hour">
                  08:57 <span class="fa fa-check-circle"></span>
                </div>
              </li>
              <li class="chat-right">
                <div class="chat-hour">
                  08:59 <span class="fa fa-check-circle"></span>
                </div>
                <div class="chat-text">
                  Have you faced any problems at the last phase of the project?
                </div>
                <div class="chat-avatar">
                  <img
                    src="https://www.bootdey.com/img/Content/avatar/avatar4.png"
                    alt="Retail Admin"
                  />
                  <div class="chat-name">Jin</div>
                </div>
              </li>
              <li class="chat-left">
                <div class="chat-avatar">
                  <img
                    src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                    alt="Retail Admin"
                  />
                  <div class="chat-name">Russell</div>
                </div>
                <div class="chat-text">
                  Actually everything was fine.
                  <br />
                  I'm very excited to show this to our team.
                </div>
                <div class="chat-hour">
                  07:00 <span class="fa fa-check-circle"></span>
                </div>
              </li>
            </ul>
            <div class="form-group mt-3 mb-0">
              <textarea
                class="form-control"
                rows="3"
                placeholder="Type your message here..."
              ></textarea>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
}

export default WindowChat;
