export enum PrevoznoSredstvoTip
{
   AVION="Avion",
   AUTOBUS="Autobus",
   AUTOMOBIL="Automobil",
   VOZ="Voz"
}
export enum TipPutovanja
{
    POSLOVNO="Poslovno",
    REKREACIJA="Rekreacija"
}

export const data:Data =
{
    putovanje:[
        {
            id:"2",
            type:TipPutovanja.POSLOVNO,
            mesto:"Holandija",
            brojDana:3,
            cena:100,
            datumPolaska:new Date(),
            datumPovratka:new Date(),
            prevoznoSredstvo:PrevoznoSredstvoTip.AVION
        },
        {
            id:"3",
            type:TipPutovanja.REKREACIJA,
            mesto:"Malta",
            brojDana:5,
            cena:800,
            datumPolaska:new Date(),
            datumPovratka:new Date(),
            prevoznoSredstvo:PrevoznoSredstvoTip.AVION
        },
        {
            id:"4",
            type:TipPutovanja.REKREACIJA,
            mesto:"Budva",
            brojDana:10,
            cena:1100,
            datumPolaska:new Date(),
            datumPovratka:new Date(),
            prevoznoSredstvo:PrevoznoSredstvoTip.AUTOBUS
        },
    ]
}

interface Data{
    putovanje:{
        id:string;
        type:TipPutovanja;
        mesto:string;
        brojDana:Number;
        cena:number;
        datumPolaska:Date;
        datumPovratka:Date;
        prevoznoSredstvo:PrevoznoSredstvoTip;

    }[]
}

data.putovanje.push({
    id:"1",
    type:TipPutovanja.REKREACIJA,
    mesto:"Ostrog",
    brojDana:9,
    cena:350,
    datumPolaska:new Date(),
    datumPovratka:new Date(),
    prevoznoSredstvo:PrevoznoSredstvoTip.AVION
})

