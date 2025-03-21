import { ENDPOINTS } from "../contants/api.contants";
import { LoginRequest, LoginResponse } from "../types/auth.types";
import { Movie } from "../types/movies.types";
import { HttpService } from "./HttpService";


const httpService = new HttpService();


export const handleMovieSearch= (query: string) => {
 return  httpService.get("/movies", query);
}


export const login = async (request: LoginRequest) =>{
    try{
    
        const response = await httpService.post<LoginResponse>(ENDPOINTS.LOGIN,request);
        
        localStorage.setItem('accesstoken', response.data.accesstoken);
        
        const expirationTime = new Date().getTime() + response.data.expiresIn * 1000;
        
        localStorage.setItem('expirationTime', expirationTime.toString());

    } catch (error:any) {
        throw new Error(`Houve um erro no login: ${error.message}`);
    }
    return true;
}

export const tokenIsAuthenticated = () => {
    const token = localStorage.getItem('accesstoken');
    const expirationTime = localStorage.getItem('expirationTime');
    
    if (!token || !expirationTime) {
      return false;
    }
    
    return new Date().getTime() < Number(expirationTime);
  };


export const getAllMovies = async () => {
    try {
        const response = await httpService.get<Movie[]>(ENDPOINTS.MOVIES)

        return response.data;

    } catch (error: any) {
        throw new Error(`Houve um erro ao pegar os dados dos filmes: ${error.message}`)
    }
}