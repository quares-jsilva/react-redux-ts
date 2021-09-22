import API from "../api/api";
import { AxiosRequestConfig } from "axios";

export class Login {
  public getToken = async () => {
    return API.get("")
    .then((res) => {
      return res
    })
  }
}