import {Artwork} from './Artwork.ts';

let hiba = document.getElementById('hiba') as HTMLElement;

export class Statue implements Artwork{
    title: string = "";
    year: number = NaN;
    price: number = NaN;
    height: number = NaN;
    
    constructor(title:string, year: number, price: number, height: number){
        this.Title = title;
        this.Year = year;
        this.Price = price;
        this.Height = height;
    }

    public set Title(title: string){
        if(title.trim().length == 0){
            hiba.textContent = "Hibás név(kötelező kitölteni)";
            throw Error("Üres név");
          }
        if(!RegExp(/^[a-zA-Z,\s]+$/gm).test(title)){
            hiba.textContent = "Hibás név(érvénytelen karakter szerpel benne)";
            throw Error("Érvénytelen név");
        }
        this.title = title;
    }

    public set Year(year: number){
        if(isNaN(year)){
            hiba.textContent = "Hibás év(kötelező kitölteni)";
            throw Error("Üres év");
          }
        if(year > new Date().getFullYear()){
            hiba.textContent = "Az év maximum értéke az idei év"
            throw Error("Túl nagy év érték");
        }
        this.year = year;
    }

    public set Price(price: number){
        if(isNaN(price)){
            hiba.textContent = "Hibás ár(kötelező kitölteni)";
            throw Error("Üres ár");
          }
        if(price < 5){
            hiba.textContent = "Az ár minimum 5Ft"
            throw Error("Túl kicsi ár érték");
        }
        this.price = price;
    }

    public set Height(height: number){
        if(isNaN(height)){
            hiba.textContent = "Hibás magasság(kötelező kitölteni)";
            throw Error("Üres magasság");
          }
        if(height < 15){
            hiba.textContent = "A magasság minimum 15cm"
            throw Error("Túl kicsi magasság érték");
        }
        this.height = height;
    }
}