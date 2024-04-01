import styles from './Profile.module.css';

export default function Profile( { name, tag, location, image, stats = {followers: 0, views: 0, likes: 0} } ) {
    return (
        <div className={styles.userCard}>
            <div className={styles.userWrapper}>
                <img
                    className={styles.userImage}
                    src={ image }
                    alt="User avatar"
                />
                <p className={styles.userName}>{ name }</p>
                <p className={styles.userTags}>@{ tag }</p>
                <p className={styles.userTags}>{ location }</p>
            </div>
            <ul className={styles.userStats}>
                <li className={styles.userStatsItem}>
                    <span>Followers</span>
                    <span className={styles.userStatsData}>{ stats.followers }</span>
                </li>
                <li className={styles.userStatsItem}>
                    <span>Views</span>
                    <span className={styles.userStatsData}>{ stats.views }</span>
                </li>
                <li className={styles.userStatsItem}>
                    <span>Likes</span>
                    <span className={styles.userStatsData}>{ stats.likes }</span>
                </li>
            </ul>
        </div>
    )
}
