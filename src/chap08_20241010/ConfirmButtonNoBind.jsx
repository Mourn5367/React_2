import React from "react";
import button_1 from "../chap04_20240905/Button_1";

class ConfirmButtonNoBind extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            isConfirmed : false
        };

    }

    handleConfirm = () =>
    {
        this.setState(prevState => ({
            isConfirmed: !prevState.isConfirmed
        }));
    }

    handleConfirmReset = () =>
    {
        this.setState(prevState => ({
            isConfirmed: prevState.isConfirmed
        }));
    }
    render() {
        return(
            <button onClick={() => this.handleConfirm} disabled={this.state.isConfirmed}>
                Confirm Button {this.state.isConfirmed? "확인됨":"확인하기"}
            </button>

        )
    }

}


export default ConfirmButtonNoBind
