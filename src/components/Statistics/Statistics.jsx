import PropTypes from 'prop-types';

const Statistics = ({ stats, title }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>
      <ul class="stat-list">
        {stats.map(stats => {
          return (
            <li class="item" key={stats.id}>
              <span class="label">{stats.label}</span>
              <span class="percentage">{stats.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
