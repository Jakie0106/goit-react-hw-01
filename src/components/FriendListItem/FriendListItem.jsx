import friendStyle from "../FriendList/FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <div>
        <img className={friendStyle.img} src={avatar} alt="Avatar" width="48" />
        <p className={friendStyle.name}>{name}</p>
        {isOnline ? (
          <p className={friendStyle.statusOnline}>Online</p>
        ) : (
          <p className={friendStyle.statusOffline}>Offline</p>
        )}
      </div>
    </div>
  );
};

export default FriendListItem;
