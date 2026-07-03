import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  FileText,
  Gem,
  MapPin,
  Instagram,
  MousePointer2,
  Search,
  Sparkles,
  Star,
  Store,
  TrendingUp,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { media, site, testimonialsSummary } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proposta Comercial | Ótica da Família",
  description:
    "Proposta de crescimento digital para a Ótica da Família em Araguaína.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: "/proposta",
  },
};

const proposalContactUrl = site.instagramUrl;

const pillars = [
  {
    title: "Presença",
    text: "Conteúdo para manter a Ótica da Família lembrada.",
    icon: Store,
  },
  {
    title: "Reputação",
    text: "Google, avaliações e confiança local.",
    icon: Star,
  },
  {
    title: "Captação",
    text: "Campanhas para rota e visita.",
    icon: MousePointer2,
  },
];

const siteIncludes = [
  "Landing page premium",
  "Copy e estrutura de conversão",
  "Layout responsivo",
  "Instagram e Google Maps configurados",
  "Google Maps e rota",
  "Google Reviews",
  "Galeria/vitrine",
  "SEO local básico",
  "Publicação",
  "Ajustes finais combinados",
];

const plans = [
  {
    name: "Instagram Local",
    price: "R$ 1.300/mês",
    text: "Para manter a marca presente, gerar lembrança local e mostrar produtos, bastidores, atendimento e novidades.",
    includes: [
      "8 Reels por mês",
      "12 stories por mês",
      "4 posts/feed",
      "Roteiros curtos",
      "Edição dos vídeos",
      "Legendas com CTA",
      "Organização de temas do mês",
    ],
  },
  {
    name: "Google Captação Local",
    price: "R$ 1.450/mês + mídia",
    text: "Para aparecer quando alguém procura ótica, gerar rotas, WhatsApp e novas avaliações.",
    includes: [
      "Google Business",
      "Sistema de avaliações",
      "QR Code de avaliação",
      "4 posts no Google",
      "Google Ads local",
      "Campanha para WhatsApp",
      "Campanha para rota/Maps",
      "Palavras-chave locais",
      "Relatório mensal",
    ],
    note: "Verba de anúncios paga direto pelo cliente.",
  },
  {
    name: "Crescimento Completo",
    badge: "Mais recomendado",
    price: "R$ 2.200/mês + mídia",
    text: "O pacote mais completo: une Instagram, Google, avaliações e anúncios locais para fortalecer presença e captação.",
    includes: [
      "Tudo do Instagram Local",
      "Tudo do Google Captação Local",
      "Conteúdo mensal",
      "Google Business",
      "Avaliações",
      "Google Ads local",
      "Campanhas para WhatsApp e rota",
      "Relatório mensal",
    ],
    note: "Verba de anúncios paga direto pelo cliente.",
  },
];

const comparison = [
  ["Pagamento único", true, false, false, false],
  ["Conteúdo Instagram", false, true, false, true],
  ["Google Business", false, false, true, true],
  ["Avaliações", true, false, true, true],
  ["Google Ads", false, false, true, true],
  ["Campanha WhatsApp", true, false, true, true],
  ["Campanha rota", true, false, true, true],
  ["Relatório mensal", false, false, true, true],
] as const;

const combos = [
  {
    name: "Site",
    price: "R$ 1.450 pagamento único",
    text: "Base premium para organizar a presença digital e converter visitantes em Instagram, rota e loja.",
  },
  {
    name: "Site + Google Captação por 3 meses",
    price: "R$ 5.800",
    calc: "Site R$ 1.450 + R$ 1.450 x 3",
    text: "Ideal para transformar presença digital em busca, rota e WhatsApp.",
  },
  {
    name: "Site + Crescimento Completo por 3 meses",
    price: "R$ 8.050",
    calc: "Site R$ 1.450 + R$ 2.200 x 3",
    text: "Ideal para unir site, Instagram, Google, avaliações e anúncios locais.",
    featured: true,
  },
];

const conditions = [
  "O site é pagamento único.",
  "As mensalidades são pagas antecipadamente.",
  "Os trabalhos mensais começam após confirmação do pagamento do ciclo.",
  "A verba de anúncios não está inclusa e é paga diretamente pelo cliente à plataforma.",
  "Mudanças fora do escopo aprovado podem ser orçadas separadamente.",
];

function ProposalButton({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  const className = light
    ? "proposal-button proposal-button-light"
    : "proposal-button proposal-button-primary";

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={className}>
        <span>{children}</span>
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      <span>{children}</span>
      <Instagram size={18} aria-hidden="true" />
    </a>
  );
}

function CheckIcon({ active }: { active: boolean }) {
  return (
    <span className={`proposal-check${active ? " is-active" : ""}`}>
      {active ? <Check size={16} aria-hidden="true" /> : "—"}
    </span>
  );
}

