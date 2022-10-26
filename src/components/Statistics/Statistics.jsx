import PropTypes from 'prop-types';
import {
  StatisticsBox,
  Title,
  StatList,
  StatListItem,
} from './Statistics.styled';

const Statistics = ({ stats, title }) => {
  return (
    <StatisticsBox>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stats => {
          return (
            <StatListItem key={stats.id}>
              <span>{stats.label}</span>
              <span>{stats.percentage}%</span>
            </StatListItem>
          );
        })}
      </StatList>
    </StatisticsBox>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
