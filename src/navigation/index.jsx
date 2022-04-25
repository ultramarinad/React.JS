export const getHomeLink = () => "/";

export const getProfileLink = () => ["", "profile"].join("/");

export const getChatsLink = () => ["", "chats"].join("/");

export const getChatsLinkId = (chatId = ":chatId") =>
  [getChatsLink(), chatId].join("/");

export const getCatsLink = () => ["", "cats"].join("/");

export const getSingupLink = () => ["", "signup"].join("/");

export const getLoginLink = () => ["", "login"].join("/");
