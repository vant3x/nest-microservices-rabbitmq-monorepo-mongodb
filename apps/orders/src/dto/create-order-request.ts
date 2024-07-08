import { IsNotEmpty, IsString, IsPhoneNumber, IsPositive } from "class-validator";

export class CreateOrderRequest {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsPositive()
    price: number;
    
    @IsPositive()
    quantity: number;
    
    @IsPhoneNumber()
    phoneNumber: string;
}