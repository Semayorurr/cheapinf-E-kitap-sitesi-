document.addEventListener("DOMContentLoaded" , function(){
const kitaplarRayi=document.querySelector('.kitaplar-rayi');
const solok=document.querySelector('.sol-ok');
const sagok=document.querySelector('.sag-ok');
const kaydirmaMiktari=250;
solok.addEventListener('click',function() {
  kitaplarRayi.scrollBy({ left: -kaydirmaMiktari , behavior: 'smooth'});
});
sagok.addEventListener('click',function(){
kitaplarRayi.scrollBy({ left: kaydirmaMiktari, behavior:'smooth'});
});
const sliderKutusu=document.querySelector('.sliderkutusu');
const sliderResimleri=document.querySelectorAll('.sliderkutusu img');
let mevcutResim=0;
const toplamResim=sliderResimleri.length;
function resimgoster(){
  mevcutResim++;
  if(mevcutResim>=toplamResim){
    mevcutResim=0;
  }
  sliderKutusu.style.transform=`translateX(-${mevcutResim*100}%)`;
}
setInterval(resimgoster, 5000);
});
let sepetAdet=0;
const sepetsayaci=document.getElementById('sepet-sayaci');
function sepeteEkle(){
  sepetAdet++;
  sepetsayaci.textContent=sepetAdet;
  alert("Ürün sepete eklendi!");
}
let searchInput = document.querySelector('.aramacubugu input');
let tumKitaplar = document.querySelectorAll('.kitapkapsayici');
const kategoriSatiri = document.querySelector('.kategoriresimsatiri');
const oneCikanlarYazisi = document.querySelector('.onecikanyaz');
const populerYazisi = document.querySelector('.populeryazısı');
const populerYayinevleri = document.querySelector('.populeryayınevleri');
const kartKitapSatiri = document.querySelector('.kartkitapsatiri');
const solOk = document.querySelector('.sol-ok');
const sagOk = document.querySelector('.sag-ok');

if (searchInput) {
    searchInput.addEventListener('keyup', function() {
        let aranan = searchInput.value.toLowerCase().trim();
        if (aranan !== "") {
            if (kategoriSatiri) kategoriSatiri.style.display = "none";
            if (oneCikanlarYazisi) oneCikanlarYazisi.style.display = "none";
            if (populerYazisi) populerYazisi.style.display = "none";
            if (populerYayinevleri) populerYayinevleri.style.display = "none";
            if (kartKitapSatiri) kartKitapSatiri.style.display = "none";
            if (solOk) solOk.style.display = "none";
            if (sagOk) sagOk.style.display = "none";

            
            tumKitaplar.forEach((kapsayici) => {
                let baslikElementi = kapsayici.querySelector("h3");
                
                if (baslikElementi) {
                    let kitapAdi = baslikElementi.textContent.toLowerCase();
                    
                    if (kitapAdi.includes(aranan)) {
                        kapsayici.style.display = "inline-block"; 
                    } else {
                        kapsayici.style.display = "none";
                    }
                }
            });

        } else {
            
            if (kategoriSatiri) kategoriSatiri.style.display = "";
            if (oneCikanlarYazisi) oneCikanlarYazisi.style.display = "";
            if (populerYazisi) populerYazisi.style.display = "";
            if (populerYayinevleri) populerYayinevleri.style.display = "";
            if (kartKitapSatiri) kartKitapSatiri.style.display = "";
            if (solOk) solOk.style.display = "";
            if (sagOk) sagOk.style.display = "";

            tumKitaplar.forEach((kapsayici) => {
                kapsayici.style.display = "";
            });
        }
    });
}