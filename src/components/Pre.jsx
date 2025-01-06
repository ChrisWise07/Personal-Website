import PropTypes from 'prop-types';

function Pre({ load = true }) {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
}

Pre.propTypes = {
  load: PropTypes.bool,
};

export default Pre;