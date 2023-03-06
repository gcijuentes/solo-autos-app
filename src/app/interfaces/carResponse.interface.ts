export interface CarResponse {
  status:  string;
  code:    string;
  message: string;
  data:    Data;
}

export interface Page {
  size:          number;
  totalElements: number;
  totalPages:    number;
  number:        number;
}

export interface Data {
  content: Car[];
  page:    Page;
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
  region:        Region;
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
