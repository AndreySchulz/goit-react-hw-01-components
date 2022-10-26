import PropTypes from 'prop-types';
import {
  FriendLiItem,
  OnlineStatus,
  FriendName,
} from './FriendListItem.styled';
const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <FriendLiItem>
      <OnlineStatus status={isOnline}></OnlineStatus>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendLiItem>
  );
};
export default FriendListItem;
FriendListItem.prototype = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
