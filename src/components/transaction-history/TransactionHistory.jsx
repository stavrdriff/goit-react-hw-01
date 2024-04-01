import styles from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions = [] }) {
    return (
        <table className={styles.table}>
            <thead className={styles.head}>
                <tr className={styles.transaction}>
                    <th className={styles.title}>Type</th>
                    <th className={styles.title}>Amount</th>
                    <th className={styles.title}>Currency</th>
                </tr>
            </thead>
            <tbody>
                { transactions.length && transactions.map((item) =>
                    <tr key={item.id} className={styles.transaction} id={ item.id }>
                        <td className={styles.type}>{ item.type }</td>
                        <td className={styles.amount}>{ item.amount }</td>
                        <td className={styles.currency}>{ item.currency }</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
