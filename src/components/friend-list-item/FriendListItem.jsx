import styles from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline, id }) {
    return (
        <div className={styles.item} id={id}>
            <img
                src={ avatar }
                alt="Avatar"
                width="48"
            />
            <p className={styles.name}>{ name }</p>
            <p className={clsx(styles.status, isOnline && styles.isActive)}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    )
}
