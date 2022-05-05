export interface CarByIdResponse {
  success: boolean;
  data:    Car[];
  message: string;
  meta:    string;
}

export interface Car {
  id:               number;
  kilometraje:      number;
  combustible:      null;
  transmision:      string;
  consumo:          null;
  precio:           string;
  comentario:       null;
  color:            null;
  litros_motor:     null;
  cilindros:        null;
  telefono:         null;
  mail:             null;
  tipo:             null;
  patente:          null;
  url:              string;
  id_marca:         number;
  estado:           string;
  id_yapo:          null;
  anio:             string;
  detalle:          string;
  updated_at:       Date;
  created_at:       Date;
  id_tipo_vehiculo: number;
  id_ciudad:        number;
  ciudad:           Ciudad;
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
  id:             number;
  region_nombre:  string;
  region_ordinal: string;
}

export interface Image {
  id_imagen:     number;
  nombre_imagen: null;
  tipo:          null;
  extension:     null;
  ruta:          string;
  id_vehiculo:   number;
}
