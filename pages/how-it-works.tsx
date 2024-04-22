import { SetStateAction, useState } from "react";
import AuthPage from "./auth-page";
import ChatPage from "./chat-page";

function HowItWorks() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return (
      <AuthPage onAuth={(user: SetStateAction<undefined>) => setUser(user)} />
    );
  } else {
    return <ChatPage user={user} />;
  }
}

export default HowItWorks;
