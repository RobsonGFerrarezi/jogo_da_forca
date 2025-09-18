/**
 * palavrasJogo.js (VERSÃO AMPLIADA)
 * * Um compilado massivo de palavras e frases para um jogo da forca,
 * com categorias expandidas e novas seções temáticas.
 */

const palavrasParaForca = {
    // --- CATEGORIAS EXISTENTES EXPANDIDAS ---
    Frutas: [
        'Abacate', 'Abacaxi', 'Açaí', 'Acerola', 'Ameixa', 'Amora',
        'Atemoia', 'Banana', 'Cacau', 'Caju', 'Caqui', 'Carambola',
        'Cereja', 'Coco', 'Cupuaçu', 'Damasco', 'Figo', 'Framboesa',
        'Goiaba', 'Graviola', 'Guaraná', 'Jabuticaba', 'Jaca', 'Jambo',
        'Kiwi', 'Laranja', 'Lichia', 'Limão', 'Maçã', 'Mamão', 'Manga',
        'Mangaba', 'Maracujá', 'Melancia', 'Melão', 'Mexerica', 'Morango',
        'Nectarina', 'Pera', 'Pêssego', 'Pinha', 'Pitanga', 'Pitaya',
        'Romã', 'Seriguela', 'Tamarindo', 'Tangerina', 'Uva'
    ],
    Animais: [
        'Abelha', 'Alce', 'Anta', 'Aranha', 'Arara', 'Baleia', 'Barata',
        'Beija Flor', 'Boi', 'Borboleta', 'Búfalo', 'Cabra', 'Cachorro',
        'Camaleão', 'Camelo', 'Capivara', 'Caracol', 'Caranguejo',
        'Cavalo', 'Chimpanzé', 'Cisne', 'Cobra', 'Coelho', 'Coruja',
        'Crocodilo', 'Dinossauro', 'Dragão de Komodo', 'Elefante',
        'Escorpião', 'Esquilo', 'Estrela do Mar', 'Foca', 'Formiga',
        'Gafanhoto', 'Galinha', 'Gambá', 'Ganso', 'Gato', 'Girafa',
        'Golfinho', 'Gorila', 'Hamster', 'Hiena', 'Hipopótamo', 'Jacaré',
        'Joaninha', 'Lagartixa', 'Lagarto', 'Leão', 'Lebre', 'Lêmure',
        'Lhama', 'Lobo', 'Lula', 'Macaco', 'Minhoca', 'Morcego',
        'Onça Pintada', 'Ornitorrinco', 'Ostra', 'Ovelha', 'Panda',
        'Papagaio', 'Pato', 'Pavão', 'Peixe Boi', 'Pinguim', 'Polvo',
        'Porco', 'Rato', 'Rinoceronte', 'Sapo', 'Serpente', 'Tartaruga',
        'Tatu', 'Tigre', 'Tubarão', 'Tucano', 'Urso', 'Vaca', 'Zebra'
    ],
    Marcas: [
        'Adidas', 'Amazon', 'Apple', 'Asus', 'Avon', 'Bauducco', 'Bic',
        'Bradesco', 'Brahma', 'Calvin Klein', 'Canon', 'Carrefour',
        'Caterpillar', 'Chevrolet', 'Coca Cola', 'Colgate', 'Correios',
        'Dell', 'Disney', 'Faber Castell', 'Ferrari', 'Fiat', 'Ford',
        'Gillette', 'Google', 'Havaianas', 'Heinz', 'Honda', 'HP',
        'Instagram', 'Intel', 'Itaú', 'Johnson e Johnson', 'Lacoste',
        'LG', 'Lojas Americanas', 'Magazine Luiza', 'Mastercard',
        'McDonalds', 'Mercado Livre', 'Microsoft', 'Motorola', 'Natura',
        'Nestlé', 'Netflix', 'Nike', 'Nivea', 'O Boticario', 'Oracle',
        'Panasonic', 'Pepsi', 'Petrobras', 'Philips', 'Puma', 'Red Bull',
        'Sadia', 'Samsung', 'Santander', 'Sony', 'Spotify', 'TikTok',
        'Toyota', 'Tramontina', 'Twitter', 'Uber', 'Unilever', 'Visa',
        'Volkswagen', 'Yamaha', 'Youtube', 'Ypê'
    ],
    Carros: [
        'Audi A3', 'BMW Serie 3', 'Brasilia', 'Cherokee', 'Chevette',
        'Corolla', 'Dodge Ram', 'Ferrari', 'Fiat Pulse', 'Ford Ka',
        'Ford Mustang', 'Fusca', 'Gol', 'Honda Civic', 'HRV', 'Jeep Compass',
        'Kombi', 'Lamborghini', 'Maverick', 'Mercedes Classe C',
        'Mobi', 'Onix', 'Opala', 'Palio', 'Porsche 911', 'Renegade',
        'Saveiro', 'Tesla', 'Toro', 'Troller', 'Tucson', 'Uno com Escada',
        'Hilux', 'TCross'
    ],
    Filmes: [
        'A Chegada', 'A Origem', 'Avatar', 'Bacurau', 'Batman O Cavaleiro das Trevas',
        'Central do Brasil', 'Cidade de Deus', 'Clube da Luta', 'Coringa',
        'De Volta para o Futuro', 'Duna', 'E o Vento Levou', 'Forrest Gump',
        'Guerra nas Estrelas', 'Harry Potter', 'Indiana Jones e a Caveira de Cristal',
        'Interestelar', 'Jurassic Park', 'Kill Bill', 'Laranja Mecânica',
        'Mad Max Estrada da Fúria', 'Matrix', 'O Auto da Compadecida',
        'O Exterminador do Futuro', 'O Iluminado', 'O Poderoso Chefão',
        'O Rei Leão', 'O Resgate do Soldado Ryan', 'O Senhor dos Anéis',
        'O Silêncio dos Inocentes', 'Oppenheimer', 'Os Bons Companheiros',
        'Os Infiltrados', 'Os Vingadores', 'Parasita', 'Psicose',
        'Pulp Fiction', 'Rocky um Lutador', 'Se Beber Não Case',
        'Sempre ao Seu Lado', 'Star Wars Uma Nova Esperança', 'Titanic',
        'Toy Story', 'Tropa de Elite', 'Tubarão', 'Um Sonho de Liberdade'
    ],
    Desenhos: [
        'Apenas um Show', 'As Meninas Superpoderosas', 'Avatar a Lenda de Aang',
        'Batman A Série Animada', 'Ben 10', 'Bob Esponja', 'Caverna do Dragão',
        'Coragem o Cão Covarde', 'Corrida Maluca', 'Dragon Ball Z', 'Ducktales',
        'Futurama', 'Gravity Falls', 'He Man', 'Hora de Aventura',
        'Johnny Bravo', 'Liga da Justiça', 'Looney Tunes', 'Mickey Mouse',
        'Naruto', 'O Incrível Mundo de Gumball', 'Os Flintstones', 'Os Jetsons',
        'Os Padrinhos Mágicos', 'Os Simpsons', 'Pernalonga e Patolino', 'Pica Pau',
        'Pinky e o Cérebro', 'Pokemon', 'Popeye', 'Recrutas da Pesada',
        'Rick and Morty', 'Samurai Jack', 'Scooby Doo', 'South Park',
        'Steven Universo', 'Super Choque', 'Teen Titans', 'Thundercats',
        'Tom e Jerry', 'Três Espiãs Demais', 'Turma da Mônica', 'Urso do Cabelo Duro',
        'X-Men Evolution'
    ],

    // --- NOVAS CATEGORIAS ---
    Profissões: [
        'Advogado', 'Agricultor', 'Arquiteto', 'Artista', 'Ator', 'Bombeiro',
        'Cabeleireiro', 'Cientista', 'Contador', 'Cozinheiro', 'Dentista',
        'Designer', 'Eletricista', 'Enfermeiro', 'Engenheiro de Software',
        'Engenheiro', 'Escritor', 'Farmacêutico', 'Fisioterapeuta', 'Fotógrafo',
        'Garçom', 'Jardineiro', 'Jornalista', 'Juiz', 'Mecânico', 'Médico',
        'Motorista', 'Músico', 'Padeiro', 'Pedreiro', 'Piloto de Avião',
        'Policial', 'Professor', 'Programador de Computador', 'Psicólogo',
        'Recepcionista', 'Segurança', 'Soldado', 'Veterinário', 'Web Designer'
    ],
    Países: [
        'África do Sul', 'Alemanha', 'Angola', 'Arábia Saudita', 'Argentina',
        'Austrália', 'Bélgica', 'Bolívia', 'Brasil', 'Canadá', 'Chile',
        'China', 'Colômbia', 'Coreia do Sul', 'Croácia', 'Cuba', 'Egito',
        'Espanha', 'Estados Unidos', 'Filipinas', 'Finlândia', 'França',
        'Grécia', 'Holanda', 'Índia', 'Indonésia', 'Inglaterra', 'Irlanda',
        'Israel', 'Itália', 'Japão', 'Marrocos', 'México', 'Moçambique',
        'Nigéria', 'Noruega', 'Nova Zelândia', 'Peru', 'Polônia', 'Portugal',
        'Reino Unido', 'Rússia', 'Suécia', 'Suíça', 'Tailândia', 'Turquia',
        'Ucrânia', 'Uruguai', 'Venezuela', 'Vietnã'
    ],
    Objetos: [
        'Abajur', 'Anel', 'Apontador', 'Armário', 'Aspirador de Pó', 'Balde',
        'Bicicleta', 'Bolsa', 'Brinco', 'Cadeira', 'Caderno', 'Calculadora',
        'Cama', 'Caneta', 'Carregador de Celular', 'Chave de Fenda', 'Chaveiro',
        'Chinelo', 'Colchão', 'Colher', 'Controle Remoto', 'Copo', 'Dado',
        'Escada', 'Escova de Dentes', 'Espelho', 'Estojo', 'Faca', 'Fogão',
        'Fone de Ouvido', 'Garfo', 'Garrafa', 'Geladeira', 'Guarda Chuva',
        'Janela', 'Lâmpada', 'Lápis', 'Livro', 'Mesa', 'Mochila', 'Notebook',
        'Óculos', 'Panela', 'Pente', 'Porta', 'Prato', 'Relógio', 'Sabonete',
        'Sofá', 'Telefone Celular', 'Televisão', 'Tesoura', 'Toalha', 'Travesseiro',
        'Vaso', 'Vassoura', 'Xícara'
    ],
    'Comidas e Bebidas': [
        'Arroz e Feijão', 'Batata Frita', 'Bife a Parmegiana', 'Bolo de Chocolate',
        'Brigadeiro', 'Café', 'Cachorro Quente', 'Caldo de Cana', 'Camarão',
        'Canjica', 'Carne de Panela', 'Cerveja', 'Churrasco', 'Cocada',
        'Coxinha', 'Cuscuz', 'Doce de Leite', 'Empada', 'Esfiha', 'Feijoada',
        'Frango Assado', 'Guaraná', 'Hambúrguer', 'Lasanha', 'Limonada',
        'Macarronada', 'Milkshake', 'Moqueca', 'Omelete', 'Pamonha', 'Panqueca',
        'Pastel', 'Pão de Queijo', 'Pipoca', 'Pizza', 'Pudim', 'Quindim',
        'Salada de Frutas', 'Sopa', 'Sorvete', 'Strogonoff', 'Suco de Laranja',
        'Sushi', 'Tapioca', 'Vaca Atolada', 'Vitamina de Abacate', 'Vinho'
    ],
    Esportes: [
        'Alpinismo', 'Arco e Flecha', 'Atletismo', 'Automobilismo', 'Badminton',
        'Basquete', 'Beisebol', 'Boliche', 'Boxe', 'Canoagem', 'Capoeira',
        'Ciclismo', 'Corrida', 'Críquete', 'Esgrima', 'Esqui', 'Fórmula Um',
        'Futebol Americano', 'Futebol', 'Futsal', 'Ginástica Artística',
        'Golfe', 'Handebol', 'Hipismo', 'Hóquei', 'Jiu Jitsu', 'Judô',
        'Karatê', 'Levantamento de Peso', 'Luta Livre', 'Maratona', 'Mergulho',
        'Motociclismo', 'Natação', 'Parkour', 'Patinação no Gelo', 'Polo Aquático',
        'Remo', 'Rugby', 'Skate', 'Surfe', 'Tênis de Mesa', 'Tênis',
        'Tiro com Arco', 'Triatlo', 'Vela', 'Voleibol', 'Vôlei de Praia', 'Xadrez'
    ],
    'Personagens Fictícios': [
        'Batman', 'Capitão América', 'Cebolinha', 'Chapolin Colorado',
        'Chaves', 'Coringa', 'Darth Vader', 'Donkey Kong', 'Doutor Estranho',
        'Gandalf', 'Goku', 'Hagar o Horrível', 'Harry Potter', 'Heisenberg',
        'Hello Kitty', 'Homer Simpson', 'Homem de Ferro', 'Homem Aranha',
        'Hulk', 'Indiana Jones', 'Jack Sparrow', 'James Bond', 'Jason',
        'Katniss Everdeen', 'Kratos', 'Lara Croft', 'Luke Skywalker', 'Mafalda',
        'Mario', 'Naruto', 'Neo', 'Pernalonga', 'Pikachu', 'Rocky Balboa',
        'Ryu', 'Seu Madruga', 'Sherlock Holmes', 'Shrek', 'Snoop', 'Sonic',
        'Super Homem', 'Tio Patinhas', 'Tony Soprano', 'Wolverine', 'Mulher Maravilha',
        'Yoda', 'Zelda'
    ],
    'Bandas e Músicos': [
        'ACDC', 'Alok', 'Anitta', 'Barões da Pisadinha', 'Beatles', 'Beyoncé',
        'Bob Marley', 'Caetano Veloso', 'Capital Inicial', 'Cazuza', 'Charlie Brown Jr',
        'Chico Buarque', 'Chitãozinho e Xororó', 'Coldplay', 'Djavan', 'Drake',
        'Elis Regina', 'Elton John', 'Elvis Presley', 'Eminem', 'Engenheiros do Hawaii',
        'Foo Fighters', 'Gilberto Gil', 'Guns N Roses', 'Iron Maiden',
        'Ivete Sangalo', 'Jota Quest', 'Led Zeppelin', 'Legião Urbana', 'Luan Santana',
        'Ludmilla', 'Madonna', 'Marisa Monte', 'Marília Mendonça', 'Metallica',
        'Michael Jackson', 'Milton Nascimento', 'Mamonas Assassinas', 'Nirvana',
        'Paralamas do Sucesso', 'Pink Floyd', 'Queen', 'Raul Seixas',
        'Red Hot Chili Peppers', 'Renato Russo', 'Roberto Carlos', 'Rolling Stones',
        'Sandy e Junior', 'Skank', 'Slipknot', 'Taylor Swift', 'The Weeknd',
        'Tim Maia', 'Titãs', 'U2', 'Zeca Pagodinho'
    ]
};

module.exports = palavrasParaForca;