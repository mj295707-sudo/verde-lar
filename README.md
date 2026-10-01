# Verde Lar — Site de Loteamento

## 1. Requisitos
- Node.js 20 ou superior (https://nodejs.org)
- VS Code (recomendado)

## 2. Instalação
Abra a pasta `verde-lar` no VS Code, abra o terminal (Ctrl + ') e rode:
```bash
npm install
```

## 3. Configuração (opcional)
Copie `.env.example` para `.env`:
```bash
cp .env.example .env
```
A chave `VITE_GOOGLE_MAPS_API_KEY` é opcional. Sem ela o mapa funciona pelo modo público do Google Maps (sem o erro "Google se recusou a conectar"). Nunca publique sua chave real.

## 4. Executar
```bash
npm run dev
```
Abra o endereço mostrado no terminal (normalmente http://localhost:8080 ou http://localhost:3000).

## 5. Build de produção
```bash
npm run build
npm run preview
```

## 6. Onde alterar dados e localização
Tudo fica em **`src/config/dados.ts`**:
- `CONFIG` — nome, WhatsApp, textos principais
- `LOCALIZACAO` — `endereco`, `cidade`, `estado`, `referencia`, `latitude`, `longitude`, `zoom`
- `LOTES` — lista de lotes (número, status, valor, área, localização areia/terra)
- `GALERIA` e `PLANTA` — imagens

## Estrutura
```
src/
  config/dados.ts        dados editáveis do site
  components/site/       componentes do site (Mapa)
  components/ui/         componentes de interface
  routes/                páginas (index.tsx = página inicial, __root.tsx = layout)
  assets/                imagens
  styles.css             cores e tema (verde, branco e dourado)
public/                  arquivos públicos
```
