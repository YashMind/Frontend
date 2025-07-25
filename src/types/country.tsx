export interface Country {
  country_name: string;
}

export interface CountriesResponse {
  data: Country[];
}

export interface CountriesState {
  countries: string[]; 
  loading: boolean;
  error: string | null;
}