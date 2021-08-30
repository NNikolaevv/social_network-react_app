import React from "react";
import styles from './users.module.css'
import * as axios from "axios";


class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => this.props.getUsers(response.data.items))
            .catch(err => console.log(err));
    }


    follow = (id) => {
        this.props.follow(id)
    };

    unfollow = (id) => {
        this.props.unfollow(id)
    };

    render() {
        return (
            <div>
                <div>
                    {this.props.users.map(u => <div key={u.id}>
                            <div>
                                <img
                                    src={u.photos.small != null ? u.photos.small : 'https://cdn.pnp.ru/upload/entities/2020/01/15/article/detailPicture/48/2d/d0/40/e84ae6bc95ba98684f59184cc5d1e3a9.jpg'}
                                    alt="" className={styles.avaImg}/>
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => this.unfollow(u.id)}>Unfollow</button> :
                                    <button onClick={() => this.follow(u.id)}>Follow</button>}
                            </div>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                            <div>
                                {'u.location.city'}
                            </div>
                            <div>
                                {'u.location.country'}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }

}

export default Users;