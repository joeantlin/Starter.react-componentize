import React from "react";
import usersService from "../services/UsersService";

class Jumbo extends React.Component {
    componentDidMount() {
        this.logIn();
    }

    logIn = () => {
        let data = {
            email: "bwajal@gmail.com",
            password: "Spassword1!",
            tenantId: "U021BBT690B",
        };
        usersService.logIn(data).then(this.logInSuccess).catch(this.logInFail);
    };

    logInSuccess = (res) => console.log({ success: res.data });
    logInFail = (res) => console.warn({ error: res });

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3">Hello, world!</h1>
                    <p>
                        This is a template for a simple marketing or
                        informational website. It includes a large callout
                        called a jumbotron and three supporting pieces of
                        content. Use it as a starting point to create something
                        more unique.
                    </p>
                    <p>
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={this.logIn}
                        >
                            Sign In
                        </button>
                    </p>
                </div>
            </div>
        );
    }
}

export default Jumbo;
