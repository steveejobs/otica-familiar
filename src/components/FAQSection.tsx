import { AnimatedReveal } from "@/components/AnimatedReveal";

const faqs = [
  {
    question: "A equipe ajuda a escolher a armação?",
    answer:
      "Sim. O atendimento ajuda você a comparar formato, conforto, rotina e estilo antes de escolher.",
  },
  {
    question: "A Ótica da Família tem óculos solar?",
    answer:
      "Sim. Você encontra opções de óculos solar para diferentes estilos e momentos do dia.",
  },
  {
    question: "A loja trabalha com lentes?",
    answer:
      "Sim. A Ótica da Família trabalha com lentes e orienta você durante a escolha da solução mais adequada à sua necessidade.",
  },
  {
    question: "Onde fica a Ótica da Família?",
    answer:
      "A Ótica da Família fica em Araguaína - TO. Use o botão Como chegar para abrir a localização oficial no Google Maps.",
  },
  {
    question: "Posso ver modelos antes de visitar?",
    answer:
      "Sim. Acesse o Instagram oficial para conhecer armações, óculos solar e novidades da loja.",
  },
];

export function FAQSection() {
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="site-shell faq-layout">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Dúvidas comuns</p>
          <h2 id="faq-title">Informações rápidas antes da sua visita.</h2>
        </AnimatedReveal>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <AnimatedReveal
              className="faq-item"
              key={item.question}
              delay={index * 0.04}
            >
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
