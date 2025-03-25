//TypeScript'te, işlediği veri türüne göre esnek kod yazmanıza olanak tanıyan güçlü bir özellik
//Belirli türleri sabit kodlamak yerine, farklı veri türleriyle çalışan genel türler ve işlevler oluşturabilirsiniz.
//Bu, kodunuzun yeniden kullanılabilirliğini artırır ve tür güvenliğini artırır

//Yeniden kullanılabilirliği teşvik edin: farklı türlerle çalışan, aynı işlevleri ve sınıfları farklı veri türleri için yeniden kullanmanıza olanak tanıyan kod
//Tip güvenliğini koruyun: Geliştirme süreci sırasında statik tip kontrolleri gerçekleştirin, bu da hata olasılığını azaltır
//Esneklik sağlama: Veri yazma hassasiyetini kaybetmeden birden fazla senaryoyu barındırabilen kod


//<T> burda GENERICS OLDUGUNU GOSTERIYOR
function getFirstItem<T>(items: T[]): T {
    return items[0];
    }
    
    let numbers = [1, 2, 3];
    console.log(getFirstItem(numbers)); // Outputs: 1
    
    let strings = ["apple", "banana", "cherry"];
    console.log(getFirstItem(strings)); // Outputs: apple
    
    