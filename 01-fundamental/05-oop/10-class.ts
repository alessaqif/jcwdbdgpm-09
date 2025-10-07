//CLASS

class Player {
  username: string;
  mmr: number;
  hours: number;
  totalGames: number;
  wallet: number;

  constructor(
    pUsername: string,
    pMmr: number,
    pHours: number,
    pTotalgames: number,
    pWallet?: number
  ) {
    this.username = pUsername;
    this.mmr = pMmr;
    this.hours = pHours
    this.totalGames = pTotalgames
    this.wallet = pWallet;
  }
}

const player1 = new Player("jonh aless",5000,33000,4000,5000)
const player2 = new Player("gacorr aless 556",6000,34000,4000,150000)
const player3 = new Player("8DF aless",7000,35000,4500,45000)
const player4 = new Player("Hustle crips aless",8000,35000,4000,120000)
const player5 = new Player("Hooligans Aless",9000,3200,4000,1200000)

console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);
console.log(player5);
