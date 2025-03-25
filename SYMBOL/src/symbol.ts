// Primitive türler immutable'dır (değiştirilemez). Örneğin bir string değerini değiştirirseniz, aslında yeni bir değer oluşturursunuz.
// Hafif ve performanslıdır, çünkü hafızada küçük bir yer kaplarlar.
//Primitive türler "değer iletilir", yani bir değişkene atandıklarında orijinal değer kopyalanır.


// Symbol, her çağrıldığında eşsiz bir değer üretir. Bu durumda 'uniqueKey' isminde bir sembol oluşturuldu ve
//Bu sembol CustomObject nesnesinde özel bir anahtar olarak kullanılacak.
const uniqueKey = Symbol('uniqueKey');
interface CustomObject {
//bracket notaion=> [uniqueKey icine yeni bir SYMBOL degeri gelir]
[uniqueKey]: string;
    price: number;
}


// [uniqueKey]: string;: uniqueKey adlı Symbol'ün bir özellik olarak tanımlandığını ve 
// string bir değeri olduğunu belirtir.
//price: number;: Nesne içinde price adlı bir özellik olduğunu ve bunun bir number olduğunu belirtir.
let obj1: CustomObject = {
    [uniqueKey]: "Benzersiz bir anahtarla ilişkili başlangıç ​​değeri!",
    price: 42
};

obj1[uniqueKey] = "Bu değer benzersiz bir KEY ILE  ilişkilidir!";
//obj1 nesnesinde uniqueKey sembolüne bağlı olan değer güncelleniyor.
//BuRDAKI OBJ1 IN OZELLIGI EIGESCHAPPEN IN DE VARIABLE
//Köşeli parantezler ([ ]), TypeScript'te dinamik bir anahtarın türünü ifade etmek için kullanılır. 
//Yani burada uniqueKey bir sembol olduğu için dinamik bir özellik tanımlıyorsunuz.

console.log(obj1[uniqueKey]); // Outputs: "This value is associated with a unique key!"

//inamik Özellikler ve Eşsiz Anahtarlar: Symbol, eşsiz bir değer olduğu için, diğer özellik adlarıyla çakışma riski olmaz. Bu özellikle büyük projelerde çakışmaları önlemek için önemlidir.

//SYMBOL KULLANIMININ AMACI=>
//1->Dinamik Özellikler ve Eşsiz Anahtarlar: Symbol, eşsiz bir değer olduğu için, diğer özellik adlarıyla çakışma riski olmaz. 
// Bu özellikle büyük projelerde çakışmaları önlemek için önemlidir.
//2->Gizlilik ve Koruma: Symbol'ler, dışarıdan erişimi zorlaştırarak özellikleri bir miktar gizler. 
// Örneğin, for...in döngüsü veya Object.keys() ile sembollere ulaşamazsınız.
//3->Modülerlik ve Güvenli Genişletme: Framework veya kütüphaneler yazarken, özel özellikler tanımlamak için Symbol kullanılır.
//  Bu, herhangi bir kullanıcı tanımlı özellik ile çakışmamasını garanti eder.

