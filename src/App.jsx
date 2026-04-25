import logo from './assets/logo1.jpeg'

import imgConstruccion from './assets/construccion.jpg'
import imgExteriorismo from './assets/exteriorismo1.jpg'
import imgRemodelaciones from './assets/remodelaciones1.jpeg'

import imgPasto from './assets/pasto.jpeg'
import imgLambrin from './assets/lambrin.jpg'
import imgFollaje from './assets/follaje.jpg'
import imgPlantas from './assets/plantas.jpg'
import imgPanel from './assets/panel.jpg'
import imgDeck from './assets/deck.jpg'
const WA = 'https://wa.me/526681670464'

const services = [
  {
    title: 'Construcción',
    tag: 'Residencial & Comercial',
    description: 'Proyectos con planeación rigurosa, estructura sólida y acabados que proyectan valor desde el primer día.',
    image: imgConstruccion,
  },
  {
    title: 'Exteriorismo',
    tag: 'Diseño de jardines',
    description: 'Jardines y espacios exteriores con alto impacto visual. Diseño vegetal, piedra decorativa y presencia que diferencia tu propiedad.',
    image: imgExteriorismo,
  },
  {
    title: 'Remodelaciones',
    tag: 'Interior & Exterior',
    description: 'Transformamos tus espacios para elevar imagen, comodidad y valor con una propuesta moderna y funcional.',
    image: imgRemodelaciones,
  },
]

const products = [
  {
    title: 'Pasto Sintético',
    badge: 'Sin mantenimiento',
    description: 'Alta calidad, durabilidad y acabado premium para patios, jardines, terrazas y canchas.',
    image: imgPasto,
  },
  {
    title: 'Lambrín Interior y Exterior',
    badge: 'Alta resistencia',
    description: 'Acabado madera con durabilidad superior. Ideal para muros, techos y fachadas modernas.',
    image: imgLambrin,
  },
  {
    title: 'Follaje Sintético',
    badge: 'Diseño a medida',
    description: 'Muros verdes con diseños personalizados. Sin riego, sin poda, siempre impecable.',
    image: imgFollaje,
  },
  {
    title: 'Plantas Sintéticas',
    badge: 'Cero cuidados',
    description: 'Plantas de apariencia natural con presencia permanente para interiores y exteriores.',
    image: imgPlantas,
  },
  {
    title: 'Panel PVC',
    badge: 'Fácil instalación',
    description: 'Paneles livianos y resistentes para techos, muros y acabados con look premium.',
    image: imgPanel,
  },
  {
    title: 'Deck Sintético',
    badge: 'Antideslizante',
    description: 'Pisos tipo madera sin mantenimiento, perfectos para terrazas, patios y albercas.',
    image: imgDeck,
  },
]

const stats = [
  { value: '6+', label: 'Años de experiencia' },
  { value: '100%', label: 'Proyectos completados' },
  { value: 'Premium', label: 'Acabados garantizados' },
  { value: 'Local', label: 'Los Mochis, Sinaloa' },
]

const projects = [
  { sub: 'Cero mantenimiento', title: 'Pasto Sintético' },
  { sub: 'Diseño natural', title: 'Jardines Modernos' },
  { sub: 'Alta imagen', title: 'Exteriores Residenciales' },
  { sub: 'Impacto visual', title: 'Proyectos Comerciales' },
  { sub: 'Obra fina', title: 'Patios y Terrazas' },
  { sub: 'Integral', title: 'Diseño Completo' },
]

function WaIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.849L.057 23.5l5.796-1.522A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.658-.523-5.168-1.43l-.371-.22-3.44.902.92-3.352-.242-.387A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  )
}

const tagStyle = {
  fontSize: 11,
  letterSpacing: '2.5px',
  textTransform: 'uppercase',
  color: '#3d6b2c',
  fontWeight: 700,
  marginBottom: 10,
}

const titleStyle = {
  fontSize: 38,
  fontWeight: 800,
  lineHeight: 1.12,
  marginBottom: 12,
}

