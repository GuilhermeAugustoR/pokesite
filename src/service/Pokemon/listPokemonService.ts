import axios from "axios";
import { api } from "../api";

interface IPokemonType {
  name: string;
}

class ListPokemonService {
  async getPokemonSpecific({ name }: IPokemonType) {
    try {
      const response = await api.get(`/pokemon/${name}`);
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
