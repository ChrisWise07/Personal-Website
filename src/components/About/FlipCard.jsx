import "./FlipCard.css"; // Import the CSS for the flip card

function FlipCard({ icon, text, textSize }) {
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
    icon: Object,
    text: String,
    textSize: String
};

export default FlipCard;