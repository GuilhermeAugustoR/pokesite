import axios from "axios";
import { api } from "../api";

class ListPokemonService {
  async getPokemon() {
    try {
      const response = await api.get("/pokemon");
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errorRes = error.response?.data.message;
        return errorRes as string;
      }
      return false;
    }
  }
}
export default new ListPokemonService();
