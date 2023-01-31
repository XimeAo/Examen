export interface IReqRestApiCountries {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        ICountries[];
    support:     Support;
}

export interface ICountries {
    id:            number;
    name:          string;
    year:          number;
    color:         string;
    pantone_value: string;
}

export interface Support {
    url:  string;
    text: string;
}