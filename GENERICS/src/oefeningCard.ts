//T, sınıfın hangi tür veriyle çalışacağını belirtmek için kullanılıyor
//sınıf generic (T) bir tür alıyor

class CardCollection<T> { 
    private cards: T[] = []; //initial leeg array
//(private) olduğu için dışarıdan doğrudan erişilemez. 
// Bu,CardCollection objesindeki kartların yönetimini güvenli hale getiriyor.

//1kart eklemek icin METHOD


//Gelen card elemanı, cards dizisinin sonuna ekleniyor 
//(push() metodu sayesinde).
addCard(card: T): void {  // void=>niet return
    this.cards.push(card);
}

//Kart cekiliyor=>splice(randomIndex, 1) metodu,
// randomIndex pozisyonundaki elemanı diziden çıkartır ve 
// bir array olarak geri döner.
// [0] ile bu arrayin ilk (ve tek) elemanına erişilir.
//splice() ile kartı hem çekip hem de diziden çıkartmayı sağlar.
drawCard(): T | null {
    if (this.cards.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    const drawnCard = this.cards.splice(randomIndex, 1) [0];


//returnwaarde van splice is array met virwijderde element
    return drawnCard;//Çekilen kart, drawnCard değişkenine atanır ve döndürülür.
}

//Methoden om het aantal kaarten te retournen
    countCards (): number {
        return this.cards.length;
    }
}

// Voorbeeld van gebruik
    let playingCards = new CardCollection<string>();
    playingCards.addCard("Harten Aas");
    playingCards.addCard("Klaveren 10");
    
    console.log(playingCards.countCards()); // Outputs: 2
    
    console.log(playingCards.drawCard());   // Outputs: (willekeurig) "Harten Aas" of "Klaveren 10"
    console.log(playingCards.countCards()); // Outputs: 1
    

