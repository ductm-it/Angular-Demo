export interface ResponseData<T> {
    data: T;
    status: boolean,
    statusCode: string;
    messages: string[];
    message: string;
}