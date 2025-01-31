// import { filterListFrench } from "./dictionnary-bullshit-words.js";

const filterListFrench = new Set([
  [
    "couche sociale",
    "classe sociale",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "Droits de l'homme",
    "droits de tous les hommes",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "le problème",
    "la question",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "la solution",
    "la proposition",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "élites",
    "responsables",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "divertissement",
    "abrutissement",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "émeute",
    "révolte",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "exclusion",
    "exploitation/oppression",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "partenaires sociaux",
    "organisations syndicales et patronales",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "entrepreneurs",
    "patrons",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "équité",
    "égalité",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "flexibilité",
    "précarité",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "assouplissement",
    "précarité",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "dommage collatéral",
    "crime de guerre",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "terrorisme",
    "résistance",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "pays en dévelopement",
    "Tiers Monde",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "pays émergent",
    "Tiers Monde",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],
  [
    "pays émergents",
    "Tiers Monde",
    {
      url: "https://fr.wikipedia.org/wiki/LQR",
      bookName: "LQR : la propagande du quotidien ",
    },
  ],

  ["milliardaire", "oligarche"],
  ["milliardaires", "oligarches"],
  ["millionaires", "oligarches"],
  ["millionaire", "oligarche"],
]);

const filterListEnglish = new Set([
  ["billionaire", "oligarch"],
  ["billionaires", "oligarchs"],
]);

const listToUse = new Set([...filterListEnglish, ...filterListFrench]);

const useAdvancedReplaceText = true;

if (!useAdvancedReplaceText) {
  const treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let node;

  while ((node = treeWalker.nextNode())) {
    filterListFrench.forEach((bsWord) => {
      const stringToSearch = bsWord[0];
      const regexToSearch = new RegExp(stringToSearch, "gi");
      node.textContent = node.textContent.replaceAll(regexToSearch, bsWord[1]);
    });
  }
} else {
  // Function to replace specific words with HTML
  function replaceWordsWithHTML(htmlContent, wordsToReplace) {
    // Iterate over each word to replace
    for (const wordReplacement of wordsToReplace) {
      // Create a regular expression to find the word
      const regex = new RegExp(`\\b${wordReplacement[0]}\\b`, "gi");
      // Replace the word with the replacement HTML
      htmlContent = htmlContent.replace(
        regex,
        `<span style='color: red; text-decoration: line-through'>${wordReplacement[0]}</span><span style='color:green;'>${wordReplacement[1]}</span>`
      );
    }
    return htmlContent;
  }

  document.body.innerHTML = replaceWordsWithHTML(
    document.body.innerHTML,
    listToUse
  );
}

// while ((node = treeWalker.nextNode())) {
//   filterListFrench.forEach((bsWord) => {
//     const stringToSearch = bsWord[0];
//     const regexToSearch = new RegExp(stringToSearch, "gi");
//     if (node.textContent.toLowerCase().includes(stringToSearch)) {
//       console.log("💗", stringToSearch, node, node.innerHTML);
//       if (!node.innerHTML) console.log("failing node", node, node.innerHTML);
//       const nodeHTMLArr = node.innerHTML?.split(" ");
//       if (!nodeHTMLArr) return;
//       const indexBeforeChange = nodeHTMLArr.indexOf(stringToSearch);
//       const before = "<span style='color: red; text-decoration: line-through'>";
//       const middle = "</span><span style='color:green;'>";
//       const after = "</span>";
//       nodeHTMLArr[indexBeforeChange] =
//         before + stringToSearch + middle + bsWord[1] + after;
//       node.innerHTML = nodeHTMLArr.join(" ");
//     }
//   });
// }
