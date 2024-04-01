import Profile from "./profile/Profile.jsx";
import userData from "../json/userData.json";
import FriendList from "./friend-list/FriendList.jsx";
import friends from "../json/friends.json";
import TransactionHistory from "./transaction-history/TransactionHistory.jsx";
import transactions from "../json/transactions.json";

export default function App() {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends}/>
            <TransactionHistory transactions={transactions}/>
        </>
    )
}
