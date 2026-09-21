# BJ Beyond

Portale di scelta: gift finder, tech selezionata, servizi Amazon, guide e cinque campagne Stack.

Il sito originale su [bjbeyond.pro](https://bjbeyond.pro) mescolava stili diversi, immagini rotte e una navigazione incompleta su mobile. Questa versione tiene tutto il contenuto (IT/EN, catalogo regali, link affiliati) e lo mette in un’unica interfaccia editoriale.

## Cosa c’è

- **Home** — cinque porte, una sola identità grafica
- **Gift Finder** — tre domande, poi il catalogo Amazon.it (203 idee)
- **Tech** — schede prodotto con prezzi indicativi e link affiliati
- **Amazon** — Prime, Audible, Kindle, registri e Prime Video Channels
- **Guide** — articoli e confronti, anche in inglese
- **Stack** — campagne ESR, IMOU, Toputure, Lingzio, Waterdrop

Lingua: italiano di default, inglese su `/en`.

I link Amazon usano il tag affiliato `357921-21` e sono marcati come **link a pagamento**. I prezzi sono indicativi e possono cambiare su Amazon.it.

Le campagne Stack ESR, IMOU e Waterdrop usano tracking Awin (`awinaffid=3099482`) e sono marcate **Pubblicità**. Toputure e Lingzio puntano al sito del marchio, sempre come pubblicità.

Disclosure Amazon (testo ufficiale): *In qualità di Affiliato Amazon io ricevo un guadagno dagli acquisti idonei.*

## Avvio locale

```bash
npm install
npm run dev
```

Apri [http://127.0.0.1:43127](http://127.0.0.1:43127).

```bash
npm run build
npm start
```

## Stack tecnico

Next.js, TypeScript, Tailwind CSS, shadcn/ui. Nessun backend e nessun database: catalogo e copy stanno nel repo.
