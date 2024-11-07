import React from "react";

function MailBox(props)
{
    const unreadMessages = props.unreadMessages;

    return(
        <div>
            <h1>반가워</h1>
            {unreadMessages.length > 0 &&
                <h2>메시지가 {unreadMessages.length}개 쌓였는데 ? </h2>
            }
        </div>
    );
}
export default  MailBox;