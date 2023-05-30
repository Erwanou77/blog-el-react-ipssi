import Rating from "./Rating";

const UserCard = () => {
    const users = [
        { name: "Cindy", commentaire: "Amie enfance", connaissance: true, star: 5},
        { name: "Solange", commentaire: "Amie enfance", connaissance: true, star: 5},
        { name: "Lucas", commentaire: "Ami enfance", connaissance: true, star: 4},
        { name: "Bruno", commentaire: "Ami lycée", connaissance: true, star: 3},
        { name: "Armand", commentaire: "Ami lycée", connaissance: true, star: 2},
        { name: "Macron", commentaire: "Président", connaissance: false, star: 1},
    ];
    return (
        <div id="userCard">
            <ul>
                {users.map((user, index) => (
                    <li key={`${user}-${index}`} className={index % 2 === 0 ? "blue_card" : "white_card"}>
                        {user.name}<br />
                        {user.commentaire}<br />
                        La connaissez-vous ? {user.connaissance ? <span>oui</span> : <span>non</span>}<br />
                        <Rating starRating={user.star} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserCard;