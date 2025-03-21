import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../contants/api.contants';

interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export class HttpService {
  private api: AxiosInstance;

  constructor( config?: AxiosRequestConfig) {
    this.api = axios.create({
      baseURL: BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    });

    this.api.interceptors.response.use(
      (response) => response,
      (error) => this.handleError(error)
    );

    this.api.interceptors.request.use(config => {
        const token = localStorage.getItem('accesstoken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });
      
        this.api.interceptors.response.use(
        response => response,
        error => {
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('accesstoken');
            localStorage.removeItem('expiresIn');
            window.location.href = '/login';
          }
          return Promise.reject(error);
        }
      );
  }
  

  public async get<T>(path: string, params?: any): Promise<ApiResponse<T>> {
    const response: AxiosResponse = await this.api.get(path, { params });
    return this.processResponse<T>(response);
  }

  public async post<T>(path: string, data?: any): Promise<ApiResponse<T>> {
    const response: AxiosResponse = await this.api.post( path, data);
    return this.processResponse<T>(response);
  }

  public async put<T>(path: string, data?: any): Promise<ApiResponse<T>> {
    const response: AxiosResponse = await this.api.put(path, data);
    return this.processResponse<T>(response);
  }

  public async patch<T>(path: string, data?: any): Promise<ApiResponse<T>> {
    const response: AxiosResponse = await this.api.patch(path, data);
    return this.processResponse<T>(response);
  }

  public async delete<T>(path: string, params?: any): Promise<ApiResponse<T>> {
    const response: AxiosResponse = await this.api.delete(path, { params });
    return this.processResponse<T>(response);
  }

  private processResponse<T>(response: AxiosResponse): ApiResponse<T> {
    return {
      data: response.data,
      success: true,
    };
  }

  private handleError(error: any): Promise<never> {
    const errorResponse: ApiResponse<null> = {
      data: null,
      success: false,
      message: error.response?.data?.message || 'Ocorreu um erro na requisição',
    };

    return Promise.reject(errorResponse);
  }

  public setAuthToken(token: string): void {
    this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  public clearAuthToken(): void {
    delete this.api.defaults.headers.common['Authorization'];
  }
}