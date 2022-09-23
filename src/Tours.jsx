import PropTypes from 'prop-types';
import { Tour } from './Tour';

export const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      {tours.map(tour => {
        return <Tour key={tour.id} {...tour} />;
      })}
    </section>
  );
};

Tours.propTypes = {
  tours: PropTypes.array.isRequired,
};
