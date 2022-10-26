import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { FriendListBox } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendListBox>
      {friends.map(friend => {
        return (
          <FriendListItem key={friend.id} friend={friend}></FriendListItem>
        );
      })}
    </FriendListBox>
  );
};
export default FriendList;

FriendList.prototype = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
