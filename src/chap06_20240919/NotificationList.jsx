import React from "react";
import Notification from "./Notification";

const reserveNotifications =
[
    {
        id: 1,
        message: " 바로 ",
    },
    {
        id: 2,
        message: " 리부트 "
    },
    {
        id: 3,
        message: " 정 상 화"
    },
    {
        id: 4,
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
                this.setState({
                    notifications:[]
                })
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
                            key = {notification.id}
                            id = {notification.id}
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