    class Database {
        
        private static instance: Database; // dit is  Singleton instantie
    
    
        private data: string[] = [];   // Een lijst om de data op te slaan
    
        // Private constructor zodat er geen nieuwe instanties van buitenaf gemaakt kunnen worden
        // Implementeer de private constructor
        private constructor() { } //Constructor'ı private yaparak doğrudan sınıfın örneklenmesini engelliyoruz.
                                 // private constructor() ifadesi, bir sınıfın dışarıdan örneklenmesini 
                                // (instantiation) önlemek amacıyla kullanılır. 
                            
        
        // Publieke statische methode om toegang te krijgen tot de Singleton instantie
        //Implementeer de statische getInstance methode

        public static getInstance(): Database { //initial met if
            if (!Database.instance) {
                Database.instance = new Database();
            }
            return Database.instance;
        }
        addData(newData: string): void {
            this.data.push(newData);
        }
        removeData(targetData: string): void {
            this.data = this.data.filter(data => data !== targetData);//filter() metodu, bir dizideki (array) elemanları belirli bir koşula göre filtrelemek için kullanılır. Bu metod, orijinal diziyi değiştirmez, 
                                                                    // bunun yerine koşulu sağlayan elemanlardan oluşan yeni bir dizi döner.
        }

        fetchData(): string[] {
            return this.data;
        }
    }
        const db1 = Database.getInstance();//De methode Database.getInstance() retourneert dezelfde instantie. 
                                            // Als de Database-instantie nog niet eerder is gemaakt, 
                                            // is de instantievariabele nul en 
                                            // wordt met deze methode de instantie gemaakt. 
                                            // Anders retourneert het de bestaande instantie.(mevcut olan ornek)
        const db2 = Database.getInstance();

        // Hier controleren we of beide "instanties" eigenlijk dezelfde zijn
        console.log(db1 === db2); // true: Her iki değişken de aynı örneği referans eder.
                                // Outputs: true
        db1.addData("Data 1");
        db1.addData("Data 2");
        console.log(db2.fetchData());  // Outputs: ["Data 1", "Data 2"]


        db2.removeData("Data 1");
        console.log(db1.fetchData());  // Outputs: ["Data 2"]

        //  bu örnekte, Database.getInstance() metodu aynı örneği (instance) döner. 
        // Eğer Singleton örneği daha önce oluşturulmamışsa, instance değişkeni null olur ve bu metot, örneği yaratır.
        //  Aksi takdirde, mevcut olan örneği döner.
        


    
    