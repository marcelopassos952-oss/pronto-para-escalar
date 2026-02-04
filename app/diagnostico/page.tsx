"use client";

import { useMemo, useState } from "react";

type Pillar = "marca" | "processos" | "financeiro";

// Agora Answer pode ser number ou null (mantendo como estava),
// mas o reduce SEMPRE vai somar como number (tipado).
type Answer = number | null;

type Option = { label: string; value: number; icon?: string };
type Question = { text: string; options: Option[] };

const QUESTIONS: Record<Pillar, Question[]> = {
  marca: [
    {
      text: "Seu posicionamento está claro (proposta de valor, público e diferenciais)?",
      options: [
        { label: "Não", value: 0, icon: "✖" },
        { label: "Parcial", value: 5, icon: "⚠" },
        { label: "Sim", value: 10, icon: "✔" },
      ],
    },
    {
      text: "Sua identidade (nome, visual, linguagem) está consistente em todos os canais?",
      options: [
        { label: "Não", value: 0, icon: "✖" },
        { label: "Parcial", value: 5, icon: "⚠" },
        { label: "Sim", value: 10, icon: "✔" },
      ],
    },
    {
      text: "Seu marketing gera demanda previsível (mesmo que pequena)?",
      options: [
        { label: "Não", value: 0, icon: "✖" },
        { label: "Parcial", value: 5, icon: "⚠" },
        { label: "Sim", value: 10, icon: "✔" },
      ],
    },
    {
      text: "Seu preço/margem estão alinhados com o valor percebido?",
      options: [
        { label: "Não", value: 0, icon: "✖" },
        { label: "Parcial", value: 5, icon: "⚠" },
        { label: "Sim", value: 10, icon: "✔" },
      ],
    },
    {
      text: "Você tem um processo claro de vendas (etapas, argumentos e follow-up)?",
      options: [
        { label: "Não", value: 0, icon: "✖" },
        { label: "Parcial", value: 5, icon: "⚠" },
        { label: "Sim", value: 10, icon: "✔" },
      ],
    },
  ],
  processos: [
    {
      text: "Seu atendimento/entrega seguem um padrão (checklists, etapas e critérios)?",
      options: [
        { label: "Não", value: 0, icon: "✖" },
        { label: "Parcial", value: 5, icon: "⚠" },
        { label: "Sim", value: 10, icon: "✔" },
      ],
    },
    {
      text: "Você tem funções bem definidas (quem faz o quê) no dia a dia?",
      options: [
        { label: "Não", value: 0, icon: "✖" },
        { label: "Parcial", value: 5, icon: "⚠" },
        { label: "Sim", value: 10, icon: "✔" },
      ],
    },
    {
      text: "Seu negócio funciona sem você por algumas horas sem travar?",
      options: [
        { label: "Não", value: 0, icon: "✖" },
        { label: "Parcial", value: 5, icon: "⚠" },
        { label: "Sim", value: 10, icon: "✔" },
      ],
    },
    {
      text: "Você mede indicadores (vendas, conversão, satisfação, retrabalho)?",
      options: [
        { label: "Não", value: 0, icon: "✖" },
        { label: "Parcial", value: 5, icon: "⚠" },
        { label: "Sim", value: 10, icon: "✔" },
      ],
    },
    {
      text: "Você já começou a documentar processos (mesmo que simples)?",
      options: [
        { label: "Não", value: 0, icon: "✖" },
        { label: "Parcial", value: 5, icon: "⚠" },
        { label: "Sim", value: 10, icon: "✔" },
      ],
    },
  ],
  financeiro: [
    {
      text: "Você conhece seus custos reais (fixos e variáveis) com clareza?",
      options: [
        { label: "Não", value: 0, icon: "✖" },
        { label: "Parcial", value: 5, icon: "⚠" },
        { label: "Sim", value: 10, icon: "✔" },
      ],
    },
    {
      text: "Você mantém controle de caixa atualizado (entradas e saídas)?",
      options: [
        { label: "Não", value: 0, icon: "✖" },
        { label: "Parcial", value: 5, icon: "⚠" },
        { label: "Sim", value: 10, icon: "✔" },
      ],
    },
    {
      text: "Seu negócio dá lucro consistentemente?",
      options: [
        { label: "Não", value: 0, icon: "✖" },
        { label: "Parcial", value: 5, icon: "⚠" },
        { label: "Sim", value: 10, icon: "✔" },
      ],
    },
    {
      text: "Indicadores guiam decisões (margem, CAC, ticket, giro)?",
      options: [
        { label: "Não", value: 0, icon: "✖" },
        { label: "Parcial", value: 5, icon: "⚠" },
        { label: "Sim", value: 10, icon: "✔" },
      ],
    },
    {
      text: "Você tem capital/fôlego para crescer sem quebrar o caixa?",
      options: [
        { label: "Não", value: 0, icon: "✖" },
        { label: "Parcial", value: 5, icon: "⚠" },
        { label: "Sim", value: 10, icon: "✔" },
      ],
    },
  ],
};

