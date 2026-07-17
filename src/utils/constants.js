import { Instagram, Linkedin, Facebook } from "lucide-react";

export const CLIENT_INFO = {
  name: "Kataliny Bonfim",
  // Coloque as imagens na pasta public do Vite
  logoUrl: "/logo.png", 
  heroImg: "/hero-bg.jpg",
  phone: "(00) 00000-0000",
  phoneHref: "tel:+550000000000",
  email: "contato@katalinybonfim.com.br",
  address: "Av. Exemplo, 1000 - Centro, Cidade - UF",
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
};

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const SOCIAL_LINKS = [
  { icon: Instagram, href: CLIENT_INFO.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: CLIENT_INFO.social.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: CLIENT_INFO.social.facebook, label: "Facebook" },
];

export const HERO_STATS = [
  { n: "10+", l: "Anos de Atuação" },
  { n: "500+", l: "Casos Conduzidos" },
  { n: "9", l: "Áreas de Prática" },
];

// Adicione junto aos exports já existentes no seu constants.js

export const ABOUT_INFO = {
  portraitImg: "/portrait.jpg", // Lembre-se de colocar a imagem na pasta public
  experienceYears: "10+",
  oab: "OAB/SP 000.000",
  description: "Com mais de uma década de atuação, a Dra. Kataliny Bonfim construiu uma trajetória pautada pela excelência técnica e pelo cuidado genuíno com cada cliente. Sua atuação combina profundidade jurídica e visão estratégica, sempre com o compromisso de transformar casos complexos em soluções claras.",
  mission: '"Entregar soluções jurídicas com inteligência, ética e empatia — protegendo direitos e construindo confiança que transcende o processo."',
};

export const ABOUT_VALUES = [
  "Compromisso com a verdade", 
  "Atendimento humano e dedicado", 
  "Estratégia jurídica preventiva", 
  "Sigilo e confidencialidade"
];

export const PRACTICE_AREAS = [
  { title: "Direito de Família", desc: "Divórcio, pensão alimentícia, guarda e inventários com sensibilidade e foco na resolução de conflitos.", icon: "HeartHandshake" },
  { title: "Direito Civil", desc: "Contratos, indenizações, responsabilidade civil e disputas patrimoniais com rigor técnico.", icon: "Scale" },
  { title: "Direito Empresarial", desc: "Assessoria consultiva e contenciosa para empresas, blindagem patrimonial e contratos comerciais.", icon: "Briefcase" },
  { title: "Direito do Consumidor", desc: "Defesa contra práticas abusivas, renegociação de dívidas e proteção de garantias.", icon: "ShoppingBag" },
  { title: "Direito Imobiliário", desc: "Regularização de imóveis, usucapião, análise de contratos de compra, venda e locação.", icon: "Building2" },
  { title: "Direito Previdenciário", desc: "Aposentadorias, pensões, benefícios por incapacidade e planejamento previdenciário.", icon: "Landmark" },
];

// Adicione junto aos exports já existentes no seu constants.js

export const WHY_CHOOSE = [
  { 
    title: "Atendimento Personalizado", 
    desc: "Acompanhamento próximo e transparente, tratando seu caso com a dedicação que ele exige.", 
    icon: "UserCheck" 
  },
  { 
    title: "Sigilo Absoluto", 
    desc: "Total segurança e confidencialidade em todas as informações compartilhadas.", 
    icon: "Lock" 
  },
  { 
    title: "Excelência Comprovada", 
    desc: "Mais de uma década de resultados consistentes e clientes satisfeitos.", 
    icon: "Award" 
  },
  { 
    title: "Comunicação Clara", 
    desc: 'Explicamos o "juridiquês" para que você entenda cada passo do seu processo.', 
    icon: "MessageSquare" 
  },
];

export const PROCESS_STEPS = [
  { num: "01", title: "Contato Inicial", desc: "Agendamos uma reunião para entender profundamente o seu cenário e necessidades." },
  { num: "02", title: "Análise Estratégica", desc: "Estudamos a viabilidade e desenhamos a melhor estratégia jurídica para o caso." },
  { num: "03", title: "Ação e Execução", desc: "Iniciamos os trâmites legais, mantendo você informado de cada movimentação." },
  { num: "04", title: "Resolução", desc: "Acompanhamento até a conclusão e entrega do melhor resultado possível." },
];

export const TESTIMONIALS = [
  { name: "Roberto Almeida", role: "Empresário", text: "A Dra. Kataliny foi essencial para a reestruturação da minha empresa. Profissionalismo e competência ímpares." },
  { name: "Mariana Costa", role: "Cliente de Família", text: "Em um momento muito delicado da minha vida, encontrei não apenas uma advogada, mas um apoio humano e ético." },
  { name: "Carlos Eduardo", role: "Investidor", text: "A consultoria preventiva me salvou de um péssimo negócio imobiliário. Recomendo de olhos fechados." },
];

// Adicione junto aos exports já existentes no seu constants.js

export const FAQS = [
  { 
    q: "Como funciona a primeira consulta?", 
    a: "A consulta inicial é o momento em que analisamos detalhadamente seu caso, avaliamos os documentos disponíveis e desenhamos as primeiras estratégias jurídicas personalizadas para a sua situação." 
  },
  { 
    q: "Quais documentos preciso apresentar?", 
    a: "Isso depende da área de atuação. Geralmente, documentos de identificação (RG/CPF), comprovante de residência e contratos/certidões ligados ao caso. Enviaremos uma lista exata antes do nosso encontro." 
  },
  { 
    q: "Os atendimentos podem ser realizados de forma online?", 
    a: "Sim! Atendemos tanto presencialmente em nosso escritório físico quanto de forma 100% online por videochamadas seguras, garantindo praticidade com a mesma excelência jurídica." 
  },
  { 
    q: "Como serei informado sobre o andamento do meu processo?", 
    a: "Mantemos nossos clientes informados de maneira constante e transparente sobre cada atualização relevante do processo, além de termos um canal direto via WhatsApp para tirar dúvidas." 
  }
];

export const FIRM_INFO = {
  phone: "(11) 99999-9999",
  phoneHref: "https://wa.me/5511999999999",
  email: "contato@katalinybonfim.adv.br",
  address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
  hours: "Segunda a Sexta, das 09h às 18h",
  mapEmbedUrl: "https://www.google.com/maps?q=Av.+Paulista+1000+São+Paulo&output=embed"
};

export const CTA_INFO = {
  bgImage: "/cta-bg.jpg", // Lembre-se de colocar um fundo sofisticado na pasta public/
  logoUrl: "/logo-gold.png", // Marca d'água opcional do logotipo
};