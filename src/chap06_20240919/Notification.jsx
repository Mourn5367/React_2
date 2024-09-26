import React from "react";
import "./Chap06.css";
// const styles =
//     {
//         wrapper:{
//             margin: 8,
//             padding: 8,
//             display: "flex",
//             flexDirection: "row",
//             border: "1px solid grey",
//             borderRadius: 16,
//             justifyContent: "center",
//         },
//         messageText:
//             {
//                 color: "black",
//                 fontSize: 16,
//         },
//         image:{
//             width : 150,
//             height : 150,
//         }
//     };

class Notification extends React.Component
{
    constructor(props) {
        super(props); //Component가 생성될 때 prop을
        // 전달받을 수 있는 매개변수를 갖는 생성자가 호출된다.
        this.state =
        {

        };
    }

    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() called`)
    }
    componentDidUpdate() {
        console.log(`${this.props.id} componentDidUpdate() called`)
    }
    componentWillUnmount() {
        console.log(`${this.props.id} componentWillUnmount() called`)
    }

    render() {
        return(
            <div className={`wrapper`}>
              <span className={`messageText`}>
                  {this.props.message}

                  {this.props.imageUrl && <img src={this.props.imageUrl} alt="Notification" className={`image`} />}
              </span>
            </div>
        );
    }

}

export default Notification;