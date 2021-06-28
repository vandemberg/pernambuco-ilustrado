import agresteAlceuValenca from "../assets/img/agreste/alceu_valenca.png";
import agresteBonequeiro from "../assets/img/agreste/bonequeiro.JPG";
import agresteDiaspora1 from "../assets/img/agreste/diaspora1.jpg";
import agresteDiaspora2 from "../assets/img/agreste/diaspora2.jpg";
import agresteDiaspora3 from "../assets/img/agreste/diaspora3.jpg";
import agresteDomiguinhos from "../assets/img/agreste/domiguinhos.png";
import agresteFeiraDeCaruaru from "../assets/img/agreste/feiraDeCaruaru.jpg";
import agresteForroGonzaga from "../assets/img/agreste/forro_gonzaga.jpg";
import agresteForro from "../assets/img/agreste/forro.jpg";
import agresteBorges from "../assets/img/agreste/borges.png";
import agresteMestreMembi from "../assets/img/agreste/mestreMembi.jpeg";
import agresteRitualMadeira from "../assets/img/agreste/ritualMadeira.jpg";
import agresteSaoJoao from "../assets/img/agreste/saoJoao.JPG";
import agresteTor1 from "../assets/img/agreste/tor1.jpg";

import metropolitanaAqueltune from "../assets/img/metropolitana/aqueltune_diego.png";
import metropolitanaBonecosGigantes from "../assets/img/metropolitana/Bonecos_gigantes_vico.jpg";
import metropolitanaChicoScience from "../assets/img/metropolitana/chico_science_pamela.jpg";
import metropolitanaFrevoBenne from "../assets/img/metropolitana/frevo_benne_oliveira.png";
import metropolitanaGalo from "../assets/img/metropolitana/Galo_VicoSoares.jpg";
import metropolitanaHMN from "../assets/img/metropolitana/HMN_VicoSoares.jpg";
import metropolitanaJacksonDoPandeiro from "../assets/img/metropolitana/JacksonDoPandeiro_diego.png";
import metropolitanaLaUrsa from "../assets/img/metropolitana/laUrsa.jpg";
import metropolitanaLiaDeItamarac from "../assets/img/metropolitana/Lia-de-Itamarac_edjr.png";
import metropolitanaNanVasconcelos from "../assets/img/metropolitana/Nan -Vasconcelos_edjr.png";
import metropolitanaReginaldoRossi from "../assets/img/metropolitana/Reginaldo-Rossi_rdjr.png";
import metropolitanaRuaBernardoVieiraDeMelo from "../assets/img/metropolitana/Rua-Bernardo-Vieira-de-Melo_edjr.png";

import saoFranciscoCarranca1 from "../assets/img/saoFrancisco/carranca1.png";
import saoFranciscoCarranca2 from "../assets/img/saoFrancisco/carranca2.png";

import sertaoCantadores from "../assets/img/sertao/cantadores.jpg";
import sertaoLuizGonzaga from "../assets/img/sertao/Luiz-Gonzaga_edjr.png";
import sertaoMascarados from "../assets/img/sertao/mascarados.jpg";

import zonaDaMataCabocloDeLanca from "../assets/img/zonaDaMata/cabocloDeLanca.jpg";
import zonaDaMataMaracatuBaqueSolto from "../assets/img/zonaDaMata/maracatuBaqueSolto.jpg";
import zonaDaMataMaracatuBaqueVirado from "../assets/img/zonaDaMata/MaracatuBaqueVirado_diego.png";
import zonaDaMataMestreSalustiano from "../assets/img/zonaDaMata/Mestre-Salustiano_edjr.png";

export const categories = [
  {
    title: "Agreste",
    image: agresteFeiraDeCaruaru,
    type: "link",
    url: "/categoria/agreste",
  },
  {
    title: "São Francisco",
    image: saoFranciscoCarranca1,
    type: "link",
    url: "/categoria/sao-francisco",
  },
  {
    title: "Metropolitana",
    image: metropolitanaAqueltune,
    type: "link",
    url: "/categoria/metropolitana",
  },
  {
    title: "Zona da mata",
    image: zonaDaMataMaracatuBaqueSolto,
    type: "link",
    url: "/categoria/zona-da-mata",
  },
  {
    title: "Sertão",
    image: sertaoLuizGonzaga,
    type: "link",
    url: "/categoria/sertao",
  },
];

