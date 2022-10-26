import PropTypes from 'prop-types';
import {
  ProfileBox,
  ProfileDescription,
  ProfileImage,
  Stats,
  StatsItem,
  ProfileName,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileBox>
      <ProfileDescription>
        <ProfileImage src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <p>@{tag}</p>
        <p>{location}</p>
      </ProfileDescription>

      <Stats>
        <StatsItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </StatsItem>
      </Stats>
    </ProfileBox>
  );
};
export default Profile;
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};
