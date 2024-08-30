import friendStyle from "./FriendList.module.css";
const FriendListItem = ({ friends }) => {
  return (
    <div className={friendStyle.listContainer}>
      <ul className={friendStyle.list}>
        {friends.map((friend) => {
          return (
            <li className={friendStyle.item} key={friend.id}>
              <img
                className={friendStyle.img}
                src={friend.avatar}
                alt="Avatar"
                width="48"
              />
              <p className={friendStyle.name}>{friend.name}</p>
              {friend.isOnline ? (
                <p className={friendStyle.statusOnline}>Online</p>
              ) : (
                <p className={friendStyle.statusOfline}>Ofline</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendListItem;