export default function ProposalPage() {
  return (
    <main className="proposal-page">
      <section className="proposal-hero" aria-labelledby="proposal-title">
        <div className="proposal-shell proposal-hero-grid">
          <AnimatedReveal className="proposal-hero-copy">
            <Link
              className="proposal-logo"
              href="/"
              aria-label="Voltar para o site da Ótica da Família"
            >
              <Image
                src={site.logoIcon}
                alt=""
                width={72}
                height={72}
                priority
                aria-hidden="true"
              />
              <span>{site.name}</span>
            </Link>

            <div className="proposal-kicker">
              <Store size={16} aria-hidden="true" />
              <span>Araguaína · Ótica local · Contato pelo Instagram</span>
            </div>

            <h1 id="proposal-title">
              Proposta de crescimento digital para a Ótica da Família
            </h1>
            <p>
              Mais do que presença online: uma estrutura para transformar
              Instagram, Google e site em rota e visita na loja.
            </p>

            <div className="proposal-hero-actions">
              <ProposalButton href="#pacotes">Ver pacotes</ProposalButton>
              <ProposalButton href="#recomendacao" light>
                Minha recomendação
              </ProposalButton>
            </div>
          </AnimatedReveal>

          <AnimatedReveal className="proposal-hero-visual" delay={0.08}>
            <div className="proposal-rating-card">
              <span className="proposal-rating-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={15} fill="currentColor" />
                ))}
              </span>
              <strong>
                {testimonialsSummary.rating.toFixed(1).replace(".", ",")} no
                Google
              </strong>
              <span>
                {testimonialsSummary.total} avaliações · Araguaína - TO
              </span>
            </div>
            <div className="proposal-showcase-main proposal-collage">
              <Image
                src={media.heroPoster}
                alt="Vitrine visual da Ótica da Família"
                fill
                sizes="(max-width: 980px) 88vw, 520px"
                priority
              />
              <Image
                src="/assets/otica-da-familia/colecoes/colecao-03.jpg"
                alt=""
                width={180}
                height={180}
                className="proposal-collage-card"
                aria-hidden="true"
              />
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="proposal-section" aria-labelledby="diagnosis-title">
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-section-heading proposal-heading-center">
            <span className="proposal-eyebrow">Diagnóstico</span>
            <h2 id="diagnosis-title">O próximo passo depois do site</h2>
            <p>
              O site organiza a presença digital. Agora, o crescimento vem de
              manter a marca ativa no Instagram, fortalecer o Google, gerar
              avaliações e aparecer para quem procura uma ótica em Araguaína.
            </p>
          </AnimatedReveal>

          <div className="proposal-pillar-grid">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <AnimatedReveal
                  key={pillar.title}
                  className="proposal-pillar-card"
                  delay={index * 0.05}
                >
                  <span className="proposal-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="proposal-section" aria-labelledby="site-title">
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-site-card">
            <div className="proposal-site-copy">
              <span className="proposal-eyebrow">Projeto único</span>
              <h2 id="site-title">Site premium</h2>
              <div className="proposal-price-row">
                <strong>R$ 1.450</strong>
                <span>Pagamento único</span>
              </div>
              <p>
                Uma landing page construída para posicionar a Ótica da Família
                como ótica local de referência e conduzir o visitante para
                Instagram, rota, avaliações e vitrine.
              </p>
            </div>

            <div
              className="proposal-site-includes"
              aria-label="Itens inclusos no site premium"
            >
              {siteIncludes.map((item) => (
                <span key={item}>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </span>
              ))}
              <p className="proposal-note">
                O site é entregue como projeto único. Gestão mensal, conteúdos e
                anúncios são serviços separados.
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section
        id="pacotes"
        className="proposal-section proposal-monthly-section"
        aria-labelledby="plans-title"
      >
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-section-heading">
            <span className="proposal-eyebrow">Pacotes mensais</span>
            <h2 id="plans-title">
              Planos para manter a Ótica da Família aparecendo e captando
            </h2>
            <p>
              Os pacotes mensais são separados do site. A mensalidade é paga no
              início do ciclo e os trabalhos começam após confirmação do
              pagamento.
            </p>
          </AnimatedReveal>

          <div className="proposal-plan-grid">
            {plans.map((plan, index) => (
              <AnimatedReveal
                key={plan.name}
                className={`proposal-plan-card${plan.badge ? " is-featured" : ""}`}
                delay={index * 0.05}
              >
                {plan.badge ? (
                  <span className="proposal-plan-badge">{plan.badge}</span>
                ) : null}
                <h3>{plan.name}</h3>
                <strong className="proposal-plan-price">{plan.price}</strong>
                <p>{plan.text}</p>
                <ul>
                  {plan.includes.map((item) => (
                    <li key={item}>
                      <Check size={16} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {plan.note ? (
                  <p className="proposal-plan-note">{plan.note}</p>
                ) : null}
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="proposal-section" aria-labelledby="compare-title">
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-section-heading">
            <span className="proposal-eyebrow">Comparativo rápido</span>
            <h2 id="compare-title">Escolha pelo papel de cada pacote</h2>
          </AnimatedReveal>

          <AnimatedReveal className="proposal-comparison-wrap" delay={0.06}>
            <div className="proposal-comparison-table" role="table">
              <div className="proposal-comparison-row is-head" role="row">
                <div role="columnheader">Entrega</div>
                <div role="columnheader">Site</div>
                <div role="columnheader">Instagram</div>
                <div role="columnheader">Google Captação</div>
                <div role="columnheader">Completo</div>
              </div>
              {comparison.map(([label, sitePlan, instagram, google, full]) => (
                <div className="proposal-comparison-row" role="row" key={label}>
                  <div role="cell">{label}</div>
                  <div role="cell">
                    <CheckIcon active={sitePlan} />
                  </div>
                  <div role="cell">
                    <CheckIcon active={instagram} />
                  </div>
                  <div role="cell">
                    <CheckIcon active={google} />
                  </div>
                  <div role="cell">
                    <CheckIcon active={full} />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="proposal-section" aria-labelledby="combos-title">
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-section-heading proposal-heading-center">
            <span className="proposal-eyebrow">Combinações para começar</span>
            <h2 id="combos-title">Três caminhos claros de aprovação</h2>
          </AnimatedReveal>

          <div className="proposal-combo-grid">
            {combos.map((combo, index) => (
              <AnimatedReveal
                key={combo.name}
                className={`proposal-combo-card${combo.featured ? " is-featured" : ""}`}
                delay={index * 0.05}
              >
                <span>Opção {String.fromCharCode(65 + index)}</span>
                <h3>{combo.name}</h3>
                <strong>{combo.price}</strong>
                {combo.calc ? <small>{combo.calc}</small> : null}
                <p>{combo.text}</p>
              </AnimatedReveal>
            ))}
          </div>

          <p className="proposal-media-note">Verba de anúncios não inclusa.</p>
        </div>
      </section>

      <section
        id="recomendacao"
        className="proposal-section"
        aria-labelledby="recommendation-title"
      >
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-recommendation-panel">
            <div>
              <span className="proposal-eyebrow">Minha recomendação</span>
              <h2 id="recommendation-title">
                Começar com força pelos primeiros 3 meses
              </h2>
              <p>
                Começar com o site e o pacote Crescimento Completo por 3 meses.
                Assim a Ótica da Família não fica apenas com uma página bonita:
                ela ganha presença, conteúdo, reputação no Google e campanhas
                locais para Instagram e rota.
              </p>
              <div className="proposal-best-choice">
                <BadgeCheck size={19} aria-hidden="true" />
                <strong>
                  Melhor escolha: Site + Crescimento Completo por 3 meses
                </strong>
              </div>
              <ProposalButton href={proposalContactUrl}>
                Conversar sobre a proposta no Instagram
              </ProposalButton>
            </div>
            <div className="proposal-recommendation-media">
              <Image
                src="/assets/otica-da-familia/espaco/ambiente.png"
                alt="Ambiente da Ótica da Família"
                fill
                sizes="(max-width: 900px) 88vw, 380px"
                loading="lazy"
              />
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="proposal-section" aria-labelledby="conditions-title">
        <div className="proposal-shell proposal-conditions">
          <AnimatedReveal>
            <span className="proposal-eyebrow">Condições comerciais</span>
            <h2 id="conditions-title">
              Condições simples para começar sem ruído
            </h2>
          </AnimatedReveal>
          <AnimatedReveal as="div" delay={0.06}>
            <ul>
              {conditions.map((condition) => (
                <li key={condition}>
                  <Check size={16} aria-hidden="true" />
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
          </AnimatedReveal>
        </div>
      </section>

      <section className="proposal-final" aria-labelledby="final-title">
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-final-panel">
            <div className="proposal-final-icons" aria-hidden="true">
              <FileText size={24} />
              <Search size={24} />
              <TrendingUp size={24} />
              <Sparkles size={24} />
              <MapPin size={24} />
              <BarChart3 size={24} />
              <Gem size={24} />
              <Instagram size={24} />
            </div>
            <h2 id="final-title">
              Vamos transformar a presença digital da Ótica da Família em
              atendimento real?
            </h2>
            <div className="proposal-final-actions">
              <ProposalButton href={proposalContactUrl}>
                Conversar sobre a proposta no Instagram
              </ProposalButton>
              <ProposalButton href="/" light>
                Voltar para o site
              </ProposalButton>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
}
