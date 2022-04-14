# LAB 1 - REST API
### **Beskrivning av projekt**

Projektet innehåller fem stycken endpoints.

**GET** - GET-metoden förekommer två gånger.  
1 - Hämtning av hela boxkollektionen och all information. I .rest-filen hämtar den alla lådor i JSON-format och på klientsidan renderar den alla lådor i form av kort.

2 - Hämtning av en box genom dess specifika ID från kollektionen. I .rest-filen väljer användaren själv vilket ID som skall hämtas. Responsen blir även här en sträng i JSON-format. På klientsidan renderas ett formkort där användaren kan ändra värdet i inputsen.  
<br>
**POST**  
POST-metoden skapar ett nytt objekt och lägger till det i boxes.json-filen. Objektets ID blir automatiskt tilldelat till nästa ID i listan. Innehållet fylles i av användaren i .rest-filen, om inte samtliga värden har tilldelats blir responsen ett 404-error. På klientsidan förekommer POST i form av ett form som lägger till en box i kollektionen. 
<br>  
**PUT**  
PUT anropas i .rest-filen av användaren där ett ID anges för att välja VILKEN box som skall uppdateras. På klientisdan förekommer denna som ett form inne på den specifika boxens egna sida, ändringar görs och sparas till JSON-filen.
<br>  
**DELETE**  
DELETE tar bort boxen med det specifika ID som användaren anger i .rest-filen. På klientsidan förekommer även DELETE på den specifika boxens egna sida i form av en delete-knapp. 

---

### **Uppfyllda krav**

Samtliga.  
Alla kraven för både godkänt och väl godkänt är uppfyllda.

---

### **Bygga och köra projektet**

I terminalen skrivs:

`npm i` - För att installera alla node moduler.

Följt av:

`npm start` - För att starta projektet.

---
Av: Christian Meiner, FED21G.  
14 April, 2022