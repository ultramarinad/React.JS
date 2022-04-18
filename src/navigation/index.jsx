export const getHomeLink = () => "/";

export const getProfileLink = () => ["", "profile"].join("/");

export const getChatsLink = () => ["", "chats"].join("/");

export const getChatsLinkId = (chatId = ":chatId") =>
  [getChatsLink(), chatId].join("/");
