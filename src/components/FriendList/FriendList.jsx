import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friend => {
        return (
          <FriendListItem key={friend.id} friend={friend}></FriendListItem>
        );
      })}
    </ul>
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
