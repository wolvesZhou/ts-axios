// 剩余参数
function buildName(firstName: string, ...restName: string[]): string {
  return "";
}

// this指向
interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCard(this: Deck): () => Card;
}

const deck: Deck = {
  suits: ["hearts", "spades", "diamonds", "clubs"],
  cards: Array(52),
  createCard(): (this: Deck) => Card {
    return () => {
      const pickCard = Math.floor(Math.random() * 52);
      const pickSuit = Math.floor(pickCard / 13);

      return {
        suit: this.suits[pickSuit],
        card: pickCard % 13
      };
    };
  }
};

let cardPicker = deck.createCard();
let pickCard = cardPicker();

// 回调this
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
  type: string;

  onClickBind = (e: Event) => {
    this.type = e.type;
  };
}

const handler = new Handler();
const uiElement: UIElement = {
  addClickListener() {}
};

uiElement.addClickListener(handler.onClickBind);

// 重载
let suits = ["hearts", "diamonds", "clubs", "spades"];

interface CardDemo {
  suit: string;
  card: number;
}

function pickCardDemo(x: CardDemo[]): number;
function pickCardDemo(x: number): CardDemo;

function pickCardDemo(x: any): any {
  if (Array.isArray(x)) {
    const pickCard = Math.floor(Math.random() * x.length);
    return pickCard;
  } else if (typeof x === "number") {
    const pickSuit = Math.floor(x / 13);
    return { suit: suits[pickSuit], card: x % 13 };
  }
}

const myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 }
];
const pickedCard1 = myDeck[pickCardDemo(myDeck)];
console.log(pickedCard1.card + pickedCard1.suit);

const pickedCard2 = pickCardDemo(10);
console.log(pickedCard2.card + pickedCard2.suit);
