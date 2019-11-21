import ResponseEntity from './Entity/ResponseEntity';

export interface Config {
    "name": string, // The name of micro service
    "requireAuth": boolean // If true, the micro service require authentification 
    "requireAuthRoutes"?: Array<string>,
    "isAuth": boolean // The service is the AuthService or not
}

export interface RequestCallback {
    (requestParams: any, auth: any, data: any, response: ResponseEntity): void
}