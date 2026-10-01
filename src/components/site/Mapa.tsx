import { LOCALIZACAO } from "@/config/dados";

/**
 * Mapa da localização.
 *
 * Funciona sem chave de API usando a incorporação oficial do Google Maps.
 * Se quiser usar o Google Maps Embed API (visual oficial, sem marca d'água),
 * adicione a chave na variável de ambiente VITE_GOOGLE_MAPS_API_KEY.
 * NUNCA escreva a chave diretamente neste arquivo.
 */
function urlDoMapa() {
  const { endereco, latitude, longitude, zoom } = LOCALIZACAO;
  const temCoordenadas = latitude !== null && longitude !== null;
  const consulta = temCoordenadas ? `${latitude},${longitude}` : endereco;
  const apiKey = import.meta.env["VITE_GOOGLE_MAPS_API_KEY"] as string | undefined;

  if (apiKey) {
    return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
      consulta,
    )}&zoom=${zoom}`;
  }

  // Incorporação pública (output=embed) — não causa "Google se recusou a conectar".
  return `https://www.google.com/maps?q=${encodeURIComponent(consulta)}&z=${zoom}&hl=pt-BR&output=embed`;
}

export function linkAbrirNoGoogleMaps() {
  const { endereco, latitude, longitude } = LOCALIZACAO;
  if (latitude !== null && longitude !== null) {
    return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
}

export function Mapa() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
        <iframe
          title={`Mapa da localização: ${LOCALIZACAO.endereco}`}
          src={urlDoMapa()}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border p-4">
        <p className="text-sm text-muted-foreground">{LOCALIZACAO.endereco}</p>
        <a
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          href={linkAbrirNoGoogleMaps()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir no Google Maps
        </a>
      </div>
    </div>
  );
}
