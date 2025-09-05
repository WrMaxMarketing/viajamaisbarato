"use client"

// import type React from "react"
import { AnimatedStat } from "@/components/animated-stat";
import { TiltImage } from "@/components/tilt-image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Globe, Menu, Star, Users } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { useEffect, useState } from "react";

const PURCHASE_URL = "/comprar"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div
                className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <img
                  src="/images/logo-v.png"
                  className="h-20 hover:scale-105 transition-transform duration-300"
                  alt="Viaja + Barato"
                />
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#como"
                className="text-sm font-medium text-slate-700 hover:text-[#FFD700] transition-colors duration-300 hover:scale-105 transform"
              >
                Como Funciona
              </a>
              <a
                href="#whatsapp"
                className="text-sm font-medium text-slate-700 hover:text-[#FFD700] transition-colors duration-300 hover:scale-105 transform"
              >
                Conversas WhatsApp
              </a>
              <a
                href="#afiliados"
                className="text-sm font-medium text-slate-700 hover:text-[#FFD700] transition-colors duration-300 hover:scale-105 transform"
              >
                Para Afiliados
              </a>
              <a
                href="#depoimentos"
                className="text-sm font-medium text-slate-700 hover:text-[#FFD700] transition-colors duration-300 hover:scale-105 transform"
              >
                Depoimentos
              </a>
              <a
                href="#blog"
                className="text-sm font-medium text-slate-700 hover:text-[#FFD700] transition-colors duration-300 hover:scale-105 transform"
              >
                Blog
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <Button className="hidden sm:flex text-white hover:bg-[#0077B6] bg-[#00B4D8] hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                <Link href={PURCHASE_URL}>Adquirir agora</Link>
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden hover:bg-[#FFD700]/20">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-[#FFD700]/10 via-white to-[#00B4D8]/10" id="como">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-[#3388A3] animate-pulse">
                <Globe className="h-4 w-4" />
                Grupo de Alertas no WhatsApp
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Viaje até{" "}
                <span className="text-transparent bg-gradient-to-r from-[#3388A3] to-[#27C4F2] bg-clip-text animate-pulse">
                  80% mais barato
                </span>{" "}
                com alertas em tempo real
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Receba as melhores oportunidades de <strong>voos, milhas e pontos</strong> diretamente no WhatsApp. Sem
                venda no site — só informação útil e curada.
              </p>

              <div className="flex items-center gap-8 text-sm">
                <Bullet>10k+ membros</Bullet>
                <Bullet color="bg-[#FFD700]">98% satisfação</Bullet>
                <Bullet color="bg-[#00B4D8]">Alertas 24/7</Bullet>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <ImageCard
                    className="h-48 hover:scale-105 transition-transform duration-500 animate-float"
                    src="/images/foto1.jpeg"
                    captionTitle="100% Verificado"
                    captionSub="Ofertas com curadoria"
                  />
                  <ImageCard
                    className="h-32 hover:scale-105 transition-transform duration-500 animate-float-delayed"
                    src="/images/foto-aviao.jpg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <ImageCard
                    className="h-32 hover:scale-105 transition-transform duration-500 animate-float-delayed"
                    src="/images/foto-viajante2.jpeg"
                  />
                  <ImageCard
                    className="h-48 hover:scale-105 transition-transform duration-500 animate-float"
                    src="/images/foto3.jpeg"
                    captionTitle="Exclusivo para membros"
                    captionSub="Acesso via WhatsApp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE / MÉTRICAS */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-[#FFD700]/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* mobile-first: texto primeiro, imagens depois; no desktop invertido */}
          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* TEXTO */}
            <div className="space-y-6 lg:order-2">
              <span className="inline-flex w-auto items-center gap-2 rounded-full bg-[#00B4D8] px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white">
                Sobre o Grupo
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                Alertas de{" "}
                <span className="bg-gradient-to-r from-[#3388A3] to-[#27C4F2] bg-clip-text text-transparent">
                  voos, milhas e pontos
                </span>{" "}
                em tempo real
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl">
                Monitoramos companhias, programas e bancos o dia todo. Você recebe só o que
                vale a pena — com passo a passo para aproveitar antes que acabe.
              </p>

              {/* STATS + CTA */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
                  <AnimatedStat value={30} suffix="+" label="Alertas/dia" />
                  <AnimatedStat value={100} suffix="+" label="Cias & Programas" />
                  <AnimatedStat value={1500} prefix="R$ " label="Economia média" formatter="money" />
                </div>

                {/* CTA mais forte e responsivo */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <Link
                    href={PURCHASE_URL}
                    className="
                inline-flex w-full sm:w-auto items-center justify-center gap-2
                rounded-xl px-6 sm:px-7 py-4 text-base sm:text-lg font-semibold
                text-white shadow-lg hover:shadow-xl
                bg-gradient-to-r from-[#3388A3] to-[#27C4F2]
                hover:from-[#27C4F2] hover:to-[#3388A3]
                ring-1 ring-[#27C4F2]/30 focus:outline-none
                focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#27C4F2]
                transition-all
              "
                  >
                    Adquirir agora
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                  <span className="text-sm text-slate-500">
                    Acesso imediato via WhatsApp • Sem burocracia
                  </span>
                </div>
              </div>
            </div>

            {/* IMAGENS (lado esquerdo no desktop) */}
            <div className="lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <TiltImage className="h-36 sm:h-40 rotate-[2deg]" src="/images/img1.jpg" />
                <TiltImage className="h-28 sm:h-32 -rotate-[2deg]" src="/images/img2.jpg" />
                <TiltImage className="h-28 sm:h-32 rotate-[1.5deg]" src="/images/img3.jpg" />
                <TiltImage className="h-36 sm:h-40 -rotate-[1deg]" src="/images/img4.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECURSOS / AFILIADOS */}
      <section className="py-20 bg-gradient-to-br from-white to-[#00B4D8]/5" id="afiliados">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-[#3388A3] mb-4">
              Recursos & Afiliados
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Tudo para{" "}
              <span className="text-transparent bg-gradient-to-r from-[#3388A3] to-[#00B4D8] bg-clip-text">
                viajar barato
              </span>{" "}
              e lucrar divulgando
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              title="Alertas em Tempo Real"
              text="Receba no WhatsApp oportunidades de transferência bonificada, emissões com milhas, promoções e erros de tarifa."
              color="from-[#3388A3] to-[#00B4D8]"
            />
            <Feature
              title="Curadoria Inteligente"
              text="Só o que compensa: filtros por origem/destino, classe, milhas/taxas e passo a passo claro."
              color="from-[#00B4D8] to-[#0077B6]"
              Icon={Users}
            />
            <Feature
              title="Programa de Afiliados"
              text="Influencers divulgam o Viaja + Barato e vendem acessos. Quanto maior a base, maior a % de comissão."
              color="from-[#0077B6] to-[#3388A3]"
              Icon={Check}
            />
          </div>
        </div>
      </section>

      {/* CONVERSAS WHATSAPP */}
      <section id="whatsapp" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 mb-4">
              Exemplos reais de alertas
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Como chegam as mensagens no{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                WhatsApp
              </span>
            </h2>
          </div>

          {/* APENAS UM CHAT, sem card branco extra */}
          <WhatsAppChat
            title="Viaja + Barato • Ofertas"
            messages={[
              {
                text:
                  "✈️ 🇧🇷 BRASÍLIA (BSB) → 🇨🇴 BOGOTÁ (BOG) – GOL\n🌍 Classe: Econômica\n\n🔹 Smiles → 31.000 milhas + 💵 R$ 153,14\n\n📅 Disponibilidade\nSET/2025: 24, 28\nOUT/2025: 01, 03, 05, 06, 13, 15, 19, 20, 22, 24, 27, 29",
              },
              {
                text:
                  "⚡ Transferência bonificada LATAM Pass 90% (Banco Inter). Dura HOJE.\n➡️ Estratégia: transfira 40k → receba 76k.\nEx.: GRU–MCO desde 23k + taxas.",
              },
              {
                text:
                  "🧳 Dica: tarifa erro Azul POA–EZE\nIda/volta a partir de R$ 289 + taxas.\nJan–Mar/2026, poucas datas.",
              },
            ]}
          />
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-20 bg-gradient-to-br from-white to-[#00B4D8]/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* ESQUERDA: card mais baixo */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-[#3388A3]">
                O que eles dizem
              </div>

              <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                Histórias reais de{" "}
                <span className="bg-gradient-to-r from-[#3388A3] to-[#00B4D8] bg-clip-text text-transparent">
                  quem já economizou
                </span>
              </h2>

              <Card className="border-0 bg-white p-0 shadow-lg transition-all duration-300 hover:shadow-xl">
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#FFD700] to-[#00B4D8]" />
                    <div>
                      <div className="font-semibold text-slate-900">Maria Silva</div>
                      <div className="text-xs text-slate-500">Viajante Frequente</div>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>

                  <blockquote className="text-base leading-relaxed text-slate-700">
                    "Economizei mais de R$ 3.000 na minha última viagem. Os alertas chegam rápido e o passo a passo é muito
                    prático."
                  </blockquote>
                </CardContent>
              </Card>
            </div>

            {/* DIREITA: mosaic 100% preenchido */}
            <div className="relative">
              {/*
          auto-rows cria “tijolinhos” de altura fixa (96px). Cada item
          usa row-span/col-span para compor o mosaico.
        */}
              <div className="grid auto-rows-[96px] grid-cols-6 gap-3">
                <MosaicImage
                  src="/images/comp1.jpg"
                  className="col-span-3 row-span-2"
                />
                <MosaicImage
                  src="/images/comp2.jpg"
                  className="col-span-3 row-span-2"
                />
                <MosaicImage
                  src="/images/comp3.jpg"
                  className="col-span-2 row-span-3"
                />
                <MosaicImage
                  src="/images/comp4.jpg"
                  className="col-span-4 row-span-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Quer receber alertas no WhatsApp?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Entre agora para acompanhar oportunidades em tempo real e viajar pagando menos.
          </p>
          <Button className="bg-gradient-to-r from-[#FDD405] to-[#FDD405] hover:from-[#FFD700]/90 hover:to-[#0077B6] text-slate-900 font-bold px-14 py-6 text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-[#FFD700]/25">
            <Link href={PURCHASE_URL}>Adquirir agora</Link>
          </Button>
        </div>
      </section>

      {/* FOOTER SIMPLES */}
      <footer className="bg-slate-900 px-6 pb-16 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-start gap-3">
            <div>
              <img
                src="/images/logo-v.png"
                className="h-30 mb-[-20px] ml-[-20px] hover:scale-105 transition-transform duration-300"
                alt="Viaja + Barato"
              />
              <p className="text-white/70 mt-2 max-w-md">
                O grupo de alertas nº 1 para viajar barato com milhas, pontos e promoções em tempo real.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between text-sm text-white/60">
            <div>© {new Date().getFullYear()} Viaja + Barato. Todos os direitos reservados.</div>
            <div>Política de Privacidade • Termos de Uso</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ===== Subcomponentes ===== */

function Bullet({
  children,
  color = "bg-[#00B4D8]",
}: {
  children: React.ReactNode
  color?: string
}) {
  return (
    <div className="flex items-center gap-2">
      <div className={`h-2 w-2 rounded-full ${color} animate-pulse`} />
      <span className="text-slate-600">{children}</span>
    </div>
  )
}

/* Card de recurso */
function Feature({
  title,
  text,
  color,
  Icon = Check,
}: {
  title: string
  text: string
  color: string
  Icon?: React.ComponentType<any>
}) {
  return (
    <Card className="p-8 border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white text-center group">
      <CardContent className="p-0 space-y-6">
        <div
          className={`mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${color} text-white group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0077B6] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed">{text}</p>
      </CardContent>
    </Card>
  )
}

/* Mini componentes de imagem */
function ImageCard({
  src,
  captionTitle,
  captionSub,
  className = "",
}: {
  src: string
  captionTitle?: string
  captionSub?: string
  className?: string
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-lg ${className}`}>
      <img src={src || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
      {(captionTitle || captionSub) && (
        <div className="absolute bottom-4 left-4 text-white drop-shadow">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
            {captionTitle && <div className="text-sm font-medium text-white">{captionTitle}</div>}
            {captionSub && <div className="text-xs text-white/90">{captionSub}</div>}
          </div>
        </div>
      )}
    </div>
  )
}


function MosaicImage({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-sm transition-transform duration-300 hover:scale-[1.03] ${className}`}
    >
      {/* a imagem cobre 100% do bloco */}
      <img src={src} alt="" className="block h-full w-full object-cover" />
      {/* brilho sutil no hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
    </div>
  );
}


/** ===== WhatsAppThread (melhorado) ===== */
export function WhatsAppChat({
  title,
  messages,
}: {
  title: string;
  messages: { text: string }[];
}) {
  return (
    <div
      className="
        group overflow-hidden rounded-2xl shadow-md ring-1 ring-emerald-100
        transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:ring-emerald-200
      "
    >
      {/* Header do WhatsApp */}
      <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-sm font-semibold">
          VB
        </div>
        <div className="flex-1 leading-tight">
          <div className="font-semibold">{title}</div>
          <div className="text-[11px] text-white/80">online • hoje</div>
        </div>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px]">WhatsApp</span>
      </div>

      {/* Área do chat: papel de parede + bolhas */}
      <div
        className="relative p-4"
        style={{
          // cor base do wallpaper do WhatsApp
          backgroundColor: "#ECE5DD",
        }}
      >
        {/* textura sutil do wallpaper (SVG inline) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[.14]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(0,0,0,.35) 0.6px, transparent 0.6px)',
            backgroundSize: "8px 8px",
          }}
        />

        <div className="relative z-[1] space-y-3">
          {messages.map((m, i) => (
            <BubbleLeft key={i}>
              <FormattedWhatsText text={m.text} />
            </BubbleLeft>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Bolha de mensagem à esquerda com “rabinho” */
function BubbleLeft({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative max-w-[92%] rounded-2xl border border-black/5 bg-[#DCF8C6] px-4 py-3 shadow-sm">
      {/* rabinho */}
      <div className="pointer-events-none absolute -left-1.5 bottom-0 h-4 w-4 rotate-45 rounded-bl-[14px] bg-[#DCF8C6] border-l border-b border-black/5" />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

/** Formatação: parágrafos, listas e destaques simples (R$, milhas, programas) */
function FormattedWhatsText({ text }: { text: string }) {
  const paragraphs = React.useMemo(() => text.trim().split(/\n\s*\n/), [text]);

  return (
    <div className="space-y-3 text-[14px] leading-relaxed text-slate-800">
      {paragraphs.map((block, idx) => {
        const lines = block.split("\n");
        const isList = lines.every((l) =>
          /^[\u2022•\-]|^(\d+\)|➡️|🔹|⚡|🧳)/.test(l.trim())
        );

        if (isList) {
          return (
            <ul key={idx} className="ml-1 space-y-1">
              {lines.map((l, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>{stripBullet(l)}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={idx} className="whitespace-pre-wrap">
            {highlightTokens(block)}
          </p>
        );
      })}
    </div>
  );
}

function stripBullet(l: string) {
  return l.replace(/^([\u2022•\-]|(\d+\)|➡️|🔹|⚡|🧳))\s?/, "").trim();
}

/** destaca R$, milhas e programas sem usar JSX namespace */
function highlightTokens(txt: string): React.ReactNode[] {
  const TOKENS: { re: RegExp; cls: string }[] = [
    { re: /\bSmiles\b/g, cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { re: /\bLATAM Pass\b/g, cls: "bg-pink-50 text-pink-700 border-pink-200" },
    { re: /\bTAP\b|\bMiles&Go\b/g, cls: "bg-teal-50 text-teal-700 border-teal-200" },
    { re: /\bAzul\b/g, cls: "bg-sky-50 text-sky-700 border-sky-200" },
    { re: /\bGOL\b/g, cls: "bg-amber-50 text-amber-700 border-amber-200" },
    { re: /R\$\s?[\d\.\,]+/g, cls: "bg-emerald-600/10 text-emerald-700 border-emerald-200" },
    { re: /(\d+[kK]|[\d\.\,]+)\s?milhas/g, cls: "bg-emerald-600/10 text-emerald-700 border-emerald-200" },
  ];

  let fragments: React.ReactNode[] = [txt];

  TOKENS.forEach(({ re, cls }) => {
    const next: React.ReactNode[] = [];
    fragments.forEach((frag, idx) => {
      if (typeof frag !== "string") return next.push(frag);

      let last = 0;
      for (const m of frag.matchAll(re)) {
        const start = m.index ?? 0;
        const end = start + m[0].length;
        if (start > last) next.push(frag.slice(last, start));
        next.push(
          <span
            key={`${idx}-${start}`}
            className={`mx-0.5 -my-0.5 inline-block rounded border px-1 py-0.5 text-[12px] ${cls}`}
          >
            {m[0]}
          </span>
        );
        last = end;
      }
      if (last < frag.length) next.push(frag.slice(last));
    });
    fragments = next;
  });

  return fragments;
}