import PropTypes from 'prop-types';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';
import {
  TransactionBox,
  TransactionBoxHeader,
  HeaderTh,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionBox>
      <TransactionBoxHeader>
        <tr>
          <HeaderTh>Type</HeaderTh>
          <HeaderTh>Amount</HeaderTh>
          <HeaderTh>Currency</HeaderTh>
        </tr>
      </TransactionBoxHeader>
      <tbody>
        {items.map(item => {
          return (
            <TransactionHistoryItem
              key={item.id}
              transaction={item}
            ></TransactionHistoryItem>
          );
        })}
      </tbody>
    </TransactionBox>
  );
};

export default TransactionHistory;

TransactionHistory.prototype = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
