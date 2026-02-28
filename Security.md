# 🌐 Hur hemsidan fungerar – en enkel förklaring

> Det här dokumentet förklarar hur AZ Profil ABs hemsida är uppsatt, vem som ansvarar för vad, och hur uppdateringar hamnar på webben – utan teknisk jargong.

---

## De fyra byggstenarna

Hemsidan byggs och levereras via fyra tjänster som samarbetar:

| Tjänst | Vad den gör | Ansvarar |
|---|---|---|
| **GitHub** | Förvarar all källkod och skickar uppdateringar automatiskt | ATM AB |
| **Hetzner** | Servern i Europa där hemsidan faktiskt bor | ATM AB |
| **Cloudflare** | Skyddar hemsidan och gör den snabb i hela världen | ATM AB |
| **Nginx** | Mjukvara på servern som tar emot besökare och visar rätt sida | ATM AB |

---

## 🗺️ En bild av helheten

```
Du (besökaren)
     │
     ▼
 Cloudflare  ←── Skydd mot attacker, cache, HTTPS-certifikat
     │
     ▼
 Hetzner-server (i Europa)
     │
     ▼
   Nginx  ←── Tar emot förfrågan, pekar på rätt filer
     │
     ▼
 Hemsidans filer  ←── Byggda av GitHub Actions och uppladdade hit
```

---

## 🏗️ Hur allt är satt upp – steg för steg

### 1. Hetzner – servern

Hetzner är ett tyskt webbhotell. ATM AB hyr en server (VPS) hos dem. Tänk på servern som en dator som alltid är igång och kopplad till internet. Det är här hemsidans filer lagras och serveras till besökare.

- **Placering:** Europa (GDPR-kompatibelt)
- **Tillgång:** Endast via SSH med krypterad nyckel (inget lösenord)

### 2. Nginx – dörrvakten

På Hetzner-servern körs ett program som heter **Nginx** (uttalas "engine-x"). Det är ett slags dörrvakt:

- När en besökare skriver in `azprofil.se` i sin webbläsare, är det Nginx som tar emot dem.
- Nginx läser av adressen och skickar tillbaka rätt sida.
- Nginx hanterar också HTTPS (det gröna hänglåset i webbläsaren).

Nginx-konfigurationen pekar på mappen:
```
~/hosting/sites/client-azprofil/dist/
```
Det är hit de färdiga hemsidefilerna skickas vid varje uppdatering.

### 3. Cloudflare – skölden och snabbheten

Cloudflare fungerar som ett lager framför servern. All trafik till `azprofil.se` går först igenom Cloudflare innan den når Hetzner.

**Cloudflare gör tre viktiga saker:**

- 🛡️ **Skydd** – Blockerar skadlig trafik, DDoS-attacker och robotar innan de ens når servern.
- ⚡ **Snabbhet** – Sparar en kopia av hemsidan i Cloudflares globala nätverk (finns i 200+ städer). Besökare från Sverige, Danmark eller Danmark laddar hemsidan snabbt oavsett var de befinner sig.
- 🔒 **HTTPS** – Cloudflare tillhandahåller SSL-certifikatet (det gröna hänglåset) och krypterar trafiken.

**DNS (domännamn)** – Det är Cloudflare som kopplar ihop domännamnet `azprofil.se` med rätt server-IP-adress.

### 4. GitHub – koden och automatiken

GitHub är platsen där all källkod för hemsidan lagras. Tänk på det som ett versionshanteringssystem – varje ändring sparas med datum och vem som gjorde den.

---

## 🔄 Hur en uppdatering går till

Så här fungerar det när ATM AB gör en ändring på hemsidan:

```
1. Utvecklaren ändrar kod på sin dator
         │
         ▼
2. Koden laddas upp till GitHub ("push to main")
         │
         ▼
3. GitHub Actions startar automatiskt (en robot tar över)
         │
         ├─ Laddar ner all kod
         ├─ Installerar alla beroenden (npm ci)
         ├─ Bygger hemsidan till färdiga filer (npm run build)
         └─ Laddar upp filerna till Hetzner-servern via SSH
         │
         ▼
4. Filerna är nu på Hetzner i mappen:
   ~/hosting/sites/client-azprofil/dist/
         │
         ▼
5. Nginx serverar de nya filerna till nästa besökare
         │
         ▼
6. Cloudflare rensar sin cache (om det behövs)
         │
         ▼
✅ Besökare ser den uppdaterade hemsidan
```

**Hela processen tar ca 2–3 minuter** från att koden laddas upp till att den är live.

---

## 🔐 Säkerhet och åtkomst

### Hemligheter (Secrets)

För att GitHub-roboten ska kunna ladda upp filer till Hetzner-servern behöver den tre hemliga uppgifter. Dessa lagras **krypterat** i GitHub och syns aldrig i källkoden:

| Hemlighet | Vad det är |
|---|---|
| `SERVER_HOST` | Hetzner-serverns adress (IP-nummer) |
| `SERVER_USER` | Användarnamnet för inloggning på servern (`deploy`) |
| `SERVER_SSH_KEY` | En privat krypteringsnyckel (som ett osynligt lösenord) |

Dessa hanteras av ATM AB och läggs in under:
> GitHub repo → **Settings** → **Secrets and variables** → **Actions**

### SSH-nyckel (ingen lösenordsinloggning)

Servern är konfigurerad att **bara acceptera nyckelbaserad inloggning**. Det innebär att vanliga lösenordsattacker inte fungerar – man måste ha den exakta privata nyckeln.

### Begränsad åtkomst

GitHub Actions-roboten har minimala rättigheter – den kan bara **läsa** källkoden och **skriva filer** till en specifik mapp på servern. Den kan inte göra något annat på servern.

---

## 🧩 Sammanfattning

| Vad händer | Vem/vad gör det |
|---|---|
| Kod skrivs och sparas | ATM AB / GitHub |
| Hemsidan byggs automatiskt | GitHub Actions |
| Filer skickas till servern | GitHub Actions via SSH |
| Filer lagras och serveras | Hetzner + Nginx |
| Skydd, snabbhet, HTTPS | Cloudflare |
| Besökaren ser hemsidan | Via Cloudflare → Hetzner → Nginx |

---

## 📞 Kontakt vid driftstörningar

Om hemsidan är nere eller uppför sig konstigt, kontakta ATM AB. Vanliga orsaker:
- En felaktig uppdatering i koden (syns i GitHub Actions-loggen)
- Nätverksproblem hos Hetzner eller Cloudflare
- Cache som behöver rensas i Cloudflare

---

*Dokumentet är skrivet för icke-tekniska läsare. Senast uppdaterat: 2026-02-28.*