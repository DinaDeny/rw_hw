export interface UserDto {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    userStatus: number;
}

export interface CreateUserResponseDto {
    code: number;
    type: string;
    message: string;
}


