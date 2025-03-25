const Card = ({api, setLikes, likedList}) => {
    
    const handleLike = () => {
        setLikes(list => {
            //Checking if the API is already liked
            const isLiked = list.some(item => item.id === api.id); 
    
            if (isLiked) {
                //Removing from likes if it exists
                return list.filter(item => item.id !== api.id);
            } else {
                //Adding to likes if it doesn't exist
                return [...list, api];
            }
        });
    }

    const isLiked = likedList.some(item => item.id === api.id);

    return (
        <div className="card">
            <h3>{api.emoji} {api.title}</h3>
            <p>{api.description}</p>
            <div className="cardLinks">
                <div className="likeButton" onClick={handleLike}>
                    <p>{isLiked ? "Unlike" : "Like"}</p>
                </div>
                <p>(ID: {api.id})</p>
                <a href={api.documentation} target="_blank" rel="noopener noreferrer">Documentation</a>
                
            </div>
        </div>
    )
};

export default Card;