const Rating = ({rating}) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    const renderFullStars = () => {
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<img width="22px" src="/img/icons/star-filled_icon.svg" alt />);
        }
        return stars;
    };
    const renderEmptyStars = () => {
        const stars = [];
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<img width="22px" src="/img/icons/star_icon.svg" alt />);
        }
        return stars;
    };

    return (
        <div className="flex gap-0.5 mb-2">
            {renderFullStars()}
            {renderEmptyStars()}
        </div>
    )
}

export default Rating;