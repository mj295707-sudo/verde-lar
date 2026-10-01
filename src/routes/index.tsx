import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import heroImg from "@/assets/hero-loteamento.jpg";
import { Mapa, linkAbrirNoGoogleMaps } from "@/components/site/Mapa";
import {
  CONFIG,
  GALERIA,
  LOCALIZACAO,
  LOTES,
  PLANTA,
  ROTULO_STATUS,
  formatarValor,
  linkWhatsapp,
  type StatusLote,
} from "@/config/dados";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${CONFIG.nomeSite} | Lotes em ${LOCALIZACAO.cidade} - ${LOCALIZACAO.estado}` },
      {
        name: "description",
        content:
          "Lotes à venda com atendimento direto pelo WhatsApp. Veja disponibilidade, valores e a localização do empreendimento.",
      },
      {
        property: "og:title",
        content: `${CONFIG.nomeSite} — lotes com ${CONFIG.corretor}`,
      },
      {
        property: "og:description",
        content:
          "Escolha seu lote, confira os valores e fale direto pelo WhatsApp com o corretor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FILTROS: { id: "todos" | StatusLote; nome: string }[] = [
  { id: "todos", nome: "Todos" },
  { id: "disponivel", nome: "Disponíveis" },
  { id: "reservado", nome: "Reservados" },
  { id: "vendido", nome: "Vendidos" },
];

const corDoStatus: Record<StatusLote, string> = {
  disponivel: "bg-primary/10 text-primary",
  reservado: "bg-accent/15 text-accent",
  vendido: "bg-muted text-muted-foreground",
};

function Secao({
  id,
  numero,
  selo,
  titulo,
  sub,
  areia,
  children,
}: {
  id: string;
  numero: string;
  selo: string;
  titulo: string;
  sub?: string;
  areia?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={areia ? "bg-secondary py-20 sm:py-24" : "py-20 sm:py-24"}>
      <div className="mx-auto w-full max-w-6xl px-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          <b className="text-primary">{numero}</b>
          {selo}
        </span>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {titulo}
        </h2>
        {sub ? <p className="mt-3 max-w-2xl text-muted-foreground">{sub}</p> : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Index() {
  const [filtro, setFiltro] = useState<"todos" | StatusLote>("todos");
  const [busca, setBusca] = useState("");

  const disponiveis = LOTES.filter((l) => l.status === "disponivel").length;
  const valorMinimo = useMemo(() => {
    const valores = LOTES.filter((l) => l.status === "disponivel" && l.valor !== null).map(
      (l) => l.valor as number,
    );
    return valores.length ? Math.min(...valores) : null;
  }, []);

  const lotes = LOTES.filter((l) => {
    const okFiltro = filtro === "todos" || l.status === filtro;
    const okBusca = busca.trim() === "" || String(l.numero).includes(busca.trim());
    return okFiltro && okBusca;
  });

  const whatsPadrao = linkWhatsapp(CONFIG.mensagemWhatsapp);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Topo */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#inicio" className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold">{CONFIG.nomeSite}</span>
            <span className="text-xs text-muted-foreground">{CONFIG.slogan}</span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a className="hover:text-foreground" href="#conceito">Conceito</a>
            <a className="hover:text-foreground" href="#lotes">Lotes</a>
            <a className="hover:text-foreground" href="#planta">Planta</a>
            <a className="hover:text-foreground" href="#galeria">Galeria</a>
            <a className="hover:text-foreground" href="#localizacao">Localização</a>
            <a className="hover:text-foreground" href="#contato">Contato</a>
          </nav>
          <a
            href={whatsPadrao}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Vista aérea do loteamento"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 py-24 sm:py-32 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {CONFIG.nomeSite}
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              {CONFIG.tituloPrincipal}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">{CONFIG.descricao}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#lotes"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Ver lotes disponíveis
              </a>
              <a
                href="#conceito"
                className="rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Saiba mais
              </a>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">{CONFIG.avisoValores}</p>
          </div>

          <aside className="rounded-3xl border border-border bg-card/95 p-6 shadow-lg">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Painel do empreendimento</span>
              <span className="inline-flex items-center gap-1.5 text-primary">
                <i className="size-2 rounded-full bg-primary" /> Online
              </span>
            </div>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm text-muted-foreground">Lotes no empreendimento</dt>
                <dd className="font-display text-2xl font-semibold">{LOTES.length}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Lotes a partir de</dt>
                <dd className="font-display text-2xl font-semibold">{formatarValor(valorMinimo)}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Atendimento</dt>
                <dd className="font-display text-2xl font-semibold">Direto no WhatsApp</dd>
              </div>
            </dl>
            <div className="mt-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Disponíveis</span>
                <span className="font-medium">
                  {disponiveis} de {LOTES.length}
                </span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                <i
                  className="block h-full rounded-full bg-primary"
                  style={{ width: `${(disponiveis / LOTES.length) * 100}%` }}
                />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Conceito */}
      <Secao
        id="conceito"
        numero="01"
        selo="O conceito"
        titulo="Encontre o espaço ideal para construir seu futuro"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-muted-foreground">
            <p>
              Um lote é mais do que um terreno: é o primeiro passo para transformar planos em
              realidade. Encontre um espaço que combine com seus objetivos e dê o primeiro passo
              para construir seu lar ou realizar seus projetos.
            </p>
            <p className="font-display text-xl font-medium text-foreground">
              Seu futuro pode começar aqui.
            </p>
            <a
              href="#lotes"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Encontrar meu lote
            </a>
          </div>
          <ul className="space-y-4">
            {[
              { t: `${LOTES.length} lotes`, d: "Opções para escolher com calma." },
              { t: `A partir de ${formatarValor(valorMinimo)}`, d: CONFIG.avisoValores },
              { t: "Atendimento direto", d: "Tire suas dúvidas pelo WhatsApp." },
            ].map((item) => (
              <li key={item.t} className="rounded-2xl border border-border bg-card p-5">
                <strong className="font-display text-lg">{item.t}</strong>
                <p className="mt-1 text-sm text-muted-foreground">{item.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </Secao>

      {/* Lotes */}
      <Secao
        id="lotes"
        numero="02"
        selo="Disponibilidade"
        titulo="Escolha o seu lote"
        sub="Use os filtros ou busque pelo número do lote. Clique em “Tenho interesse” e fale direto pelo WhatsApp."
        areia
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {FILTROS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFiltro(f.id)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  filtro === f.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background hover:bg-card"
                }`}
              >
                {f.nome}
              </button>
            ))}
          </div>
          <input
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar pelo número do lote..."
            className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring sm:w-72"
          />
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {lotes.length} {lotes.length === 1 ? "lote encontrado" : "lotes encontrados"}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lotes.map((lote) => (
            <article key={lote.numero} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold">Lote {lote.numero}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${corDoStatus[lote.status]}`}
                >
                  {ROTULO_STATUS[lote.status]}
                </span>
              </div>
              <p className="mt-3 font-display text-2xl font-semibold">{formatarValor(lote.valor)}</p>
              {lote.area ? (
                <p className="mt-1 text-sm text-muted-foreground">Área: {lote.area}</p>
              ) : null}
              {lote.observacao ? (
                <p className="mt-1 text-sm text-muted-foreground">{lote.observacao}</p>
              ) : null}
              {lote.status === "vendido" ? (
                <p className="mt-5 text-sm text-muted-foreground">Lote já vendido.</p>
              ) : (
                <a
                  href={linkWhatsapp(
                    CONFIG.mensagemLote.replace("{numero}", String(lote.numero)),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Tenho interesse
                </a>
              )}
            </article>
          ))}
        </div>

        {lotes.length === 0 ? (
          <p className="mt-8 text-muted-foreground">Nenhum lote encontrado com esses filtros.</p>
        ) : null}

        <p className="mt-8 text-xs text-muted-foreground">{CONFIG.avisoValores}</p>
      </Secao>

      {/* Planta */}
      <Secao id="planta" numero="03" selo="Mapa do loteamento" titulo="Planta do loteamento">
        {PLANTA ? (
          <img
            src={PLANTA}
            alt="Planta do loteamento"
            className="w-full rounded-2xl border border-border"
          />
        ) : (
          <div className="flex min-h-56 items-center justify-center rounded-2xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
            Adicione aqui a planta do loteamento.
          </div>
        )}
      </Secao>

      {/* Galeria */}
      <Secao id="galeria" numero="04" selo="Fotos" titulo="Galeria" areia>
        {GALERIA.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALERIA.map((foto) => (
              <figure key={foto.src} className="overflow-hidden rounded-2xl border border-border">
                <img src={foto.src} alt={foto.legenda} className="h-56 w-full object-cover" />
                <figcaption className="bg-card p-3 text-sm text-muted-foreground">
                  {foto.legenda}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
            Adicione aqui as fotos do empreendimento.
          </div>
        )}
      </Secao>

      {/* Localização */}
      <Secao id="localizacao" numero="05" selo="Onde fica" titulo="📍 Nossa localização">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <ul className="space-y-4">
            {[
              ["Cidade", LOCALIZACAO.cidade],
              ["Estado", LOCALIZACAO.estado],
              ["Endereço", LOCALIZACAO.endereco],
              ["Referência", LOCALIZACAO.referencia],
            ].map(([rotulo, valor]) => (
              <li key={rotulo} className="rounded-2xl border border-border bg-card p-4">
                <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                  {rotulo}
                </span>
                <strong className="mt-1 block font-normal">{valor || "—"}</strong>
              </li>
            ))}
            <li>
              <a
                href={linkAbrirNoGoogleMaps()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Abrir no Google Maps
              </a>
            </li>
          </ul>
          <Mapa />
        </div>
      </Secao>

      {/* Contato */}
      <section id="contato" className="bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto w-full max-w-3xl px-5 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Gostou de algum lote?
          </h2>
          <p className="mt-3 text-primary-foreground/80">
            Fale diretamente com {CONFIG.corretor}
            {CONFIG.creci ? ` — ${CONFIG.creci}` : ""}.
          </p>
          <a
            href={whatsPadrao}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-background px-7 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-between gap-2 px-5 text-sm text-muted-foreground">
          <span>
            {CONFIG.corretor} — {CONFIG.nomeSite}
          </span>
          <span>© {new Date().getFullYear()} — Todos os direitos reservados.</span>
        </div>
      </footer>

      <a
        href={whatsPadrao}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
      >
        WhatsApp
      </a>
    </div>
  );
}
