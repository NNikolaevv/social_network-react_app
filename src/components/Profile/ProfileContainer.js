import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfile,
    getStatus,
    savePhoto,
    saveProfile,
    setUserProfile,
    updateStatus
} from "../../redux/Reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {
     refreshProfile() {
         const userId = this.props.match.params.userId || this.props.authorizedUserId || this.props.history.push('/login')

         this.props.getProfile(userId);
         this.props.getStatus(userId)
     }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
         if (this.props.match.params.userId !== prevProps.match.params.userId) {
             this.refreshProfile()
         }

    }

    render() {
        return (
            <Profile {...this.props} isOwner={(!this.props.match.params.userId)}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
)
(ProfileContainer)

