import tableStyle from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={tableStyle.table}>
      <thead className={tableStyle.tableHeader}>
        <tr className={tableStyle.tableRow}>
          <th className={tableStyle.tableColumn}>Type</th>
          <th className={tableStyle.tableColumn}>Amount</th>
          <th className={tableStyle.tableColumn}>Currency</th>
        </tr>
      </thead>
      <tbody className={tableStyle.tableInfo}>
        {items.map((transaction) => {
          return (
            <tr className={tableStyle.tableRow} key={transaction.id}>
              <td className={tableStyle.tableColumn}>{transaction.type}</td>
              <td className={tableStyle.tableColumn}>{transaction.amount}</td>
              <td className={tableStyle.tableColumn}>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
