import PropTypes from 'prop-types';
import './Pre.css';

function Pre({ load = true }) {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
}

Pre.propTypes = {
  load: PropTypes.bool,
};

export default Pre;