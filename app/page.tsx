import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Topbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/10" />
            <div>
              <div className="text-sm font-semibold tracking-tight">PRONTO PARA ESCALAR</div>
              <div className="text-xs text-white/55">Branding • Padronização • Franquias</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
  href="/diagnostico"
  className="rounded-xl bg-yellow-400 px-4 py-2 text-sm font-bold text-zinc-950 hover:opacity-90"
>
  Pedir diagnóstico agora
</Link>
            <a
              href="#como-funciona"
              className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 md:inline-flex"
            >
              Como funciona
            </a>
            
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Fundo premium */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
          {/* Texto */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              Estrutura real para crescer sem quebrar
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Deixe sua empresa pronta para escalar{" "}
              <span className="text-yellow-300">com padrão, clareza e estrutura</span>.
            </h1>

            <p className="mt-4 text-base leading-7 text-white/70">
              Branding estratégico + padronização operacional + estrutura de franquia.
              Um caminho profissional para transformar um negócio sólido em uma operação replicável.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
             <Link
  href="/diagnostico"
  className="rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-zinc-950 hover:opacity-90"
>
  Quero um diagnóstico
</Link>

              <a
                href="#servicos"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Ver serviços
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/60">
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                ✅ Diagnóstico
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                ✅ Plano de escala
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                ✅ Base de franquia
              </div>
            </div>

            <div className="mt-6 text-sm text-white/55">
              WhatsApp: <span className="text-white/80">+55 91 99275-1975</span>
            </div>
          </div>

          {/* Imagem + Card */}
          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
              <Image
                src="/hero.jpg"
                alt="Equipe em ambiente corporativo"
                width={1200}
                height={900}
                className="h-[360px] w-full object-cover md:h-[420px]"
                priority
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="grid gap-2 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur">
                  <div className="text-sm font-semibold">
                    Crescer errado → perde dinheiro. Franquear sem estrutura → quebra.
                  </div>
                  <div className="text-xs text-white/70">
                    Nosso trabalho é te dar clareza, padrão e um plano de expansão viável.
                  </div>
                </div>
              </div>
            </div>

            {/* “Enterprise proof” */}
            <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">Padrão de entrega</div>
              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                  <div className="text-xs text-white/60">Foco</div>
                  <div className="mt-1 text-sm font-semibold">Estratégia</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                  <div className="text-xs text-white/60">Foco</div>
                  <div className="mt-1 text-sm font-semibold">Processos</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                  <div className="text-xs text-white/60">Foco</div>
                  <div className="mt-1 text-sm font-semibold">Replicação</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faixa de “logos” (placeholder) */}
        <div className="relative border-t border-white/10 bg-black/30">
          <div className="mx-auto max-w-6xl px-6 py-8">
            <div className="text-xs text-white/50">Modelo pronto para empresas exigentes</div>
            <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-5">
              {["Operação", "Padrão", "Marca", "Expansão", "Franquia"].map((t) => (
                <div
                  key={t}
                  className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-xs font-semibold text-white/70"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-bold tracking-tight">O que entregamos</h2>
        <p className="mt-2 text-sm text-white/65">
          Uma estrutura completa, com linguagem e padrão profissional.
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">Branding Estratégico</div>
            <div className="mt-2 text-sm text-white/70">
              Posicionamento, proposta de valor, arquitetura de oferta e consistência de marca.
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">Padronização Operacional</div>
            <div className="mt-2 text-sm text-white/70">
              Processos, rotina, checklists e organização para replicar com qualidade.
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">Estrutura de Franquia</div>
            <div className="mt-2 text-sm text-white/70">
              Base de modelo, estruturação e preparação para expansão com segurança.
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Como funciona</h2>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs text-white/60">Etapa 01</div>
              <div className="mt-1 text-sm font-semibold">Diagnóstico</div>
              <div className="mt-2 text-sm text-white/70">
                Entendemos o negócio, gargalos e viabilidade de escala.
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs text-white/60">Etapa 02</div>
              <div className="mt-1 text-sm font-semibold">Estrutura</div>
              <div className="mt-2 text-sm text-white/70">
                Marca, oferta e padrão operacional para replicar com consistência.
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs text-white/60">Etapa 03</div>
              <div className="mt-1 text-sm font-semibold">Expansão</div>
              <div className="mt-2 text-sm text-white/70">
                Plano de crescimento e materiais para estruturar a venda.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnóstico */}
      <section id="diagnostico" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 md:p-10">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Pronto para descobrir se sua empresa está pronta para escalar?
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Me chame no WhatsApp com: <span className="text-white">Nicho + Cidade + Faturamento</span>.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
             <Link
  href="/diagnostico"
  className="rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-zinc-950 hover:opacity-90"
>
  Pedir diagnóstico agora
</Link>

              <a
                href="#"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Voltar ao topo
              </a>
            </div>
          </div>

          <footer className="mt-10 text-center text-xs text-white/50">
            © {new Date().getFullYear()} • Pronto Para Escalar • Branding • Padronização • Franquias
          </footer>
        </div>
      </section>
    </main>
  );
}