const PILLARS: Pillar[] = ["marca", "processos", "financeiro"];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

/**
 * ✅ CORREÇÃO DO ERRO:
 * - Tipamos o reduce como <number>
 * - Assim o acumulador NUNCA vira null aos olhos do TS.
 */
function computeScore(values: Answer[]) {
  const sum = values.reduce<number>((acc, v) => acc + (v ?? 0), 0);
  const max = values.length * 10;
  return Math.round((sum / max) * 100);
}

function getResult(score: number) {
  if (score <= 49) {
    return {
      title: "Não está pronto para escalar",
      message:
        "Crescer agora aumenta o risco de prejuízo. O foco deve ser estruturar antes de expandir.",
      cta: "Receber plano de estruturação",
      tone: "red" as const,
    };
  }
  if (score <= 79) {
    return {
      title: "Quase pronto para escalar",
      message: "O negócio tem potencial, mas ainda possui gargalos que travam o crescimento.",
      cta: "Eliminar gargalos antes de crescer",
      tone: "yellow" as const,
    };
  }
  return {
    title: "Pronto para escalar",
    message: "O negócio está estruturado para crescer com segurança e previsibilidade.",
    cta: "Criar plano de crescimento",
    tone: "green" as const,
  };
}

function toneClasses(tone: "red" | "yellow" | "green") {
  if (tone === "red") {
    return {
      border: "border-red-500/60",
      glow: "shadow-[0_0_0_1px_rgba(239,68,68,0.25),0_18px_60px_-20px_rgba(239,68,68,0.45)]",
      badge: "bg-red-500/10 text-red-200 border-red-500/30",
      button: "bg-red-500 hover:bg-red-600 text-white",
    };
  }
  if (tone === "yellow") {
    return {
      border: "border-yellow-400/60",
      glow: "shadow-[0_0_0_1px_rgba(250,204,21,0.25),0_18px_60px_-20px_rgba(250,204,21,0.45)]",
      badge: "bg-yellow-400/10 text-yellow-100 border-yellow-400/30",
      button: "bg-yellow-400 hover:bg-yellow-500 text-black",
    };
  }
  return {
    border: "border-green-500/60",
    glow: "shadow-[0_0_0_1px_rgba(34,197,94,0.25),0_18px_60px_-20px_rgba(34,197,94,0.45)]",
    badge: "bg-green-500/10 text-green-200 border-green-500/30",
    button: "bg-green-500 hover:bg-green-600 text-white",
  };
}

function normalizeWhatsApp(raw: string) {
  // mantém números, remove tudo que não for dígito
  const digits = (raw || "").replace(/\D/g, "");
  // se o usuário digitar 91..., a gente assume BR +55
  if (digits.startsWith("55")) return digits;
  if (digits.length >= 10) return `55${digits}`;
  return digits;
}

function buildWhatsAppLink(payload: {
  name: string;
  email: string;
  whatsapp: string;
  score: number;
  title: string;
}) {
  const phone = "5591992751975"; // seu número fixo (já com DDI)
  const w = normalizeWhatsApp(payload.whatsapp);
  const text = [
    "Olá! Acabei de fazer o diagnóstico.",
    "",
    `Nome: ${payload.name}`,
    `Email: ${payload.email}`,
    `WhatsApp: ${w || payload.whatsapp}`,
    "",
    `Resultado: ${payload.title}`,
    `Score: ${payload.score}`,
  ].join("\n");

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  return url;
}

function getOptionClass(isSelected: boolean) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 border focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30";
  const idle =
    "border-white/15 bg-white/5 text-white/90 hover:bg-white/10 hover:border-white/25";
  const selected =
    "border-white/30 bg-white text-zinc-950 shadow-[0_12px_30px_-12px_rgba(255,255,255,0.35)] scale-[1.02]";
  return `${base} ${isSelected ? selected : idle}`;
}

