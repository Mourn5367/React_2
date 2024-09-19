import React from "react";
import Notification from "./Notification";

const reserveNotifications =
[
    {
        message: " 바로 ",
    },
    {
        message: " 리부트 "
    },
    {
        message: " 정 상 화"
    },
    {
        imageUrl: "../image/God.png"
    }
];

var timer;

class NotificationList extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            notifications : [],
        };
    }

    componentDidMount() {
        const {notifications} = this.state;

        timer = setInterval(() =>
        {
            if(notifications.length < reserveNotifications.length)
            {
                const index = notifications.length;
                notifications.push(reserveNotifications[index]);
                this.setState({
                    notification: notifications,
                });
            }
            else
            {
                clearInterval(timer);
            }
        }
        ,1000);
    }

    componentWillUnmount() {
        if(timer)
        {
            clearInterval(timer);
        }
    }

    // 3개의 인덱스가 있다고 하면 1/ 1,2/ 1,2,3/ 이렇게 한다고함.
    render() {
        return(
            <div>
                {
                    this.state.notifications.map((notification) => {
                        return <Notification
                            message = {notification.message}
                            imageUrl = {notification.imageUrl}
                        />
                    })
                }
            </div>
        )
    };
}

export default NotificationList;