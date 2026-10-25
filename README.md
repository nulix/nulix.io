# NULIX landing page (Next.js)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```


Docker (with watch for live reload):

```bash
docker compose up --build --watch
```

Deploy: Cloudflare Pages / Vercel (connect the repo, framework preset "Next.js").
For GitHub Pages or any static host, uncomment `output: "export"` in next.config.mjs and publish the `out/` folder.
