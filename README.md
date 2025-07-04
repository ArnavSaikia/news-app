## The Guardian Redesign

this is a personal project that reimagines The Guardian’s front-end experience and pulls live articles from The Guardian Open Platform. made it cuz i liked the guardian ui and i like to fuck around with cool UIs. the site routes articles completely within itself and is capable as a standalone news resource alternate to the guardian's official website. i've added extra links to the original website cuz the ui components were too pretty not to include. the site is made with a mobile first approach due to my long ignored need to learn responsive design :D

### What it does

* pulls articles from the guardian's official api and provides live news
* embeds the interactive elements like yt videos, charts and graphs for added QoL
* routes completely within itself for every article (u dont have to link to the original website pages)
* gives a fresh fully responsive look to the ui
* provides u with a cute little weather widget and ur ip addr. if u check the logs
* an easter egg? if u fuck around the navbar
* its a fucking news website what else can it do?

### Live Link (not that u didnt see the description)

```text
https://the-guardian-redesign.vercel.app
```

### Stack

* React + Vite (that's it)

### Assets / APIs used

* **UI reference** – [Behance: The Guardian redesign](https://www.behance.net/gallery/223488419/The-Guardian)  
* **News** – [The Guardian **Open Platform** API](https://open-platform.theguardian.com/) 
* **Geolocation** – [IP API](`https://ipapi.co/json/`) (free tier)  
* **Weather** – [WeatherAPI](https://www.weatherapi.com/)

### Setup

```bash
git clone https://github.com/ArnavSaikia/the-guardian-redesigned.git
cd the-guardian-redesign
npm install
```

### Notes / gotchas

* free Guardian keys are limited to 5 k requests/day.  
  if an article returns *“You are not permitted…”* it’s probably pay-walled.
* IP API rate-limit is 50 k calls/month; weather + IP are cached to avoid hitting the limit.
* any payment/support us options, newsletters and corporate links lead directly to the guardian's website not to me

<br>

---

IDK Licenses -- do whatever?