/**
 * Baralho do Super Trunfo Egípcio
 * 32 cartas (31 normais + 1 Super Trunfo).
 *
 * Identificador: <número><naipe>, onde número vai de 1 a 8 e naipe de A a D.
 * Atributos: poder, inteligencia, forca, agressividade — escala 0-10.
 * Caminho de imagem: assets/<id-minusculo>-<nome-slug>.jpg
 */

const CARTAS = [
  // Naipe A
  { id: "1A", nome: "Rá",            poder: 10, inteligencia:  9, forca:  9, agressividade:  6, superTrunfo: false, imagem: "assets/1a-ra.jpg" },
  { id: "2A", nome: "Serpopardo",    poder:  6, inteligencia:  4, forca:  8, agressividade:  8, superTrunfo: false, imagem: "assets/2a-serpopardo.jpg" },
  { id: "3A", nome: "Ramsés II",     poder:  8, inteligencia:  7, forca:  9, agressividade:  8, superTrunfo: false, imagem: "assets/3a-ramses-ii.jpg" },
  { id: "4A", nome: "Akhenaton",     poder:  7, inteligencia:  7, forca:  4, agressividade:  4, superTrunfo: false, imagem: "assets/4a-akhenaton.jpg" },
  { id: "5A", nome: "Quéops",        poder:  7, inteligencia:  6, forca:  6, agressividade:  5, superTrunfo: false, imagem: "assets/5a-queops.jpg" },
  { id: "6A", nome: "Tutancâmon",    poder:  6, inteligencia:  4, forca:  5, agressividade:  4, superTrunfo: false, imagem: "assets/6a-tutancamon.jpg" },
  { id: "7A", nome: "Néftis",        poder:  7, inteligencia:  8, forca:  5, agressividade:  5, superTrunfo: false, imagem: "assets/7a-neftis.jpg" },
  { id: "8A", nome: "Áton",          poder:  8, inteligencia:  6, forca:  7, agressividade:  4, superTrunfo: false, imagem: "assets/8a-aton.jpg" },

  // Naipe B
  { id: "1B", nome: "Apep",          poder:  8, inteligencia:  4, forca: 10, agressividade: 10, superTrunfo: false, imagem: "assets/1b-apep.jpg" },
  { id: "2B", nome: "Atum",          poder: 10, inteligencia:  9, forca:  8, agressividade:  5, superTrunfo: false, imagem: "assets/2b-atum.jpg" },
  { id: "3B", nome: "Sekhmet",       poder:  7, inteligencia:  6, forca:  9, agressividade: 10, superTrunfo: false, imagem: "assets/3b-sekhmet.jpg" },
  { id: "4B", nome: "Nun",           poder: 10, inteligencia:  7, forca:  9, agressividade:  5, superTrunfo: false, imagem: "assets/4b-nun.jpg" },
  { id: "5B", nome: "Hórus",         poder:  8, inteligencia:  7, forca:  9, agressividade:  9, superTrunfo: false, imagem: "assets/5b-horus.jpg" },
  { id: "6B", nome: "Ísis",          poder:  9, inteligencia:  9, forca:  5, agressividade:  3, superTrunfo: false, imagem: "assets/6b-isis.jpg" },
  { id: "7B", nome: "Anúbis",        poder:  8, inteligencia:  9, forca:  7, agressividade:  7, superTrunfo: false, imagem: "assets/7b-anubis.jpg" },
  { id: "8B", nome: "Maat",          poder:  7, inteligencia: 10, forca:  5, agressividade:  3, superTrunfo: false, imagem: "assets/8b-maat.jpg" },

  // Naipe C
  { id: "1C", nome: "Set",           poder:  9, inteligencia:  6, forca:  9, agressividade:  9, superTrunfo: false, imagem: "assets/1c-set.jpg" },
  { id: "2C", nome: "Hathor",        poder:  8, inteligencia:  7, forca:  5, agressividade:  3, superTrunfo: false, imagem: "assets/2c-hathor.jpg" },
  { id: "3C", nome: "Amon-Rá",       poder: 10, inteligencia: 10, forca: 10, agressividade: 10, superTrunfo: true,  imagem: "assets/3c-amon-ra.jpg" },
  { id: "4C", nome: "Thoth",         poder:  8, inteligencia: 10, forca:  5, agressividade:  3, superTrunfo: false, imagem: "assets/4c-thoth.jpg" },
  { id: "5C", nome: "Ptah",          poder:  9, inteligencia:  9, forca:  6, agressividade:  3, superTrunfo: false, imagem: "assets/5c-ptah.jpg" },
  { id: "6C", nome: "Osíris",        poder: 10, inteligencia:  9, forca:  6, agressividade:  3, superTrunfo: false, imagem: "assets/6c-osiris.jpg" },
  { id: "7C", nome: "Bastet",        poder:  7, inteligencia:  7, forca:  7, agressividade:  7, superTrunfo: false, imagem: "assets/7c-bastet.jpg" },
  { id: "8C", nome: "Esfinge",       poder:  6, inteligencia:  9, forca:  7, agressividade:  4, superTrunfo: false, imagem: "assets/8c-esfinge.jpg" },

  // Naipe D
  { id: "1D", nome: "Ammit",         poder:  6, inteligencia:  3, forca:  9, agressividade: 10, superTrunfo: false, imagem: "assets/1d-ammit.jpg" },
  { id: "2D", nome: "Khonsu",        poder:  7, inteligencia:  5, forca:  6, agressividade:  5, superTrunfo: false, imagem: "assets/2d-khonsu.jpg" },
  { id: "3D", nome: "Mut",           poder:  8, inteligencia:  6, forca:  5, agressividade:  4, superTrunfo: false, imagem: "assets/3d-mut.jpg" },
  { id: "4D", nome: "Heka",          poder:  5, inteligencia: 10, forca:  4, agressividade:  3, superTrunfo: false, imagem: "assets/4d-heka.jpg" },
  { id: "5D", nome: "Medjed",        poder:  7, inteligencia:  6, forca:  4, agressividade:  5, superTrunfo: false, imagem: "assets/5d-medjed.jpg" },
  { id: "6D", nome: "Hapi",          poder:  7, inteligencia:  6, forca:  7, agressividade:  4, superTrunfo: false, imagem: "assets/6d-hapi.jpg" },
  { id: "7D", nome: "Imhotep",       poder:  6, inteligencia: 10, forca:  4, agressividade:  3, superTrunfo: false, imagem: "assets/7d-imhotep.jpg" },
  { id: "8D", nome: "Cleópatra VII", poder:  8, inteligencia:  9, forca:  4, agressividade:  5, superTrunfo: false, imagem: "assets/8d-cleopatra-vii.jpg" }
];

// Exporta para uso pelos outros módulos (script.js carrega esse arquivo via <script>)
if (typeof window !== "undefined") {
  window.CARTAS = CARTAS;
}
