import React from "react";

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatPage = (props: any) => {
  return (
    <div className="h-[850px]">
      <PrettyChatWindow
        projectId="59570cd9-e5c7-4805-8f8f-d8b0f1c146bf"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};
export default ChatPage;
