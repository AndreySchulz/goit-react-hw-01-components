import { TransactionTd, TransactionTr } from './TransactionHistoryItem.styled';

const TransactionHistoryItem = ({ transaction }) => {
  const { type, amount, currency } = transaction;
  return (
    <TransactionTr>
      <TransactionTd>{type}</TransactionTd>
      <TransactionTd>{amount}</TransactionTd>
      <TransactionTd>{currency}</TransactionTd>
    </TransactionTr>
  );
};

export default TransactionHistoryItem;
