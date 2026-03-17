Plan van Aanpak (PvA)

# Inleiding

Ik ga een kleine webshop maken voor Bit Academy producten en enkele elektronische producten.
Het doel is om gebruikers producten te laten zien, in de winkelwagen te zetten en af te rekenen. Admin kan producten beheren en bestellingen bekijken.
Dit project gebruik ik voor mijn portfolio en om te oefenen met JavaScript en webontwikkeling.

# Webshop type

- De webshop bevat:
- 6 producten bij start
- Bit Academy logo in interface
- Producten met naam, prijs, afbeelding

# Functionaliteiten
### Voor gebruikers

1. Producten bekijken in overzicht
2. Producten toevoegen aan winkelwagen
3. Aantal producten zien in winkelwagen
4. Hoeveelheid verhogen of verlagen
5. Winkelwagen legen met trash icon
6. Afrekenen en bevestiging zien
7. Bestellingen worden opgeslagen in localStorage

### Voor Admin

- Producten zien in tabel met ID, Naam, Prijs, Afbeelding, Edit/Remove
- Producten toevoegen via Add Product (URL of upload)
- Producten bewerken via Edit Product
- Producten verwijderen
- Reset Producten naar originele JSON
- Bestellingen bekijken in aparte tab Bestellingen
- Login verplicht

# Design en interface

   - Interface eenvoudig en overzichtelijk
   - Producten in tabel of card layout (3 producten per rij)
   - Gebruik van Tailwind CSS voor styling
   - Iconen voor acties (trash icon voor lege winkelwagen)

# Technieken

   1. HTML / CSS / Tailwind
   2. JavaScript: Arrays, Objects, Functions, DOM manipulatie
   3. LocalStorage voor producten, winkelwagen en bestellingen
   4. Variabelen correct gebruik van let en const

# Planning

- Producten en JSON bestand klaarzetten
- Producten tonen in index.html
- Winkelwagen functionaliteit maken (toevoegen, verhogen, verlagen, leegmaken)
- Afrekenen functionaliteit met bevestiging
- Admin pagina maken met login
- Producten beheren (add, edit, remove, reset)
- Bestellingen tonen in Admin
- Testen van alle functionaliteiten
- Documentatie schrijven (README & PvA)

# Verwachte resultaten

* Gebruiker kan alle producten bekijken en bestellen
* Admin kan producten beheren en bestellingen zien
* Alle data wordt opgeslagen in localStorage
* Interface overzichtelijk en gebruiksvriendelijk

# Notities

* Project is volledig functioneel lokaal
* Online versie kan gehost worden via Netlify of andere gratis host