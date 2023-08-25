
import { TipPutovanja } from "src/data";
import { PrevoznoSredstvoTip } from "src/data";
import { IsNumber, IsPositive, IsString,IsNotEmpty,IsOptional } from "class-validator";

export class createPutovanjeDto{

    type:TipPutovanja;
    @IsString()
    @IsNotEmpty()
    mesto:string;
    @IsNumber()
    @IsPositive()
    brojDana:number;
    @IsNumber()
    @IsPositive()
    cena:number;
    @IsString()
    @IsNotEmpty()
    prevoznoSredstvo:PrevoznoSredstvoTip
}

export class updatePutovanjeDto{

    @IsOptional()

    type:TipPutovanja;
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    mesto:string;
    @IsOptional()
    @IsNumber()
    @IsPositive()
    brojDana:number;
    @IsOptional()
    @IsNumber()
    @IsPositive()
    cena:number;
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    prevoznoSredstvo:PrevoznoSredstvoTip
}