export default function DiagnosticoPage() {
  const [answers, setAnswers] = useState<Record<Pillar, Answer[]>>({
    marca: Array(QUESTIONS.marca.length).fill(null),
    processos: Array(QUESTIONS.processos.length).fill(null),
    financeiro: Array(QUESTIONS.financeiro.length).fill(null),
  });

  const [lead, setLead] = useState({ name: "", email: "", whatsapp: "" });

  const [showResult, setShowResult] = useState(false);
  const [attemptedShow, setAttemptedShow] = useState(false);

  const allAnswered = useMemo(() => {
    return PILLARS.every((p) => answers[p].every((v) => v !== null));
  }, [answers]);

  const leadValid = useMemo(() => {
    const nameOk = lead.name.trim().length >= 2;
    const emailOk = /^\S+@\S+\.\S+$/.test(lead.email.trim());
    const waOk = normalizeWhatsApp(lead.whatsapp).length >= 12; // ex: 55 + DDD + número
    return nameOk && emailOk && waOk;
  }, [lead]);

  const score = useMemo(() => {
    const all = [...answers.marca, ...answers.processos, ...answers.financeiro];
    return clamp(computeScore(all), 0, 100);
  }, [answers]);

  const result = useMemo(() => getResult(score), [score]);
  const tone = toneClasses(result.tone);

  function handleAnswer(pillar: Pillar, index: number, value: number) {
    setAnswers((prev) => {
      const next = { ...prev };
      const arr = [...next[pillar]];
      arr[index] = value;
      next[pillar] = arr;
      return next;
    });
  }

  function onShowResult() {
    setAttemptedShow(true);

    // trava: só libera se tiver lead preenchido + todas perguntas respondidas
    if (!leadValid || !allAnswered) {
      setShowResult(false);
      return;
    }
    setShowResult(true);
  }

  function onCloseModal() {
    setShowResult(false);
  }

  const requiredMessage = useMemo(() => {
    if (!attemptedShow) return "";
    if (!leadValid) return "Preencha nome, e-mail e WhatsApp para exibir o resultado.";
    if (!allAnswered) return "Responda todas as perguntas para exibir o resultado.";
    return "";
  }, [attemptedShow, leadValid, allAnswered]);

  const whatsappCta = useMemo(() => {
    return buildWhatsAppLink({
      name: lead.name.trim(),
      email: lead.email.trim(),
      whatsapp: lead.whatsapp.trim(),
      score,
      title: result.title,
    });
  }, [lead, score, result.title]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_600px_at_20%_0%,rgba(255,255,255,0.12),transparent_60%),radial-gradient(900px_500px_at_80%_10%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(700px_500px_at_50%_90%,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-4xl px-4 py-10">
        {/* Header */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Diagnóstico: Seu negócio está pronto para escalar?
          </h1>
          <p className="mt-2 text-sm text-white/70">
            Responda rapidamente e veja o resultado no final.
          </p>

          <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/80">
            “Empresários que crescem sem diagnóstico perdem dinheiro. Não seja um deles.”
          </div>

          {/* Lead */}
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-white/70">Nome</label>
              <input
                value={lead.name}
                onChange={(e) => setLead((p) => ({ ...p, name: e.target.value }))}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm outline-none focus:border-white/25 focus:bg-white/10"
                placeholder="Seu nome"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-white/70">E-mail</label>
              <input
                value={lead.email}
                onChange={(e) => setLead((p) => ({ ...p, email: e.target.value }))}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm outline-none focus:border-white/25 focus:bg-white/10"
                placeholder="seuemail@dominio.com"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-white/70">WhatsApp</label>
              <input
                value={lead.whatsapp}
                onChange={(e) => setLead((p) => ({ ...p, whatsapp: e.target.value }))}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm outline-none focus:border-white/25 focus:bg-white/10"
                placeholder="(91) 99999-9999"
              />
            </div>
          </div>

          {/* Required msg */}
          {requiredMessage ? (
            <div className="mt-4 rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-2 text-sm text-red-200">
              {requiredMessage}
            </div>
          ) : null}

          {/* Footer actions */}
          <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-xs text-white/60">
              Complete o formulário e responda tudo para liberar o resultado.
            </div>

            <button
              type="button"
              onClick={onShowResult}
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white px-5 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-white/90"
            >
              Exibir resultado do diagnóstico
            </button>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {PILLARS.map((pillar) => (
            <section
              key={pillar}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h2 className="text-lg font-semibold tracking-tight">
                {pillar === "marca" ? "Marca" : pillar === "processos" ? "Processos" : "Financeiro"}
              </h2>

              <div className="mt-4 space-y-5">
                {QUESTIONS[pillar].map((q, i) => (
                  <div key={`${pillar}-${i}`} className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <p className="text-sm font-semibold text-white/90">{q.text}</p>

                    <div className="mt-3 flex flex-wrap gap-3">
                      {q.options.map((opt) => {
                        const selected = answers[pillar][i] === opt.value;

                        return (
                          <button
                            key={opt.label}
                            type="button"
                            onClick={() => handleAnswer(pillar, i, opt.value)}
                            className={getOptionClass(selected)}
                            aria-pressed={selected}
                          >
                            <span className="text-base">{opt.icon}</span>
                            <span>{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Modal */}
        {showResult ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={onCloseModal}
            />
            <div
              className={`relative w-full max-w-lg rounded-2xl border ${tone.border} bg-zinc-950/90 p-6 ${tone.glow}`}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${tone.badge}`}
                  >
                    Resultado do diagnóstico
                  </div>
                  <h3 className="mt-3 text-xl font-bold">{result.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{result.message}</p>
                </div>

                <button
                  type="button"
                  onClick={onCloseModal}
                  className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/80">
                  <span className="font-semibold text-white">Seu score:</span>{" "}
                  <span className="font-bold">{score}</span>
                </p>
              </div>

              <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <a
                  href={whatsappCta}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition md:w-auto ${tone.button}`}
                >
                  {result.cta}
                </a>

                <button
                  type="button"
                  onClick={onCloseModal}
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 md:w-auto"
                >
                  Fechar
                </button>
              </div>

              <div className="mt-4 text-center text-xs text-white/50">
                Enviaremos seu resultado junto com seus dados para atendimento.
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