const descStyle = {
  color: '#666',
  fontSize: 15,
  lineHeight: 1.75,
}

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f4ef', color: '#161616', margin: 0 }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .nav-link { color: rgba(255,255,255,0.75); text-decoration: none; font-size: 14px; font-weight: 600; letter-spacing: 0.04em; transition: color 0.2s; }
        .nav-link:hover { color: #7ec354; }
        .btn-wa { display: inline-flex; align-items: center; gap: 8px; background: #25d366; color: #fff; padding: 14px 26px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; border: none; cursor: pointer; transition: background 0.2s, transform 0.15s; }
        .btn-wa:hover { background: #1db954; transform: translateY(-2px); }
        .btn-outline { display: inline-flex; align-items: center; background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.3); padding: 13px 22px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; text-decoration: none; transition: border-color 0.2s, background 0.2s; }
        .btn-outline:hover { border-color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.06); }
        .btn-dark { display: inline-flex; align-items: center; gap: 8px; background: #161616; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; border: none; cursor: pointer; transition: background 0.2s, transform 0.15s; }
        .btn-dark:hover { background: #2a2a2a; transform: translateY(-2px); }
        .service-card { background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 6px 24px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s; }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.13); }
        .service-card .card-img { width: 100%; height: 220px; object-fit: cover; display: block; transition: transform 0.4s ease; }
        .service-card:hover .card-img { transform: scale(1.05); }
        .product-card { background: #fff; border-radius: 16px; overflow: hidden; border-left: 4px solid #3d6b2c; box-shadow: 0 4px 18px rgba(0,0,0,0.07); transition: transform 0.25s, box-shadow 0.25s; }
        .product-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.12); }
        .product-card .prod-img { width: 100%; height: 190px; object-fit: cover; display: block; }
        .card-link { display: flex; align-items: center; gap: 6px; padding: 13px 20px; border-top: 1px solid #f0ede5; font-size: 13px; color: #3d6b2c; font-weight: 700; text-decoration: none; transition: color 0.2s; }
        .card-link:hover { color: #2a5020; }
        .proy-item { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 26px 22px; transition: background 0.2s; cursor: default; }
        .proy-item:hover { background: rgba(126,195,84,0.09); }
        .wa-float { position: fixed; bottom: 24px; right: 24px; width: 58px; height: 58px; background: #25d366; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 22px rgba(37,211,102,0.45); cursor: pointer; z-index: 9999; text-decoration: none; transition: transform 0.2s; }
        .wa-float:hover { transform: scale(1.12); }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-logo { display: none !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .stat-grid { grid-template-columns: 1fr 1fr !important; }
          .proy-grid { grid-template-columns: 1fr 1fr !important; }
          h1 { font-size: 34px !important; }
          .section-title { font-size: 26px !important; }
          .nav-links { display: none !important; }
          .cta-box { padding: 40px 24px !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(17,17,17,0.96)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 20, color: '#fff', letterSpacing: '1.5px' }}>HÁBITAT 360</div>
            <div style={{ fontSize: 9, color: '#7ec354', letterSpacing: '2.5px', textTransform: 'uppercase', marginTop: 1 }}>Los Mochis, Sinaloa</div>
          </div>
          <nav className="nav-links" style={{ display: 'flex', gap: 28 }}>
            <a href="#servicios" className="nav-link">Servicios</a>
            <a href="#productos" className="nav-link">Productos</a>
            <a href="#proyectos" className="nav-link">Proyectos</a>
            <a href="#contacto" className="nav-link">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(140deg,#111111 0%,#1a2614 55%,#243320 100%)', color: '#fff', padding: '80px 24px 100px' }}>
        <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 56, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(44, 68, 35, 0.13)', border: '1px solid rgba(126,195,84,0.28)', color: '#7ec354', fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, padding: '5px 14px', borderRadius: 20, marginBottom: 20 }}>
              Construcción &amp; Exteriorismo Premium
            </div>
          
            <h1 style={{ fontSize: 54, lineHeight: 1.06, fontWeight: 800, marginBottom: 20 , color:'green'}}>
              Tu exterior,<br />tu mejor carta<br />
              <span style={{ color: '#f2f9ee' }}>de presentación</span>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: 'rgba(255,255,255,0.68)', maxWidth: 520, marginBottom: 32 }}>
              Pasto sintético, jardines, lambrín, deck, remodelaciones y construcción con acabados premium para hogares y negocios en Los Mochis.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa">
                <WaIcon /> Cotizar por WhatsApp
              </a>
              <a href="#servicios" className="btn-outline">Ver servicios</a>
            </div>
            <div style={{ display: 'flex', gap: 20, marginTop: 36, flexWrap: 'wrap' }}>
              {['Ingeniería civil certificada', 'Especialistas en pasto sintético', 'Atención en Los Mochis'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#7ec354', flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="hero-logo" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.11)', borderRadius: 20, padding: 20 }}>
            <img src={logo} alt="Hábitat 360" style={{ width: '100%', borderRadius: 12, display: 'block', background: '#fff', padding: 16 }} />
            <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Los Mochis, Sin.</span>
              <span style={{ fontSize: 11, color: '#7ec354', fontWeight: 700 }}>6+ años</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#fff', borderBottom: '1px solid #e8e5dc' }}>
        <div className="stat-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '22px 12px', borderRight: i < 3 ? '1px solid #f0ede5' : 'none' }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#161616', marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <div style={tagStyle}>Servicios</div>
            <h2 className="section-title" style={titleStyle}>Soluciones completas para transformar tus espacios</h2>
            <p style={descStyle}>Diseñamos y ejecutamos con una visión clara: espacios que se vean mejor, funcionen mejor y proyecten más valor.</p>
          </div>
          <div className="three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {services.map(s => (
              <div key={s.title} className="service-card">
                <div style={{ overflow: 'hidden' }}>
                  <img className="card-img" src={s.image} alt={s.title} />
                </div>
                <div style={{ padding: '12px 20px 4px' }}>
                  <span style={{ display: 'inline-block', background: '#3d6b2c', color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 4 }}>{s.tag}</span>
                </div>
                <div style={{ padding: '10px 20px 20px' }}>
                  <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: '#666' }}>{s.description}</p>
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="card-link">
                  Solicitar cotización <span style={{ fontSize: 16 }}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" style={{ padding: '80px 24px', background: 'linear-gradient(180deg,#edf3e8 0%,#f5f4ef 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={tagStyle}>Productos</div>
            <h2 className="section-title" style={titleStyle}>Materiales premium para tus espacios</h2>
            <p style={{ ...descStyle, maxWidth: 600, margin: '0 auto' }}>
              Vendemos e instalamos los mejores productos sintéticos y de acabado para que tus espacios luzcan impecables sin complicaciones.
            </p>
          </div>
          <div className="three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
            {products.map(p => (
              <div key={p.title} className="product-card">
                <img className="prod-img" src={p.image} alt={p.title} />
                <div style={{ padding: '16px 18px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <h3 style={{ fontSize: 17, fontWeight: 800, lineHeight: 1.2 }}>{p.title}</h3>
                    <span style={{ background: '#edf3e8', color: '#27500a', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 20, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{p.badge}</span>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: '#666', marginBottom: 14 }}>{p.description}</p>
                  <a href={WA} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: '#25d366', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
                    <WaIcon size={14} color="#25d366" /> Consultar precio
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-dark">
              <WaIcon /> Consultar todos los productos
            </a>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" style={{ background: '#161616', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 36 }}>
            <div>
              <div style={{ ...tagStyle, color: '#7ec354' }}>Proyectos</div>
              <h2 className="section-title" style={{ ...titleStyle, color: '#fff' }}>Más de 6 años transformando Los Mochis</h2>
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa"><WaIcon /> Quiero un proyecto</a>
          </div>
          <div className="proy-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1 }}>
            {projects.map(p => (
              <div key={p.title} className="proy-item">
                <div style={{ fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#7ec354', fontWeight: 700, marginBottom: 7 }}>{p.sub}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>{p.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={{ padding: '80px 24px 96px' }}>
        <div className="cta-box" style={{ maxWidth: 860, margin: '0 auto', background: 'linear-gradient(140deg,#111111 0%,#1a2614 100%)', color: '#fff', borderRadius: 24, padding: '64px 40px', textAlign: 'center' }}>
          <div style={{ ...tagStyle, color: '#7ec354', textAlign: 'center' }}>Contacto directo</div>
          <h2 className="section-title" style={{ ...titleStyle, color: '#fff', marginTop: 8 }}>
            Haz que tu espacio se vea<br />
            <span style={{ color: '#7ec354' }}>exactamente como lo imaginaste</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, maxWidth: 500, margin: '16px auto 32px' }}>
            Escríbenos y en minutos te damos orientación, cotización y opciones reales para tu proyecto.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ fontSize: 16, padding: '16px 36px' }}>
            <WaIcon /> Hablar ahora · 668 167 0464
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0e0e0c', padding: '24px', textAlign: 'center' }}>
        <div style={{ fontWeight: 800, fontSize: 15, color: 'rgba(255,255,255,0.65)', marginBottom: 4, letterSpacing: '1.5px' }}>HÁBITAT 360</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '1px' }}>Los Mochis, Sinaloa · {new Date().getFullYear()}</div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a href={WA} target="_blank" rel="noopener noreferrer" className="wa-float" title="Escríbenos por WhatsApp">
        <WaIcon size={28} />
      </a>
    </div>
  )
}

export default App