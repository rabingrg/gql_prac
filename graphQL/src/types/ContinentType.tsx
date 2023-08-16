
export interface ContinentType{
    name:string;
    code:string;
    countries?:[CountryType]

}

export interface CountryType{
    name:string;
    phone:number;
    __typename:string;
}