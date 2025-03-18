"use strict";
class Singleton2 {
    // Constructor'ı private yaparak doğrudan sınıfın örneklenmesini engelliyoruz.
    //private constructor() ifadesi, bir sınıfın dışarıdan örneklenmesini 
    // (instantiation) önlemek amacıyla kullanılır. 
    // Bu özellik, sınıfın yapıcısına (constructor) sadece sınıfın kendi içinde erişilebileceği anlamına gelir. Yani, bir new anahtar kelimesi kullanarak bu sınıfın yeni bir örneğini yaratmaya çalıştığınızda hata alırsınız.
    constructor() { }
    // Singleton örneğini almak için kullanılan statik bir metod.
    static getInstance() {
        if (!Singleton2.instance) {
            Singleton2.instance = new Singleton2();
        }
        return Singleton2.instance;
    }
    sayHello() {
        console.log("Merhaba! Ben bir Singleton örneğim.");
    }
}
// Singleton örneğini kullanma
const obj1 = Singleton2.getInstance();
const obj2 = Singleton2.getInstance();
console.log(obj1 === obj2); // true: Her iki değişken de aynı örneği referans eder.
obj1.sayHello();
// bu örnekte, Singleton.getInstance() metodu aynı örneği (instance) döner. Eğer Singleton örneği daha önce oluşturulmamışsa, instance değişkeni null olur ve bu metot, örneği yaratır. Aksi takdirde, mevcut olan örneği döner.
//Singleton deseni, genellikle veritabanı bağlantıları, ayar yönetimi veya küresel durumları yönetmek için tercih edilir. Ancak, dikkatli kullanılmazsa kodun test edilebilirliğini zorlaştırabilir. 
// Bu yüzden uygun senaryolarda kullanılması önemlidir. 😊
// TypeScript'te Singleton, bir sınıftan sadece bir örneğin (instance) 
// oluşturulmasını garanti altına alan bir tasarım deseni (design pattern) olarak tanımlanır. Singleton tasarım deseni, genellikle küresel (global) bir erişim noktası sağlamak ve kaynakları optimize etmek için kullanılır.
