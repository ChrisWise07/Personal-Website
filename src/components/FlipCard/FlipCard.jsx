import PropTypes from 'prop-types';
import "./FlipCard.css";

function FlipCard({ icon, text }) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {icon}
                </div>
                <div className="flip-card-back">
                    <p className="flip-card-text">{text}</p>
                </div>
            </div>
        </div>
    );
}

FlipCard.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    textSize: PropTypes.string
};

export default FlipCard;