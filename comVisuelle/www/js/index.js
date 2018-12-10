document.addEventListener('deviceready', start, false);


var db;



function start()
{
    db = window.openDatabase("data", "1.0", "data test", 200000);
    db.transaction(populateDB, errorCB, successCB);

    $('#orel').on("click", check);
}    

function check()
{
    console.log('essai acces DB');
    db.transaction(checkDB, errorCB, successCB);
}

function checkDB(tx)
{
    tx.executeSql('SELECT * FROM categories;', [], function(tx, result){
        console.log('acces effectue');
        console.log(result.rows);
    });
}




function populateDB(tx)
{
    // tx.executeSql('DROP TABLE IF EXISTS categories');
    // tx.executeSql('CREATE TABLE IF NOT EXISTS "categories" ( `category_id` INTEGER PRIMARY KEY AUTOINCREMENT, `category_name` TEXT)');
    // tx.executeSql('INSERT INTO categories (category_id, category_name) VALUES (1, "aliments")');
    // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    function luc()
    {
        tx.executeSql(CREATE TABLE IF NOT EXISTS `to_have` (
            `fk_picture `	INTEGER,
            `fk_tag`	INTEGER,
            FOREIGN KEY(`fk_picture `) REFERENCES `pictures`(`picture_id`),
            FOREIGN KEY(`fk_tag`) REFERENCES `tags`(`tag_id`)
        ));

        tx.executeSql(CREATE TABLE IF NOT EXISTS `to_belong` (
            `fk_picture`	INTEGER,
            `fk_category`	INTEGER,
            FOREIGN KEY(`fk_picture`) REFERENCES `pictures`(`picture_id`),
            FOREIGN KEY(`fk_category`) REFERENCES `categories`(`category_id`)
        ));

        tx.executeSql(CREATE TABLE IF NOT EXISTS `tags` (
            `tag_id`	INTEGER PRIMARY KEY AUTOINCREMENT,
            `tag_name`	TEXT,
            `created_at `	TEXT,
            `updated_at `	TEXT
        ));

        tx.executeSql(CREATE TABLE IF NOT EXISTS `pictures` (
            `picture_id`	INTEGER PRIMARY KEY AUTOINCREMENT,
            `picture_name`	TEXT,
            `picture_url`	TEXT,
            `created_at`	TEXT,
            `updated_at`	TEXT
        ));
        
        tx.executeSql("INSERT INTO `pictures` VALUES (1,'activités motrices','images/activités motrices.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (2,'appeler ','images/appeler.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (3,'après','images/après.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (4,'asperges','images/asperge.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (5,'asperges 2 ','images/asperges 2.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (6,'asperges vinaigrette ','images/asperges vinaigrette.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (7,'atelier art','images/atelier art.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (8,'atelier cuisine','images/atelier cuisine.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (9,'atelier musique','images/atelier musique.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (10,'ateliers cognitifs','images/ateliers cognitifs.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (11,'atelier sport','images/atelier sport.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (12,'bananes','images/banane.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (13,'boire','images/boire.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (14,'bon','images/bon.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (15,'bonnet','images/bonnet.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (16,'bottes','images/bottes.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (17,'bouchées à la reine','images/bouchées à la reine.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (18,'boulettes viande','images/boulettes viande.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (19,'brocolis','images/brocolis.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (20,'café','images/café.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (21,'café liegeois','images/café liegeois.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (22,'calèche','images/calèche.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (23,'carottes','images/carottes.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (24,'casquette','images/casquette.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (25,'casser','images/casser.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (26,'cassoulet','images/cassoulet.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (27,'chambre','images/chambre.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (28,'chaussure','images/chaussure.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (29,'choisir','images/choisir.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (30,'choucroute','images/choucroute.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (31,'choux de bruxelles','images/choux de bruxelles.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (32,'choux farcis','/images/choux farcis.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (33,'choux fleur','/images/choux fleur.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (34,'cinéma','/images/cinéma.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (35,'clémentines','/images/clémentines.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (36,'courir','/images/courir.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (37,'courses','/images/courses.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (38,'crème dessert','/images/crème dessert.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (39,'crêpes fromages','/images/crêpes fromages.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (40,'croque monsieur','/images/croque monsieur.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (41,'cuisiner','/images/cuisiner.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (42,'dentiste','/images/dentiste.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (43,'douche','/images/douche.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (44,'écouter musique','/images/écoute musique.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (45,'endives jambon ','/images/endives jambon.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (46,'epinards','/images/epinards.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (47,'equitation','/images/equitation.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (48,'espace connais sens','/images/espace connais sens.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (49,'essuyer les mains ','/images/essuyer les mains.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (50,'faché ','/images/faché.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (51,'faim','/images/faim.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (52,'faire mal ','/images/faire mal.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (53,'fini','/images/fini.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (54,'foulard','/images/foulard.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (55,'friand','/images/friand.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (56,'frites','images/frites/jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (57,'froid','images/froid.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (58,'froid','images/froid.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (59,'fromage blanc','images/fromage blanc.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (60,'fruits','images/fruits.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (61,'funerailles','images/funerailles.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (62,'gateau chocolat','images/gateau chocolat.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (63,'gateau yaourt','images/gateau yaourt.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (64,'glace','images/glace.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (65,'glaces','images/glaces.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (66,'grillades','images/grillades.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (67,'hamburger','images/hamburgerjpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (68,'haricots blancs','images/haricots blancs.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (69,'il n''y a pas','images/il n''y a pas.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (70,'infirmière','images/infirmière.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (71,'interdit','images/interdit.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (72,'j''aime pas','images/j''aime pas.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (73,'jambon blanc','images/jambon blanc.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (74,'jambon de pays','images/jambon de pays.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (75,'jeux seul','images/jeux seul.jpg','','')");
    }
    function nico()
    {
        tx.executeSql("INSERT INTO `pictures` VALUES (76,'je veux','images/je veux.jpg','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (77,'julienne','images/julienne.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (78,'la ferme','images/la ferme.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (79,'la messe','images/la messe.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (80,'lasagnes','images/lasagnes.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (81,'laver le visage','images/laver le visage.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (82,'le marché','images/le marché.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (83,'lentilles saucisses','images/lentilles saucisses.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (84,'maintenant','images/maintenant.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (85,'manger','images/manger.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (86,'manteau','images/manteau.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (87,'marcher','images/marcher.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (88,'masque','images/masque.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (89,'mauvais','images/mauvais.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (90,'mayonnaise','images/mayonnaise.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (91,'melon','images/melon.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (92,'menu','images/menu.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (93,'merci','images/merci.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (94,'mettre','images/mettre.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (95,'moi','images/moi.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (96,'monter','images/monter.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (97,'mort','images/mort.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (98,'moutarde','images/moutarde.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (99,'noel','images/noel.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (100,'oeufs','images/oeufs.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (101,'omelette','images/omelette.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (102,'ouvrir la bouche','images/ouvrir la bouche.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (103,'paella','images/paella.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (104,'pain de mie','images/pain de mie.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (105,'pastèque','iamges/pastèque.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (106,'pâté','images/pâté.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (107,'petite assiette','images/petite assiette.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (108,'petits pois','images/petits pois.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (109,'piscine','images/piscine.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (110,'pistolet','images/pistolet.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (111,'pizzeria','images/pizzeria.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (112,'pleurer','images/pleurer.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (113,'poireaux','images/poireaux.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (114,'pomme de terre','images/pomme de terre.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (115,'pot au feu','images/pot au feu.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (116,'prise de sang','images/prise de sang.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (117,'pruneaux','images/pruneaux.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (118,'psychologue','images/psychologue.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (119,'purée','images/purée.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (120,'quand','images/quand.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (121,'radis','images/radis.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (122,'raisin','images/raisin.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (123,'ranger','images/ranger.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (124,'rentrer à la maison','images/rentrer à la maison.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (125,'restaurant','images/restaurant.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (126,'riz au lait','images/riz au lait.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (127,'salade d''endives','images/salade d''endives.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (128,'salade de tomates','images/salade de tomates.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (129,'salade fruits','images/salade fruits.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (130,'s''allonger','images/s''allonger.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (131,'salsifis','images/salsifis.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (132,'sardines','images/sardines.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (133,'se brosser les dents','images/se brosser les dents.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (134,'se déshabiller','images/se déshabiller.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (135,'se doucher','images/se doucher.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (136,'se moucher','images/se moucher.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (137,'se peser','images/se peser.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (138,'se reposer','images/se reposer.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (139,'s''habiller','images/s''habiller.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (140,'sport collectif','images/sport collectif.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (141,'sport santé','images/sport santé.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (142,'steack','images/steack.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (143,'tablette','images/tablette.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (144,'tarte','images/tarte.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (145,'théatre','images/théatre.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (146,'théâtre','images/théâtre.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (147,'toilettes','images/toilettes.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (148,'tourte','images/tourte.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (149,'triste','images/triste.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (150,'vaccin','images/vaccin.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (151,'viande en sauce','images/viande en sauce.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (152,'vous','images/vous.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (153,'yaourts','images/yaourts.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (154,'zumba','images/zumba.JPG','','')");
        tx.executeSql("INSERT INTO `pictures` VALUES (155,'judo','images/judo.JPG','','')");
        
        tx.executeSql(CREATE TABLE IF NOT EXISTS `categories` (
            `category_id`	INTEGER PRIMARY KEY AUTOINCREMENT,
            `category_name`	TEXT,
            `created_at`	TEXT,
            `updated_at`	TEXT
        ));
        tx.executeSql("INSERT INTO `categories` VALUES (2,'aliments','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (3,'actions','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (4,'activités','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (5,'hygiène','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (6,'santé','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (7,'sorties','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (8,'loisirs','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (9,'humeurs','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (10,'temps','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (11,'interdit','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (12,'intéractions','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (13,'sports','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (14,'lieux','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (15,'évènements','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (16,'objets','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (17,'habits','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (18,'gestes','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (19,'intéractions avec pros','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (20,'émotions','','')");
        tx.executeSql("INSERT INTO `categories` VALUES (21,'états','','')");
    }
}


function errorCB(tx, err)
{
    alert("Error processing SQL: "+err);
}


function successCB()
{
    alert("success!");
}



