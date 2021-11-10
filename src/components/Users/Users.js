import React from "react";

class UserStates extends Component {
    constructor(props) {
        super(props) 
        this.currentUserIsAdmin = this.currentUserIsAdmin.bind(this);
        this.userLoggedIn = this.userLoggedIn.bind(this);
        this.state = {
            details: {
                admin: false,
                loggedIn: false
            }
        }
    }

    currentUserIsAdmin(event) {
        // Stores the value of the event
        const value = event.target.value;

        this.setState(function(state) {
            return {
                // Assigns it to the desired variable
                details: Object.assign(
                    state.details, {
                        admin: value
                })
            }
        })
    }

    userLoggedIn(event) {
        const value = event.target.value

        this.setState(function(state) {
            return {
                details: Object.assign(
                    state.details, {
                        loggedIn: value
                    }
                )
            }
        })
    }
}