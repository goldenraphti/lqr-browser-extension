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

const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_TEXT,
  null,
  false
);

let node;

const useAdvancedReplaceText = false;

if (!useAdvancedReplaceText) {
  while ((node = treeWalker.nextNode())) {
    filterListFrench.forEach((bsWord) => {
      const stringToSearch = bsWord[0];
      const regexToSearch = new RegExp(stringToSearch, "gi");
      node.textContent = node.textContent.replaceAll(regexToSearch, bsWord[1]);
    });
  }
} else {
  while ((node = treeWalker.nextNode())) {
    filterListFrench.forEach((bsWord) => {
      const stringToSearch = bsWord[0];
      const regexToSearch = new RegExp(stringToSearch, "gi");
      if (node.textContent.toLowerCase().includes(stringToSearch)) {
        console.log("💗", stringToSearch, node, node.innerHTML);
        if (!node.innerHTML) console.log("failing node", node, node.innerHTML);
        const nodeHTMLArr = node.innerHTML?.split(" ");
        if (!nodeHTMLArr) return;
        const indexBeforeChange = nodeHTMLArr.indexOf(stringToSearch);
        const before =
          "<span style='color: red; text-decoration: line-through'>";
        const middle = "</span><span style='color:green;'>";
        const after = "</span>";
        nodeHTMLArr[indexBeforeChange] =
          before + stringToSearch + middle + bsWord[1] + after;
        node.innerHTML = nodeHTMLArr.join(" ");
      }
    });
  }
}
