import styles from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline, id }) {
    return (
        <div className={styles.friendListItem} id={id}>
            <img
                className={styles.friendListItemImage}
                src={ avatar }
                alt="Avatar"
                width="48"
            />
            <p className={styles.friendListItemName}>{ name }</p>
            <p className={clsx(styles.friendListItemStatus, isOnline && styles.isActive)}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    )
}
