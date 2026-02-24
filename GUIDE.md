# Öppna Data med EntryScape - Guide för Täby kommun

## Innehåll
1. [Översikt](#oversikt)
2. [Starta systemen](#starta-systemen)
3. [Admin-verktyget (EntryScape Suite)](#admin-verktyget)
4. [Skapa en datakatalog](#skapa-en-datakatalog)
5. [Lägga till datasets](#lagga-till-datasets)
6. [Publicera datasets](#publicera-datasets)
7. [Den publika webbplatsen](#den-publika-webbplatsen)
8. [Dagligt arbetsflöde](#dagligt-arbetsflode)
9. [Felsökning](#felsokning)

---

## Översikt

Systemet består av tre delar:

| Komponent | Syfte | URL |
|-----------|-------|-----|
| **EntryStore** | Backend/databas - lagrar all metadata | http://localhost:8181 |
| **EntryScape Suite** | Admin-gränssnitt - här skapar och redigerar ni data | http://localhost:8080 |
| **Publik webbplats** | Medborgarnas vy - visar öppna data | Vercel-URL / localhost:3001 |

### Så hänger det ihop

```
Du (admin)                              Medborgare
    │                                       │
    ▼                                       ▼
┌────────────────┐                  ┌──────────────────┐
│ EntryScape     │    publicerar    │ Publik webbplats │
│ Suite          │ ──────────────►  │ (taby.se/        │
│ (admin)        │    via API       │  oppna-data)     │
│                │                  │                  │
│ Skapa katalog  │                  │ Sök & bläddra    │
│ Redigera data  │                  │ Läs metadata     │
│ Hantera        │                  │ Ladda ner filer  │
│ användare      │                  │                  │
└───────┬────────┘                  └──────────────────┘
        │
        ▼
┌────────────────┐
│ EntryStore     │
│ (databas)      │
│                │
│ REST API       │
│ RDF/DCAT       │
│ Solr-sök       │
└────────────────┘
```

---

## Starta systemen

### 1. Starta EntryStore (backend)

```bash
# Gå till entrystore-mappen
cd /home/patrik/entrystore

# Starta backend (port 8181)
nohup ./modules/rest-standalone/jetty/target/dist/bin/entrystore \
  -c file:///home/patrik/entrystore-data/entrystore.properties \
  -p 8181 > /home/patrik/entrystore-data/entrystore.log 2>&1 &

# Verifiera att den körs
curl -s http://localhost:8181/auth/user
# Ska svara med JSON som innehåller "guest"
```

### 2. Starta EntryScape Suite (admin-gränssnitt)

```bash
# Gå till entryscape-mappen
cd /home/patrik/entryscape

# Starta frontend (port 8080)
nohup pnpm dev:suite > /home/patrik/entrystore-data/entryscape.log 2>&1 &

# Vänta ~10 sekunder, sedan öppna i webbläsare:
# http://localhost:8080
```

### 3. Ladda in demo-data (efter omstart)

OBS: Vi använder minneslagring (memory store) så data försvinner vid omstart av EntryStore. Kör detta efter varje omstart:

```bash
cd /home/patrik/MS_TEST
bash setup-demo-data.sh
```

### 4. Starta publika webbplatsen (valfritt, lokal)

```bash
cd /home/patrik/MS_TEST/taby-oppnadata-demo
npm run build && npx next start -p 3001
# Öppna http://localhost:3001
```

---

## Admin-verktyget

### Logga in

1. Öppna **http://localhost:8080** i webbläsaren
2. Klicka på **användarikonen** (övre högra hörnet)
3. Logga in med:
   - **Användare:** admin
   - **Lösenord:** admin123

### Navigering

I vänstermenyn finns dessa moduler:

| Modul | Ikon | Syfte |
|-------|------|-------|
| **Catalog** | 📦 | Huvudverktyget - skapa kataloger och datasets |
| **Terms** | 🏷️ | Hantera terminologier och begrepp (SKOS) |
| **Workbench** | 🔧 | Avancerat: arbeta direkt med enskilda poster |
| **Search** | 🔍 | Sök bland all data i systemet |
| **Admin** | ⚙️ | Hantera användare och grupper |

**Catalog** är den modul ni kommer använda mest.

---

## Skapa en datakatalog

En **katalog** är en samling datasets. Normalt har kommunen EN katalog (t.ex. "Täby kommuns öppna data").

### Steg för steg:

1. Klicka på **Catalog** i vänstermenyn
2. Klicka på den blå knappen **"+ Create"** (övre högra hörnet)
3. Fyll i formuläret:

| Fält | Obligatoriskt | Exempel |
|------|:---:|---------|
| **Title** | Ja | Täby kommuns öppna data |
| **Description** | Ja | Datakatalog för öppna data från Täby kommun |
| **Publisher** | Ja | Täby kommun |
| **Language** | Rek. | Swedish |
| **License** | Rek. | CC0 1.0 |

4. Klicka **Save**
5. Katalogen visas nu i listan

> **Tips:** Ni behöver vanligtvis bara EN katalog. Alla datasets läggs sedan till i denna katalog.

---

## Lägga till datasets

### Vad är ett dataset?

Ett **dataset** är en beskrivning (metadata) av en datamängd. Exempel:
- "Kommunala skolor" - lista med skolors adresser och kontaktinfo
- "Befolkningsstatistik" - årlig statistik per stadsdel
- "Parker och grönområden" - geodata över kommunens parker

### Steg för steg:

1. Gå till **Catalog** → klicka på din katalog
2. Klicka på **Datasets** i sekundärmenyn (vänster)
3. Klicka på **"Create"** (blå knapp)
4. Välj **Dataset** (inte Series)

### Fyll i metadataformuläret:

Formuläret följer **DCAT-AP-SE** (svenska standarden för öppna data).

#### Obligatoriska fält (Mandatory)

| Fält | Beskrivning | Exempel |
|------|-------------|---------|
| **Title** | Datasetets namn | Kommunala skolor i Täby |
| **Description** | Utförlig beskrivning av datan | Lista över alla kommunala grund- och gymnasieskolor i Täby kommun med adress, kontaktuppgifter och antal elever. |
| **Publisher** | Organisation som ansvarar | Täby kommun - Barn- och grundskolnämnden |

#### Rekommenderade fält (Recommended)

Slå på **"Recommended"**-toggeln i formuläret för att se dessa:

| Fält | Beskrivning | Exempel |
|------|-------------|---------|
| **Contact point** | Kontaktperson/funktion | oppnadata@taby.se |
| **Keyword** | Sökbara nyckelord (lägg till flera) | skolor, utbildning, grundskola |
| **Category** | Ämnesområde från EU-vokabulär | Utbildning |
| **Release date** | När datan publicerades | 2026-01-15 |
| **Access rights** | Vem kan komma åt datan | Public |
| **Conforms to** | Vilken standard datan följer | — |
| **Geographical area** | Karta/boundingbox | Rita box runt Täby |
| **Time period** | Tidsperiod datan täcker | 2025-01-01 till 2025-12-31 |

#### Valfria fält (Optional)

Slå på **"Optional"**-toggeln för fler fält:
- Landing page, Identifier, Other identifier
- Qualified relation, Source, Has version
- Frequency, Documentation, m.m.

5. Klicka **Save changes**

### Lägga till distributioner (filer)

En **distribution** är en fil eller länk kopplad till datasetet (t.ex. CSV-fil, API-endpoint).

1. Öppna datasetet genom att klicka på det
2. I den nedre panelen, klicka **"Add distribution"** (eller under fliken Distributions)
3. Fyll i:
   - **Title** — t.ex. "CSV-fil"
   - **Access URL** — länk till filen
   - **Format** — CSV, JSON, XML, GeoJSON etc.
   - **License** — CC0 1.0
4. Klicka **Save**

---

## Publicera datasets

Datasets skapas som **"Unpublished"** (opublicerade) som standard.

### Publicera ett enskilt dataset:

1. Gå till dataset-listan
2. Klicka på datasetet
3. I den högra panelen, hitta **Status**-toggeln
4. Ändra från **Unpublished** → **Published**

### Vad händer vid publicering?

- Datasetet blir synligt för alla (ej bara inloggade)
- Det dyker upp i publika sökningar
- Om ni kopplat till dataportal.se kan det skördas (harvesting) därifrån

---

## Den publika webbplatsen

### Demo-sajten (Vercel)

Den publika demo-sajten visar hur medborgare ser öppna data:

- **Startsidan** — Täby kommun-inspirerad med Öppna Data-sektion
- **/oppna-data** — Sökbar lista med alla datasets
- **/oppna-data/[dataset]** — Detaljsida med metadata, nyckelord, format

**URL:** (den du fick från Vercel efter deploy)

### Redigera demo-data

Demo-sajten använder hårdkodad data. För att ändra:

1. Redigera filen `src/data/datasets.ts` i projektet
2. Pusha till GitHub → Vercel deployar automatiskt

### Koppla till live-data (framtida steg)

I en produktionsmiljö hämtar den publika sidan data direkt från EntryStore API:

```
GET http://din-server:8181/search?type=solr&query=rdfType:dcat:Dataset
```

Detta kräver att EntryStore är publikt tillgänglig (via reverse proxy med HTTPS).

---

## Dagligt arbetsflöde

### Lägga till nytt dataset

```
1. Logga in på EntryScape Suite (localhost:8080)
2. Catalog → Din katalog → Datasets → Create
3. Fyll i metadata (titel, beskrivning, nyckelord, utgivare...)
4. Lägg till distribution (fil/API-länk)
5. Sätt status till Published
6. Klart! Datasetet syns nu publikt.
```

### Uppdatera befintligt dataset

```
1. Catalog → Din katalog → Datasets
2. Klicka på pennikonen (Edit) bredvid datasetet
3. Ändra det som behövs
4. Save changes
```

### Ta bort dataset

```
1. Öppna datasetet
2. I nedre panelen, klicka "Remove"
3. Bekräfta borttagning
```

---

## Felsökning

### EntryStore startar inte
```bash
# Kontrollera om porten redan används
fuser 8181/tcp
# Kontrollera loggen
tail -50 /home/patrik/entrystore-data/entrystore.log
```

### EntryScape Suite laddar inte
```bash
# Kontrollera om porten redan används
fuser 8080/tcp
# Kontrollera loggen
tail -50 /home/patrik/entrystore-data/entryscape.log
```

### Data försvann efter omstart
Vi använder minneslagring (memory store). Kör:
```bash
bash /home/patrik/MS_TEST/setup-demo-data.sh
```

**För permanent lagring**, ändra i `/home/patrik/entrystore-data/entrystore.properties`:
```properties
# Ändra från:
entrystore.repository.store.type=memory
# Till:
entrystore.repository.store.type=native
```
Starta sedan om EntryStore.

### CORS-fel i webbläsarkonsolen
Se till att `entrystore.properties` har rätt CORS-inställningar:
```properties
entrystore.cors=on
entrystore.cors.origins=http://localhost:8080
entrystore.cors.origins.allow-credentials=http://localhost:8080
entrystore.cors.headers=Content-Type,Accept,Authorization,X-Requested-With
```

---

## Ordlista

| Term | Förklaring |
|------|-----------|
| **DCAT** | Data Catalog Vocabulary - EU-standard för att beskriva dataset |
| **DCAT-AP-SE** | Svenska profilen av DCAT - krävs för dataportal.se |
| **Dataset** | Beskrivning av en datamängd (metadata) |
| **Distribution** | En fil eller API-endpoint kopplad till ett dataset |
| **Katalog** | Samling av datasets |
| **CC0 1.0** | Licens som gör data helt fri att använda |
| **RDF** | Resource Description Framework - dataformat för länkad data |
| **SKOS** | Standard för terminologier och begrepp |
| **EntryStore** | Java-backend som lagrar och serverar data |
| **EntryScape Suite** | React-frontend (admin-gränssnitt) |
| **Solr** | Sökmotor inbyggd i EntryStore |

---

## Nästa steg (produktion)

När ni vill gå från demo till produktion:

1. **Permanent lagring** — Byt till `native` store type
2. **HTTPS** — Sätt upp nginx som reverse proxy med Let's Encrypt-certifikat
3. **Domän** — Peka en subdomän (t.ex. data.taby.se) till servern
4. **Användare** — Skapa användarkonton för alla som ska hantera data (Admin-modulen)
5. **dataportal.se** — Registrera er hos DIGG för att skörda data till Sveriges dataportal
6. **Live-koppling** — Koppla publika webbplatsen mot EntryStore API istället för hårdkodad data

---

*Skapad: 2026-02-24 | Kontakt vid frågor: oppnadata@taby.se (demo)*
