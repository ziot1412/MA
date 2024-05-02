function fetchData(fileName, idSelect) {
  fetch(fileName)
    .then((response) => response.json())
    .then((data) => {
      const charList = document.getElementById(idSelect);

      // Loop through the data and create HTML elements
      data.forEach((character) => {
        const charItem = document.createElement("div");
        charItem.classList.add(
          "col-xs-6",
          "col-sm-6",
          "col-md-4",
          "col-lg-3",
          "field--item"
        );

        const charContent = `
                    <div>
                        <div class="field character-cover">
                            <img loading="lazy" src="${character.image}" alt="" class="img-cover img-fluid rounded">
                        </div>
                        <div class="field">
                            <div class="form-group--name">
                                <span>${character.name}</span>
                                <a href="${character.link}"></a>
                            </div>
                        </div>
                    </div>
                `;

        charItem.innerHTML = charContent;
        charList.appendChild(charItem);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}

fetchData("./character/senriGan.json", "senri-gan");
fetchData("./character/amagasa.json", "amagasa");
fetchData("./character/GM.json", "gm");
fetchData("./character/kesoshirou.json", "kesoshirou");
fetchData("./character/sadakage.json", "sadakage");
fetchData("./character/velzhe.json", "velzhe");
fetchData("./character/polki.json", "polki");
fetchData("./character/try.json", "try");
fetchData("./character/dawalixi.json", "dawalixi");
fetchData("./character/meme50.json", "meme50");
fetchData("./character/itabiraYasai.json", "itabira-yasai");
fetchData("./character/hitoi.json", "hitoi");
fetchData("./character/dramus.json", "dramus");
fetchData("./character/nylon.json", "nylon");
fetchData("./character/jackDempa.json", "jack-dempa");
fetchData("./character/kuronisiki.json", "kuronisiki");
fetchData("./character/nanafuton.json", "nanafuton");
fetchData("./character/lzth.json", "lzth");
fetchData("./character/kuronomiki.json", "kuronomiki");
fetchData("./character/61.json", "61");
fetchData("./character/minamoto.json", "mutton");
fetchData("./character/nanao.json", "nanao");
fetchData("./character/satouKuuki.json", "satou-kuuki");
fetchData("./character/ncn.json", "ncn");
fetchData("./character/throtem.json", "throtem");
fetchData("./character/urabuko.json", "urabuko");
fetchData("./character/rk-2.json", "rk-2");
fetchData("./character/otochichi.json", "otochichi");
fetchData("./character/skyFreedom.json", "sky-freedom");
fetchData("./character/aoiSakura.json", "aoi-sakura");
