import { useContext, useState, useEffect } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

const PotentialChats = () => {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat, onlineUsers } = useContext(ChatContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [showList, setShowList] = useState(false);

  const filteredUsers =
    searchTerm.trim() !== ""
      ? potentialChats?.filter((u) =>
          u.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const timeout = setTimeout(() => setShowList(true), 10);
      return () => clearTimeout(timeout);
    } else {
      setShowList(false);
    }
  }, [searchTerm]);

  return (
    <div className="potential-chats mb-2">
      <input
        type="text"
        placeholder="Введите поисковый запрос"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-1"
      />

      {searchTerm.trim() !== "" && (
        <div className={`all-users ${showList ? "show" : ""}`}>
          {filteredUsers && filteredUsers.length > 0 ? (
            filteredUsers.map((u) => (
              <div
                className="single-user"
                key={u._id}
                onClick={() => createChat(user._id, u._id)}
              >
                {u.name}
                <span
                  className={
                    onlineUsers?.some((user) => user?.userId === u?._id)
                      ? "user-online"
                      : ""
                  }
                ></span>
              </div>
            ))
          ) : (
            <div className="no-users">Пользователи не найдены</div>
          )}
        </div>
      )}
    </div>
  );
};

export default PotentialChats;
