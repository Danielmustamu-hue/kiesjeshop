# Kiesjeshop.nl

Kiesjeshop is een moderne vergelijkingswebsite gebouwd met React, Vite en Tailwind CSS. Het helpt consumenten kiezen tussen bol, Coolblue en Amazon door middel van een slim overzicht en een AI-shopping assistent.

## 🚀 Functies

- **Vergelijking:** Duidelijk overzicht van USP's, levertijden en service.
- **AI Adviseur:** Geïntegreerde Google Gemini AI die persoonlijk koopadvies geeft.
- **Redactie:** Diepgaande reviews en onafhankelijk advies.
- **Responsief:** Werkt perfect op mobiel, tablet en desktop.

## 🛠️ Installatie

Volg deze stappen om het project lokaal te draaien:

1. **Clone de repository:**
   ```bash
   git clone https://github.com/JouwGebruikersnaam/kiesjeshop.git
   cd kiesjeshop
   ```

2. **Installeer afhankelijkheden:**
   ```bash
   npm install
   ```

3. **Stel je omgevingsvariabelen in:**
   - Maak een bestand genaamd `.env` in de hoofdmap.
   - Voeg je Google Gemini API key toe:
     ```env
     API_KEY=Jouw_Google_API_Key_Hier
     ```

4. **Start de applicatie:**
   ```bash
   npm run dev
   ```

## 🔑 API Key Beheer

De applicatie maakt gebruik van de Google Gemini API. Als je limiet is bereikt (Quota Exceeded) of je een nieuwe key wilt gebruiken:

### Lokaal updaten
Pas simpelweg de `API_KEY` in je lokale `.env` bestand aan en herstart de server.

### GitHub (Productie) updaten
Het `.env` bestand wordt **niet** geüpload naar GitHub voor de veiligheid. Om de key voor de online versie (GitHub Actions/Pages) aan te passen:
1. Ga naar je GitHub Repository -> **Settings**.
2. Kies links **Secrets and variables** -> **Actions**.
3. Update de `API_KEY` onder "Repository secrets".

## 📦 Build voor productie

Om de applicatie te bouwen voor productie (bijv. Vercel of Netlify):

```bash
npm run build
```

## 📄 Licentie

© 2025 Kiesjeshop.nl - Alle rechten voorbehouden.