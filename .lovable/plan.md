

## Plan: "Edytuj CV" tworzy nową wersję zamiast edytować istniejącą

### Cel
Kliknięcie przycisku "Edytuj CV" otworzy dialog z polem na nazwę nowej wersji. Po zatwierdzeniu zostanie utworzona nowa wersja CV (kopia aktualnych danych), a edycja będzie odbywać się na tej nowej wersji -- oryginalna wersja pozostaje nienaruszona.

### Jak to będzie działać
1. Użytkownik klika "Edytuj CV"
2. Pojawia się dialog: "Podaj nazwę nowej wersji"
3. Po wpisaniu nazwy i kliknięciu "Utwórz" -- tworzona jest nowa wersja (kopia bieżących danych CV)
4. Aplikacja automatycznie przełącza się na nową wersję i włącza tryb edycji
5. Oryginalna wersja pozostaje bez zmian

### Szczegóły techniczne

**1. Nowy dialog -- `CreateVersionDialog`**
- Nowy komponent z polem tekstowym na nazwę wersji
- Walidacja: nazwa nie może być pusta
- Przycisk "Utwórz wersję" / "Anuluj"

**2. Rozszerzenie `CVEditContext`**
- Dodanie funkcji `createNewVersion(name: string)` do kontekstu
- Funkcja tworzy nową wersję z unikalnym ID (np. `custom-{timestamp}`), kopiuje bieżące dane CV, dodaje ją do listy wersji i przełącza na nią
- Dodanie `onCreateVersion` callback w `CVEditProviderProps` żeby Dashboard mógł zarządzać stanem wersji

**3. Zmiana w `Dashboard.tsx`**
- Przechowywanie dynamicznych wersji w stanie (useState zamiast statycznych danych)
- Obsługa `onCreateVersion` -- dodaje nową wersję do listy i przełącza na nią
- Zapisywanie niestandardowych wersji w localStorage

**4. Zmiana w `CVTemplate.tsx`**
- Kliknięcie "Edytuj CV" otwiera `CreateVersionDialog` zamiast bezpośrednio włączać tryb edycji
- Po utworzeniu wersji -- automatyczne włączenie trybu edycji

**5. Pliki do zmodyfikowania:**
- `src/components/CVTemplate.tsx` -- dialog + logika przycisku
- `src/contexts/CVEditContext.tsx` -- nowa funkcja `createNewVersion`
- `src/pages/Dashboard.tsx` -- dynamiczne zarządzanie wersjami
- Nowy plik: `src/components/CreateVersionDialog.tsx`

