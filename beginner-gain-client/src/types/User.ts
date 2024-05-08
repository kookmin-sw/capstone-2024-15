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

export interface IJoinResponse {
    id: string,
    success: boolean,
}