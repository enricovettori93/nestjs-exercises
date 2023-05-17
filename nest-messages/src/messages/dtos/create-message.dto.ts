import { IsString, MaxLength } from "class-validator";

export class CreateMessageDto {
    @IsString()
    @MaxLength(100)
    content: string;
}