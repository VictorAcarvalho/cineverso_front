export interface LoginRequest{
    email: string,
    password: string
}

export interface LoginResponse{
    accesstoken: string,
    expiresIn: number
}