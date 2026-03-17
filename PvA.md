# Plan van Aanpak (PvA)

## Inleiding
Ik ga een kleine webshop maken voor Bit Academy producten en ook een paar electronische dingen.  
Het doel is dat gebruikers de producten kunnen zien, in de winkelwagen doen en betalen.  
De admin kan producten bekijken en beheren en ook bestellingen zien.  
Ik maak dit project voor mijn portfolio en om te oefenen met JavaScript en webontwikkeling.

## Webshop type
- De webshop heeft:  
  - 6 producten bij start  
  - Bit Academy logo in de interface  
  - Producten met naam, prijs en afbeelding  

## Functionaliteiten

### Voor gebruikers
1. Producten bekijken in overzicht  
2. Producten toevoegen aan winkelwagen  
3. Aantal producten in winkelwagen zien  
4. Hoeveelheid verhogen of verlagen  
5. Winkelwagen leegmaken met trash icon  
6. Afrekenen en een bevestiging zien  
7. Bestellingen worden opgeslagen in localStorage  

### Voor Admin
- Producten zien in tabel met ID, Naam, Prijs, Afbeelding, Edit/Remove  
- Producten toevoegen via Add Product (URL of upload)  
- Producten bewerken via Edit Product  
- Producten verwijderen  
- Reset producten naar originele JSON  
- Bestellingen bekijken in aparte tab Bestellingen  
- Login verplicht  

## Design en interface
- Eenvoudige en overzichtelijke interface  
- Producten in tabel of card layout (3 per rij)  
- Tailwind CSS voor styling  
- Iconen voor acties (trash icon voor winkelwagen leeg)  

## Technieken
1. HTML / CSS / Tailwind  
2. JavaScript: Arrays, Objects, Functions, DOM manipulatie  
3. LocalStorage voor producten, winkelwagen en bestellingen  
4. Correct gebruik van let en const  

## Planning
- Producten en JSON bestand klaarzetten  
- Producten tonen in index.html  
- Winkelwagen functionaliteit maken  
- Afrekenen functionaliteit met bevestiging  
- Admin pagina maken met login  
- Producten beheren (add, edit, remove, reset)  
- Bestellingen tonen in Admin  
- Testen van alles  
- Documentatie schrijven (README & PvA)  

## Verwachte resultaten
* Gebruiker kan alle producten bekijken en kopen  
* Admin kan producten beheren en bestellingen zien  
* Alles wordt opgeslagen in localStorage  
* Interface overzichtelijk en makkelijk te gebruiken  

## Notities
* Project werkt volledig lokaal  
* Online versie kan gehost worden via Netlify of andere gratis host  