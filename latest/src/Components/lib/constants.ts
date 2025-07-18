export const BASE_API_URL = "https://kizrhaizwtspwfcgylmm.supabase.co";
export const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpenJoYWl6d3RzcHdmY2d5bG1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyOTE4MjgsImV4cCI6MjA2Njg2NzgyOH0.Javw11U5Pfy59ZFuuoX40DGk3GQH8QbO2D0aRcftLw0";

export type Museo = {
  museum_name: string;
  museum_country: string;
  museum_city: string;
  museum_municipality?: string;
  museum_ownership_type?: string;
  museum_opening_hours?: string;
};

export const MuseumList = [
  "Biblioteca Patrimonial Recoleta Dominica",
  "Casa Colorada",
  "Casa Museo Eduardo Frei Montalva",
  "Centro Nacional de Arte Contemporáneo Cerrillos",
  "Enoteca del cerro San Cristóbal",
  // "La Chascona",
  // "Museo a Cielo Abierto en San Miguel",
  // "Museo Artequin",
  // "Museo Arqueológico",
  // "Museo Arte Popular Americano",
  // "Museo de Anatomía",
  // "Museo de Artes Decorativas",
  // "Museo de Artes Visuales",
  // "Museo de Bomberos",
  // "Museo de Cera de Las Condes",
  // "Museo de Ciencia y Tecnología",
  // "Museo de Colo-Colo",
  // "Museo de la Educación Gabriela Mistral",
  // "Museo de la Guerra del Pacífico",
  // "Museo de la Historieta",
  // "Museo de la Memoria y los Derechos Humanos",
  // "Museo de la Moda",
  // "Museo de la Solidaridad Salvador Allende",
  // "Museo de la Vivienda Tradicional Local",
  // "Museo de Química y Farmacia Profesor César Leyton Caravagno",
  // "Museo del Ahorro",
  // "Museo del Carmen de Maipú",
  // "Museo del Sonido",
  // "Museo Ferroviario",
  // "Museo Histórico Carabineros",
  // "Museo Histórico Dominico",
  // "Museo Histórico Nacional",
  // "Museo Histórico y Militar",
  // "Museo Infantil",
  // "Museo Interactivo Las Condes",
  // "Museo Interactivo Mirador",
  // "Museo Jedimar",
  // "Museo Judío Alemán",
  // "Museo La Merced",
  // "Museo Nacional Aeronáutico y del Espacio",
  // "Museo Nacional Benjamín Vicuña Mackenna",
  // "Museo Nacional de Historia Natural",
  // "Museo Nacional de Medicina Dr. Enrique Laval",
  // "Museo Numismático del Banco Central",
  // "Museo Ocean Pacific's",
  // "Museo Parque de las Esculturas de Providencia",
  // "Museo Postal y Telegráfico",
  // "Museo Ralli",
  // "Museo San Francisco",
  // "Museo Violeta Parra",
  // "Museo Chileno de Arte Precolombino",
  // "Nido 20",
  // "Nuevo Museo",
  // "Parque del Cómic de San Miguel",
  // "Paseo de las Esculturas La Pastora",
  // "Santuario del Padre Hurtado",
];
