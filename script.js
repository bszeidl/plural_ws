function pageLoaded() { /*Az oldal betöltésekor elinduló függvény */

  let rootE = document.getElementById("root"); /*A root-ID-jű div tag-et deklaráljuk egy rootE nevű lokális változóba */

  let aTextArray = ["szeder", "alma", "cseresznye", "eper", "egres", "meggy", "dinnye", "datolya", "barack", "kiwi", "citrom"]; /* aTextArray változóba deklaráltunk egy gyümölcs neveket tartalmazó array-t */

  // console.log(aTextArray[2]);

  // console.log(aTextArray.length);

  for (let index = 0; index < aTextArray.length; index++) { /*For ciklussal bejárjuk a aTextArray-t */

    /* Létrehozunk egy fruit class nevű div tag-et a root ID-jű div-en belül és a végén. */
    /* Annyi db div-et hoz létre a for ciklus, amennyi db indexe van az aTextArray-nek. */
    rootE.insertAdjacentHTML("beforeend", `                 
      <div class="fruit">${aTextArray[index]}</div>
    `);

  }

/* Deklarátlunk egy fruitDivs nevű lokális változót a fruit class nevű div-nek. */
  let fruitDivs = rootE.querySelectorAll(".fruit");
  
  // console.log(fruitDivs[2]);

  /* Deklaráltunk egy for ciklust, ami bejárja a fruitDivs class nevű div-ket, az összes ilyen div-et. */
   for (let index = 0; index < fruitDivs.length; index++) {
    
    // console.log(index === 1);
    // console.log(index % 2);

    /* A páros index értéket felvevő fruitDivs class nevű div-eknek ad egy trueClass class nevet. */
    if (index % 2 === 0){

      fruitDivs[index].classList.add("trueClass");

      /* Minden ötödik index értéket felvevő fruitDivs class nevű div-eknek ad egy anotherClass class nevet. */
    } else if (index % 5 === 0) {

      fruitDivs[index].classList.add("anotherClass");

      /* falseClass nevű class-t ad azoknak a fruitDivs class nevű div-eknek, amik nem páros értékű idexűek illetve nem az ötödik index értékű div-ek. */
    } else {
      
      fruitDivs[index].classList.add("falseClass");

    }
    
  }
}

/*Az esemény figyelő, mely az oldal betöltése esetén indítja pageLoaded nevű function-t. */
window.addEventListener("load", pageLoaded);
