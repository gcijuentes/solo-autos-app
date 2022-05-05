export interface CarResponse {
  success: boolean;
  data:    data;
  message: string;
  meta:    string;
}

export interface data {
  current_page:   number;
  data:           Car[];
  first_page_url: string;
  from:           number;
  last_page:      number;
  last_page_url:  string;
  links:          Link[];
  next_page_url:  null;
  path:           string;
  per_page:       number;
  prev_page_url:  null;
  to:             number;
  total:          number;
}

export interface Car {
  id:               number;
  kilometraje:      number;
  combustible:      string;
  transmision:      string;
  consumo:          string;
  precio:            string;
  comentario:       string;
  color:            string;
  litros_motor:     number;
  cilindros:        number;
  ciudad:           Ciudad;
  telefono:         string;
  mail:             string;
  tipo:             string;
  id_tipo_vehiculo: number;
  id_aviso:         number;
  patente:          string;
  id_ciudad:        number;
  url:              null | string;
  images:           Image[];
  ad:               Ad;
}

export interface Ad {
    id:          number;
    titulo:      string;
    id_vehiculo: number;
}

export interface Ciudad {
  id:            number;
  comuna_nombre: string;
  id_provincias: number;
  provinces:     Provinces;
}

export interface Provinces {
  id:               number;
  provincia_nombre: string;
  id_regiones:      number;
  region:           Region;
}

export interface Region {
  id:            number;
  region_nombre: string;
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}

export interface Image {
  id_imagen:     number;
  nombre_imagen: null;
  tipo:          null;
  extension:     null;
  ruta:          string;
  id_vehiculo:   number;
}
