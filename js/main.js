function hisoblash() {
  let summa = document.getElementById("miqdoriv").value;
  let foizmiqdori = document.getElementById("foiz").value;
  let olinganYili = document.getElementById("kalendaryili").value;
  let boshTulov = document.getElementById("boshfoiz").value;
  let muddat = document.getElementById("dedline").value;
  let olinganOy = document.getElementById("kalendaroyi").value;

  //   console.log(summa);
  //   console.log(foizmiqdori);
  //   console.log(olinganYili);
  //   console.log(boshTulov);
  //   console.log(muddat);
  //   console.log(olinganOy);
  if (summa.length > 0) {
    muddat = 12 * parseInt(muddat);

    let oynomlari = [
      "Yanvar",
      "Fevral",
      "Mart",
      "Aprel",
      "May",
      "Iyun",
      "Iyul",
      "Avgust",
      "Sentabr",
      "Oktabr",
      "Noyabr",
      "Dekabr",
    ];

    let oylikTulov = (summa - (summa * parseInt(boshTulov)) / 100) / muddat;

    summa -= (summa * boshTulov) / 100;

    let jamiOylikTulov = 0;

    let jamiFoizTulov = 0;

    let jamiTulovMiqdori = 0;

    let natija = "";

    let head =
      "<tr>" +
      "<td>" +
      "№" +
      "</td>" +
      "<td>" +
      "Yil" +
      "</td>" +
      "<td>" +
      "Oy" +
      "</td>" +
      "<td>" +
      "Asosiy qarz" +
      "</td>" +
      "<td>" +
      "Oylik to'lov" +
      "</td>" +
      "<td>" +
      "Foiz to'lov" +
      "</td>" +
      "<td>" +
      "Jami oylik to'lov" +
      "</td>" +
      "</tr>";
    document.getElementById("theader").innerHTML = head;

    for (let i = 0; i < muddat; i++) {
      let foizTulov = (summa * foizmiqdori) / 100 / 12;
      let jamiTulov = oylikTulov + foizTulov;

      natija +=
        "<tr>" +
        "<td>" +
        (i + 1) +
        "</td>" +
        "<td>" +
        olinganYili +
        " - yil " +
        "</td>" +
        "<td>" +
        oynomlari[(parseInt(olinganOy) + i) % 12] +
        "</td>" +
        "<td>" +
        summa
          .toFixed(2)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") +
        "</td>" +
        "<td>" +
        oylikTulov
          .toFixed(2)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") +
        "</td>" +
        "<td>" +
        foizTulov
          .toFixed(2)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") +
        "</td>" +
        "<td>" +
        jamiTulov
          .toFixed(2)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") +
        "</td>" +
        "<tr>";

      jamiOylikTulov += oylikTulov;
      jamiFoizTulov += foizTulov;
      jamiTulovMiqdori += jamiTulov;

      if (oynomlari[(parseInt(olinganOy) + i) % 12] === "Dekabr") {
        olinganYili = parseInt(olinganYili) + 1;
      }

      summa -= oylikTulov;
    }
    document.getElementById("result").innerHTML = natija;

    let jami =
      "<tr>" +
      "<td>" +
      "</td>" +
      "<td>" +
      "</td>" +
      "<td>" +
      "</td>" +
      "<td>" +
      "Qarz miqdori" +
      "</td>" +
      "<td>" +
      "Olingan Kredit miqdori" +
      "</td>" +
      "<td>" +
      "Jami foiz to'lovi" +
      "</td>" +
      "<td>" +
      "Jami to'langan so'mma" +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td>" +
      "</td>" +
      "<td>" +
      "</td>" +
      "<td>" +
      "</td>" +
      "<td>" +
      summa
        .toFixed(2)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") +
      "</td>" +
      "<td>" +
      jamiOylikTulov
        .toFixed(2)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") +
      " " +
      " So'm" +
      "</td>" +
      "<td>" +
      jamiFoizTulov
        .toFixed(2)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") +
      " " +
      " So'm" +
      "</td>" +
      "<td>" +
      jamiTulovMiqdori
        .toFixed(2)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") +
      " " +
      " So'm" +
      "</td>" +
      "</tr>";

    document.getElementById("jami").innerHTML = jami;
  } else {
    alert("Kredit summasini kiriting...!");
  }
}
