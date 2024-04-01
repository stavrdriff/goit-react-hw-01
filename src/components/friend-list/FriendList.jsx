import FriendListItem from "../friend-list-item/FriendListItem.jsx";
import styles from "./FriendList.module.css";

export default function FriendList({ friends }) {
    return (
        <ul className={styles.friendList}>
            { friends.length && friends.map((item) =>
                <li key={item.id} className={styles.friendListItem}>
                    <FriendListItem
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline}
                        id={item.id}
                    />
                </li>
            ) }
        </ul>
    )
}
