/* ============================================================
   DADOS EDITÁVEIS DO SITE
   Altere apenas o texto entre "aspas" e os números.
   Não apague vírgulas, chaves { } ou colchetes [ ].
   ============================================================ */

export const CONFIG = {
  nomeSite: "Verde Lar",
  slogan: "Lotes e loteamentos",
  corretor: "Magno Costa",
  creci: "", // ex.: "CRECI-MG 00000"
  tituloPrincipal: "Seu espaço. Seu futuro. Seu lar.",
  descricao: "Encontre o lote ideal para começar a construir seus planos.",
  avisoValores: "Valores sujeitos à disponibilidade e condições de negociação.",

  // WhatsApp: formato internacional, somente números (55 + DDD + número)
  whatsapp: "5531983867541",
  mensagemWhatsapp:
    "Olá, Magno! Vim pelo site de loteamento e gostaria de saber mais informações sobre os lotes.",
  mensagemLote:
    "Olá, Magno! Vim pelo site de loteamento e tenho interesse no Lote {numero}. Gostaria de receber mais informações.",
};

/* ============================================================
   LOCALIZAÇÃO DO EMPREENDIMENTO
   Para mudar o local, altere o "endereco" abaixo.
   Se souber as coordenadas, preencha latitude e longitude
   (o mapa fica mais preciso). Se não souber, deixe null.
   ============================================================ */
export const LOCALIZACAO = {
  endereco: "LMG-760, Minas Gerais",
  cidade: "São José do Goiabal",
  estado: "Minas Gerais",
  referencia: "Próximo ao Hotel Fazenda Barra Alegre",
  latitude: -19.9692672 as number | null,
  longitude: -42.6767825 as number | null,
  zoom: 16,
};

/* Planta do loteamento: coloque o endereço da imagem, ou deixe "" */
export const PLANTA = "";

/* Galeria de fotos: { src: "url-da-foto", legenda: "texto" } */
export const GALERIA: { src: string; legenda: string }[] = [];

export type StatusLote = "disponivel" | "reservado" | "vendido";

export type Lote = {
  numero: number;
  status: StatusLote;
  valor: number | null;
  area: string;
  observacao: string;
};

/* ============================================================
   LOTES
   status aceita: "disponivel", "reservado" ou "vendido"
   valor é só número (sem R$ e sem pontos). Use null se não houver.
   ============================================================ */
export const LOTES: Lote[] = [
  { numero: 1, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 2, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 3, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 4, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 5, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 6, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 7, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 8, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 9, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 10, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 11, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 12, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 13, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 14, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 15, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 16, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 17, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 18, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 19, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 20, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 21, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 22, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 23, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 24, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 25, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 26, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 27, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 28, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 29, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 30, status: "disponivel", valor: 30000, area: "360 m² (12 × 30 m)", observacao: "Na areia" },
  { numero: 31, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 32, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 33, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 34, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 35, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 36, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 37, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 38, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 39, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 40, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 41, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 42, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 43, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 44, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 45, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 46, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 47, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 48, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 49, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 50, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 51, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 52, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 53, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 54, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 55, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 56, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 57, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 58, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 59, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
  { numero: 60, status: "disponivel", valor: 40000, area: "360 m² (12 × 30 m)", observacao: "Na terra" },
];

export const ROTULO_STATUS: Record<StatusLote, string> = {
  disponivel: "Disponível",
  reservado: "Reservado",
  vendido: "Vendido",
};

export function formatarValor(valor: number | null) {
  if (valor === null) return "Sob consulta";
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

export function linkWhatsapp(mensagem: string) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
