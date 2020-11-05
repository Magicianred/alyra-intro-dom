# DOM Introduction

1. Ouvrez la console et regardez ce qui est envoyé par le script placé dans la partie `head` de notre document :

```html
<script>
  console.log("document.body vu dans la partie head", document.body)
</script>
```

Comparez avec le résultat envoyé par le script placé juste avant la fermeture de la balise `body`

```html
<script>
  console.log(document.body)
  console.dir(document.body)
</script>
```

2a. Mettez le texte dans la partie `tagline` en majuscules.

```javascript
const taglineEl = document.getElementById("tagline")
// const taglineEl = document.querySelector("#tagline")
taglineEl.style.textTransform = "uppercase"
```

2b. Changez la couleur du fond de la partie `header` de notre document.

```javascript
const headerEl = document.getElementById("header")
// const headerEl = document.querySelector("#header")
headerEl.setAttribute("style", "background-color:tomato!important;")
```

2c. Ce n'est pas une bonne pratique de sur-utiliser JavaScript. Tout ce qui concerne la mise en page et ce qui peut être effectué par CSS, devrait être fait avec CSS. Souvent on va gagner sur la perfomance et l'expérience utilisateur.

```javascript
headerEl.setAttribute("style", "background-color:tomato!important;")
```

Nous allons maintenant intérvenir sur la mise en page avec un effet qui n'est pas réalisable avec pure CSS. Nous allons rendre la propriété `background-color` de l'élément `header` aléatoire `["hotpink", "tomato", "orange"]`. A chaque chargement de la page JavaScript devrait indiquer la couleur.

```javascript
const colors = ["hotpink", "tomato", "orange"]
const randomIndexColor = Math.floor(Math.random() * colors.length)

headerEl.setAttribute(
  "style",
  `background-color:${colors[randomIndexColor]}!important;`
)
```

3. Allons plus loin avec le côté aléatoire. Faites le texte de la tagline aléatoire `['Hello', 'Salut', 'Hola', 'Cześć']`

```javascript
const hellos = ["Hello", "Salut", "Hola", "Cześć"]
const randomIndexHellos = Math.floor(Math.random() * hellos.length)
tagline.textContent = `${hellos[randomIndexHellos]} 😊`
```

4. Imaginons que le nombre de critères change de temps en temps (les utilisateur envoyent leurs témoignages et suggestions etc.). Pour ne pas avoir à les compter et ce protéger des erreur, le dévéloppeur laisse cette tâche au JavaScript.  
   L'élément `#count` devrait contenir l'information sur le nombre de critères.

```javascript
const countEl = document.getElementById("count")
// const countEl = document.querySelector("#count")

const listItems = document.querySelectorAll("#list li")
countEl.textContent = listItems.length
```

5. Le bouton `#info-btn` devrait afficher (avec `alert`) le titre, la langue et l'URL de la page.

```javascript
const infoBtn = document.getElementById("info-btn")
// const infoBtn = document.querySelector("#info-btn")

const handleInfoBtnClick = () => {
  alert(
    `Le titre de cette page est "${document.title}" (${document.documentElement.lang}), son URL est ${document.URL}`
  )
}

if (infoBtn) {
  infoBtn.addEventListener("click", handleInfoBtnClick)
}
// infoBtn?.addEventListener("click", handleInfoBtnClick)
```

6a. Le panneau publicitaire devrait disparaitre en click

```javascript
const pubEl = document.getElementById("pub")
if (pubEl) {
  pubEl?.addEventListener("click", () => pubEl.remove())
}
```

6b. Ce que nous venons de faire dans l'étape précedente est en fait une très mauvais pratique. Nous venons d'attacher un `eventListener` à l'élément de type `div`, alors à un élément qui n'est pas naturelement intéractif. C'est problématique au niveau d'accèssibilité, une personne qui se déplace au sein de notre page avec un clavier et pas avec un souris (souris, touch-pad et équivalent) ne pourra pas accèder à cet élément.

Pour y remedier nous allons ajouter un bouton dans notre document HTML :

```html
<div id="pub" class="bg-danger p-5 text-white mb-4">
  <p>
    <span class="display-1">⛵️</span>Je suis un panneau publicitaire, je
    disparais en click ;)
  </p>
  <button id="pub-btn" type="button" class="btn btn-outline-light btn-sm">
    Fermer le panneau
  </button>
</div>
```

Ensuite nous allons attacher notre event handler à notre nouveau bouton et pas au `div#pub`.

```javascript
const pubEl = document.getElementById("pub")
const pubBtn = pubEl.querySelector("button")
pubBtn?.addEventListener("click", () => pubEl.remove())
```

7. Le bouton 😎 regénere la partie header (tagline et couleur du fond)

```javascript
const headerEl = document.getElementById("header")
const taglineEl = document.getElementById("tagline")
const headerBtn = headerEl.querySelector()

const generateHeader = () => {
  const colors = ["hotpink", "tomato", "orange"]
  const randomIndexColor = Math.floor(Math.random() * colors.length)
  const hellos = ["Hello", "Salut", "Hola", "Cześć"]
  const randomIndexHellos = Math.floor(Math.random() * hellos.length)

  headerEl.setAttribute(
    "style",
    `background-color:${colors[randomIndexColor]}!important;`
  )
  taglineEl.textContent = `${hellos[randomIndexHellos]} 😊`
}

generateHeader()
headerBtn.addEventListener("click", generateHeader)
```
