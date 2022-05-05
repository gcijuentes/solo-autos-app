export interface BrandResponse {
  success: boolean;
  data:    Brand[];
  message: string;
  meta:    string;
}

export interface Brand {
  id:           number;
  nombre_marca: string;
}