export const category = {
  sertao: {
    title: "Sertão",
    list: [
      {
        id: "cantadores",
        title: "Cantadores",
        image: sertaoCantadores,
        type: "modal",
      },
      {
        id: "luiz-gonzaga",
        title: "Luiz Gonzaga",
        image: sertaoLuizGonzaga,
        type: "modal",
      },
      {
        id: "mascarados",
        title: "Mascarados",
        image: sertaoMascarados,
        type: "modal",
      },
    ],
  },
  "zona-da-mata": {
    title: "Zona da mata",
    list: [
      {
        id: "caboclo-de-lanca",
        title: "Caboclo de lança",
        image: zonaDaMataCabocloDeLanca,
        type: "modal",
      },
      {
        id: "maracatu-baque-solto",
        title: "Maracatu baque solto",
        image: zonaDaMataMaracatuBaqueSolto,
        type: "modal",
      },
      {
        id: "maracatu-baque-virado",
        title: "Maracatu baque virado",
        image: zonaDaMataMaracatuBaqueVirado,
        type: "modal",
      },
      {
        id: "mestre-salustiano",
        title: "Mestre salustiano",
        image: zonaDaMataMestreSalustiano,
        type: "modal",
      },
    ],
  },
  "sao-francisco": {
    title: "São Francisco",
    list: [
      {
        id: "carranca",
        title: "Carranca",
        image: saoFranciscoCarranca1,
        type: "modal",
      },
      {
        id: "carranca-animal",
        title: "Carranca animal",
        image: saoFranciscoCarranca2,
        type: "modal",
      },
      {
        id: "carranca",
        title: "Carranca ",
        image: saoFranciscoCarranca1,
        type: "modal",
      },
    ],
  },
  agreste: {
    title: "Agreste",
    list: [
      {
        id: "alceu-valenca",
        title: "Alceu Valença",
        image: agresteAlceuValenca,
        type: "modal",
      },
      {
        id: "bonequeiro",
        title: "Bonequeiro",
        image: agresteBonequeiro,
        type: "modal",
      },
      {
        id: "borges",
        title: "Borges",
        image: agresteBorges,
        type: "modal",
      },
      {
        id: "diaspora-1",
        title: "Diaspora 1",
        image: agresteDiaspora1,
        type: "modal",
      },
      {
        id: "diaspora-2",
        title: "Diaspora 2",
        image: agresteDiaspora2,
        type: "modal",
      },
      {
        id: "diaspora-3",
        title: "Diaspora 3",
        image: agresteDiaspora3,
        type: "modal",
      },
      {
        id: "domiguinhos",
        title: "Domiguinhos",
        image: agresteDomiguinhos,
        type: "modal",
      },
      {
        id: "feira-de-caruaru",
        title: "Feira de Caruaru",
        image: agresteFeiraDeCaruaru,
        type: "modal",
      },
      {
        id: "forro-gonzaga-agreste",
        title: "Forró Gonzaga Agreste",
        image: agresteForroGonzaga,
        type: "modal",
      },
      {
        id: "forro",
        title: "Forró",
        image: agresteForro,
        type: "modal",
      },
      {
        id: "mestre-membi",
        title: "Mestre Membi",
        image: agresteMestreMembi,
        type: "modal",
      },
      {
        id: "ritual-madeira",
        title: "Ritual madeira",
        image: agresteRitualMadeira,
        type: "modal",
      },
      {
        id: "sao-joao",
        title: "São João",
        image: agresteSaoJoao,
        type: "modal",
      },
      {
        id: "tor",
        title: "Tor",
        image: agresteTor1,
        type: "modal",
      },
    ],
  },
  metropolitana: {
    title: "Metropolitana",
    list: [
      {
        id: "aqualtune",
        title: "Aqualtune",
        image: metropolitanaAqueltune,
        type: "modal",
      },
      {
        id: "bonecos-gigantes",
        title: "Bonecos Gigantes",
        image: metropolitanaBonecosGigantes,
        type: "modal",
      },
      {
        id: "chico-science",
        title: "Chico Science",
        image: metropolitanaChicoScience,
        type: "modal",
      },
      {
        id: "frevo",
        title: "Frevo",
        image: metropolitanaFrevoBenne,
        type: "modal",
      },
      {
        id: "Galo",
        title: "Galo",
        image: metropolitanaGalo,
        type: "modal",
      },
      {
        id: "hmn",
        title: "Boneco de Olinda",
        image: metropolitanaHMN,
        type: "modal",
      },
      {
        id: "jackson-do-pandeiro",
        title: "Jackson do pandeiro",
        image: metropolitanaJacksonDoPandeiro,
        type: "modal",
      },
      {
        id: "la-ursa",
        title: "La Ursa",
        image: metropolitanaLaUrsa,
        type: "modal",
      },
      {
        id: "lia-de-itamarac",
        title: "Lia de Itamarac",
        image: metropolitanaLiaDeItamarac,
        type: "modal",
      },
      {
        id: "nan-vasconcelos",
        title: "Nan Vasconcelos",
        image: metropolitanaNanVasconcelos,
        type: "modal",
      },
      {
        id: "reginaldo-rossi",
        title: "Reginado Rossi",
        image: metropolitanaReginaldoRossi,
        type: "modal",
      },
      {
        id: "rua-bernado-vieira-de-melo",
        title: "Rua Bernado Vieira de Melo",
        image: metropolitanaRuaBernardoVieiraDeMelo,
        type: "modal",
      },
    ],
  },
};
