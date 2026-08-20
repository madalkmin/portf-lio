const wa =
  "https://wa.me/5519989826251?text=Ol%C3%A1%2C%20Matheus!%20Gostaria%20de%20conversar%20sobre%20um%20sistema%20para%20a%20minha%20empresa.";
const services = [
  [
    "01",
    "Sistemas internos",
    "Fluxos, permissões e informações da sua operação reunidos em um único lugar.",
  ],
  [
    "02",
    "Painéis e indicadores",
    "Visibilidade para tomar decisões com dados claros, no ritmo da sua empresa.",
  ],
  [
    "03",
    "Portais e plataformas",
    "Experiências digitais úteis para clientes, parceiros e equipes.",
  ],
];
const steps = [
  ["01", "Escuta", "Entendemos a rotina, o gargalo e o que precisa mudar."],
  [
    "02",
    "Direção",
    "Transformo necessidades reais em uma solução simples de usar.",
  ],
  [
    "03",
    "Construção",
    "O produto ganha forma em entregas próximas e objetivas.",
  ],
  ["04", "Evolução", "Ajustamos o que gera mais impacto depois de no ar."],
];
const Arrow = () => <span aria-hidden="true">↗</span>;
export default function Home() {
  return (
    <main>
      <div className="grain" />
      <header className="wrap header">
        <a className="brand" href="#inicio">
          MD<span>.</span>
        </a>
        <nav>
          <a href="#trabalho">Trabalho</a>
          <a href="#processo">Processo</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <a className="header-link" href={wa} target="_blank" rel="noreferrer">
          Iniciar projeto <Arrow />
        </a>
      </header>
      <section id="inicio" className="wrap hero">
        <div>
          <p className="kicker">
            <i /> Sistemas web sob medida
          </p>
          <h1>
            Menos atrito.
            <br />
            <em>Mais avanço.</em>
          </h1>
          <p className="intro">
            Eu desenho e desenvolvo sistemas para empresas que decidiram
            profissionalizar a própria operação.
          </p>
          <div className="actions">
            <a
              className="button dark"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              Conversar sobre um projeto <Arrow />
            </a>
            <a className="textlink" href="#trabalho">
              Conhecer o trabalho ↓
            </a>
          </div>
        </div>
        <div className="art">
          <b className="index">01 / 04</b>
          <div className="dashboard">
            <p>
              <i /> VISÃO DA OPERAÇÃO <small>Hoje</small>
            </p>
            <strong />
            <strong />
            <strong />
            <div className="bars">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="note">
            <i /> <b>Processos em movimento</b>
            <p>Uma rotina mais clara começa aqui.</p>
          </div>
        </div>
      </section>
      <section className="wrap statement">
        <p className="label">O ponto de partida</p>
        <h2>
          Quando planilhas, mensagens e improvisos já não dão conta, um produto
          próprio passa a fazer sentido.
        </h2>
        <div>
          <p>
            Não é sobre adicionar tecnologia por adicionar. É sobre criar uma
            ferramenta que respeita como sua empresa trabalha — e ajuda a
            levá-la adiante.
          </p>
          <a className="round" href="#servicos">
            ↓
          </a>
        </div>
      </section>
      <section className="servicearea" id="servicos">
        <div className="wrap sectionhead">
          <p className="label">O que eu construo</p>
          <p>
            Produtos digitais que eliminam ruído e deixam a operação mais leve.
          </p>
        </div>
        <div className="wrap servicelist">
          {services.map(([n, t, d]) => (
            <article key={n}>
              <span>{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
              <Arrow />
            </article>
          ))}
        </div>
      </section>
      <section className="wrap projects" id="trabalho">
        <div className="sectionhead">
          <p className="label">Projetos selecionados</p>
          <p>
            Uma amostra de produtos que já saíram da ideia para resolver
            problemas reais.
          </p>
        </div>
        <div className="projectgrid">
          <Project
            title="VLPRICE"
            kind="Inteligência de preços"
            description="Uma plataforma criada para transformar a gestão de preços em uma rotina mais rápida e confiável."
            n="01"
            href="https://vlprice.com/app"
            image="/projects/vlprice.png"
          />
          <Project
            title="VLFLOW"
            kind="Operação organizada"
            description="Um sistema sob medida para dar fluidez, acompanhamento e controle ao dia a dia."
            n="02"
            href="https://vlflow.com.br/v1/"
            image="/projects/vlflow.png"
          />
        </div>
      </section>
      <section className="process" id="processo">
        <div className="wrap">
          <div className="sectionhead">
            <p className="label">Como acontece</p>
            <p>
              Um processo próximo, transparente e orientado ao que realmente
              importa.
            </p>
          </div>
          <div className="steps">
            {steps.map(([n, t, d]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap about" id="sobre">
        <div>
          <p className="label">Quem está por trás</p>
          <h2>Produto, código e atenção ao que é essencial.</h2>
        </div>
        <div>
          <p>
            Sou Matheus D&apos;Alkmin, desenvolvedor de sistemas web. Meu
            trabalho conecta visão de produto e implementação para transformar
            rotinas complexas em experiências diretas, úteis e sustentáveis.
          </p>
          <div className="tags">
            <span>Desenvolvimento web</span>
            <span>Produtos digitais</span>
            <span>Soluções B2B</span>
          </div>
        </div>
      </section>
      <section className="wrap contact">
        <p className="label">Vamos conversar</p>
        <h2>Seu próximo sistema pode começar com uma boa conversa.</h2>
        <a className="button dark" href={wa} target="_blank" rel="noreferrer">
          Chamar no WhatsApp <Arrow />
        </a>
        <a className="mail" href="mailto:matheushdalkmin@gmail.com">
          matheushdalkmin@gmail.com
        </a>
      </section>
      <footer className="wrap footer">
        <a className="brand" href="#inicio">
          MD<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Matheus D&apos;Alkmin</p>
        <a href="mailto:matheushdalkmin@gmail.com">E-mail ↗</a>
      </footer>
    </main>
  );
}
function Project({
  title,
  kind,
  description,
  n,
  href,
  image,
}: {
  title: string;
  kind: string;
  description: string;
  n: string;
  href: string;
  image: string;
}) {
  return (
    <article className="project">
      <div className="screen">
        <b>{n}</b>
        <img src={image} alt={`Tela da plataforma ${title}`} />
      </div>
      <div className="projectinfo">
        <div>
          <p>{kind}</p>
          <h3>{title}</h3>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir ${title}`}
        >
          <Arrow />
        </a>
      </div>
      <p>{description}</p>
    </article>
  );
}
