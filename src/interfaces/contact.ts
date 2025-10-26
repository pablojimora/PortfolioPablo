export interface Contact {
    _id?:string;
    fullname:string;
    phone:string;
    email:string;
    message:string;
    createdAt:Date;
}

export interface ApiResponse<T>{
    ok?:boolean;
    data?:T;
    error?:string;
}

