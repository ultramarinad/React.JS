import { ENDPOINT } from "../constants";

export const catsApi = {
  get: async () => {
    const response = await fetch(
      ENDPOINT + "/facts/random?animal_type=cat&amount=3"
    );
    if (!response.ok) {
      throw new Error(response);
    }
    return response.json();
  },
};
