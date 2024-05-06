export interface ILogin {
    email: string,
    password: string,
}

export interface IJoin {
    email: string,
    password: string,
    name: string,
}

export interface ILoginResponse {
    id: string,
    email: string,
    name: string,
}