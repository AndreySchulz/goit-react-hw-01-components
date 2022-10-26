import PropTypes from 'prop-types';
const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <li class="item">
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
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
