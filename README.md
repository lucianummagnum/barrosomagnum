# Barroso & Magnum Advocacia - Site Institucional

Site institucional do escritório Barroso & Magnum Advocacia, especializado em Direito do Trabalho e Previdenciário.

## Estrutura

```
barroso-magnum/
├── index.html              # Página principal
├── ver-andamento.html      # Página Ver Andamento Processual
├── images/                 # Imagens do site
├── assets/
│   ├── styles.css          # Estilos principais
│   ├── andamento.css       # Estilos da página de andamento
│   ├── main.js             # JavaScript principal
│   └── andamento.js        # JavaScript do mapa interativo
├── data/
│   └── trt-links.json      # Links dos TRTs por estado (referência)
└── README.md
```

## Deploy no Netlify

1. Faça o deploy da pasta raiz diretamente no Netlify
2. Não é necessário build — o site é totalmente estático
3. Variáveis de ambiente: nenhuma necessária

## Como Atualizar os Links dos TRTs

Os links dos Tribunais Regionais do Trabalho estão definidos em dois locais:

1. **`assets/main.js`** — objeto `trtLinks` no início do arquivo
2. **`data/trt-links.json`** — arquivo JSON de referência

Para atualizar um link:
1. Edite o objeto `trtLinks` em `assets/main.js`
2. Atualize também `data/trt-links.json` para manter a referência sincronizada
3. Cada entrada segue o formato: `"UF": { "name": "Nome do Estado", "trt": "TRT X", "url": "URL oficial" }`

## Tecnologias

- HTML5, CSS3, JavaScript ES6
- Swiper.js (via CDN) para carrossel 3D
- Google Fonts (Playfair Display + Inter)
- SVG interativo para mapa do Brasil
