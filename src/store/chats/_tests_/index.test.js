import { addChat } from "../action";
import { initialState, chatsReducer } from "../reducer";

describe("chatsReducer", () => {
  it("вызов редьюсера без экшена вернет initialState", () => {
    const result = chatsReducer();

    expect(result).toEqual(initialState);
  });

  it("добавление чата", () => {
    const testChat = { name: test, id: test };
    const result = chatsReducer(undefined, addChat(testChat));
    expect(result).toEqual({
      chatList: [testChat],
    });
  });
});
