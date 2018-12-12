// document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener('deviceready', isDbEmpty, false);

var db;

function isDbEmpty(tx)
{
    tx.executeSql('SELECT * FROM categories;', [], function(tx, result)
    {
        console.log(result);
        console.log(result.length);
        console.log(result.row);
        console.log(result.row.length);
        //if(result)
        //start();
    });
}

function start()
{
    db = window.openDatabase("database", "1.0", "Cordova Demo", 200000);
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
    tx.executeSql('SELECT * FROM categories;', [], function(tx, result)
    {
        console.log('acces effectue');
        console.log(result.rows);
        var resultat = result.rows;

        for(var i=0; i<resultat.length; i++){
            $('.dropdown-menu').html('<a class="dropdown-item" href="#">'+resultat[i]+'</a>');
        }
        
        // return resultat;
    });
}

function populateDB(tx)
{
    tx.executeSql("CREATE TABLE IF NOT EXISTS pictures (picture_id unique, picture_name, picture_url)");
    tx.executeSql("CREATE TABLE IF NOT EXISTS categories (category_id unique, category_name)");
    tx.executeSql("CREATE TABLE IF NOT EXISTS tags (tag_id unique, tag_name)");
    tx.executeSql("CREATE TABLE IF NOT EXISTS to_have (fk_picture INTEGER, fk_tag INTEGER, FOREIGN KEY(fk_picture) REFERENCES pictures (picture_id), FOREIGN KEY(fk_tag) REFERENCES tags (tag_id))");
    tx.executeSql("CREATE TABLE IF NOT EXISTS to_belong (fk_picture INTEGER, fk_category INTEGER, FOREIGN KEY(fk_picture) REFERENCES pictures(picture_id), FOREIGN KEY(fk_category) REFERENCES categories(category_id))");
    tx.executeSql("INSERT INTO pictures (picture_id, picture_name, picture_url) VALUES (1, 'activités motrices', 'images/activités motrices.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (2,'appeler','images/appeler.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (3,'après','images/après.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (4,'asperges','images/asperge.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (5,'asperges 2 ','images/asperges 2.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (6,'asperges vinaigrette ','images/asperges vinaigrette.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (7,'atelier art','images/atelier art.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (8,'atelier cuisine','images/atelier cuisine.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (9,'atelier musique','images/atelier musique.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (10,'ateliers cognitifs','images/ateliers cognitifs.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (11,'atelier sport','images/atelier sport.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (12,'bananes','images/banane.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (13,'boire','images/boire.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (14,'bon','images/bon.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (15,'bonnet','images/bonnet.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (16,'bottes','images/bottes.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (17,'bouchées à la reine','images/bouchées à la reine.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (18,'boulettes viande','images/boulettes viande.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (19,'brocolis','images/brocolis.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (20,'café','images/café.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (21,'café liegeois','images/café liegeois.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (22,'calèche','images/calèche.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (23,'carottes','images/carottes.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (24,'casquette','images/casquette.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (25,'casser','images/casser.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (26,'cassoulet','images/cassoulet.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (27,'chambre','images/chambre.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (28,'chaussure','images/chaussure.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (29,'choisir','images/choisir.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (30,'choucroute','images/choucroute.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (31,'choux de bruxelles','images/choux de bruxelles.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (32,'choux farcis','/images/choux farcis.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (33,'choux fleur','/images/choux fleur.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (34,'cinéma','/images/cinéma.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (35,'clémentines','/images/clémentines.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (36,'courir','/images/courir.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (37,'courses','/images/courses.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (38,'crème dessert','/images/crème dessert.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (39,'crêpes fromages','/images/crêpes fromages.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (40,'croque monsieur','/images/croque monsieur.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (41,'cuisiner','/images/cuisiner.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (42,'dentiste','/images/dentiste.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (43,'douche','/images/douche.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (44,'écouter musique','/images/écoute musique.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (45,'endives jambon ','/images/endives jambon.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (46,'epinards','/images/epinards.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (47,'equitation','/images/equitation.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (48,'espace connais sens','/images/espace connais sens.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (49,'essuyer les mains ','/images/essuyer les mains.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (50,'faché ','/images/faché.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (51,'faim','/images/faim.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (52,'faire mal ','/images/faire mal.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (53,'fini','/images/fini.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (54,'foulard','/images/foulard.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (55,'friand','/images/friand.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (56,'frites','images/frites/jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (57,'froid','images/froid.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (58,'froid','images/froid.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (59,'fromage blanc','images/fromage blanc.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (60,'fruits','images/fruits.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (61,'funerailles','images/funerailles.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (62,'gateau chocolat','images/gateau chocolat.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (63,'gateau yaourt','images/gateau yaourt.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (64,'glace','images/glace.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (65,'glaces','images/glaces.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (66,'grillades','images/grillades.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (67,'hamburger','images/hamburgerjpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (68,'haricots blancs','images/haricots blancs.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (69,'il n''y a pas','images/il n''y a pas.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (70,'infirmière','images/infirmière.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (71,'interdit','images/interdit.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (72,'j''aime pas','images/j''aime pas.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (73,'jambon blanc','images/jambon blanc.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (74,'jambon de pays','images/jambon de pays.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (75,'jeux seul','images/jeux seul.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (76,'je veux','images/je veux.jpg')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (77,'julienne','images/julienne.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (78,'la ferme','images/la ferme.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (79,'la messe','images/la messe.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (80,'lasagnes','images/lasagnes.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (81,'laver le visage','images/laver le visage.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (82,'le marché','images/le marché.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (83,'lentilles saucisses','images/lentilles saucisses.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (84,'maintenant','images/maintenant.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (85,'manger','images/manger.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (86,'manteau','images/manteau.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (87,'marcher','images/marcher.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (88,'masque','images/masque.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (89,'mauvais','images/mauvais.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (90,'mayonnaise','images/mayonnaise.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (91,'melon','images/melon.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (92,'menu','images/menu.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (93,'merci','images/merci.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (94,'mettre','images/mettre.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (95,'moi','images/moi.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (96,'monter','images/monter.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (97,'mort','images/mort.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (98,'moutarde','images/moutarde.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (99,'noel','images/noel.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (100,'oeufs','images/oeufs.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (101,'omelette','images/omelette.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (102,'ouvrir la bouche','images/ouvrir la bouche.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (103,'paella','images/paella.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (104,'pain de mie','images/pain de mie.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (105,'pastèque','iamges/pastèque.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (106,'pâté','images/pâté.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (107,'petite assiette','images/petite assiette.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (108,'petits pois','images/petits pois.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (109,'piscine','images/piscine.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (110,'pistolet','images/pistolet.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (111,'pizzeria','images/pizzeria.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (112,'pleurer','images/pleurer.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (113,'poireaux','images/poireaux.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (114,'pomme de terre','images/pomme de terre.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (115,'pot au feu','images/pot au feu.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (116,'prise de sang','images/prise de sang.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (117,'pruneaux','images/pruneaux.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (118,'psychologue','images/psychologue.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (119,'purée','images/purée.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (120,'quand','images/quand.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (121,'radis','images/radis.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (122,'raisin','images/raisin.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (123,'ranger','images/ranger.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (124,'rentrer à la maison','images/rentrer à la maison.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (125,'restaurant','images/restaurant.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (126,'riz au lait','images/riz au lait.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (127,'salade d''endives','images/salade d''endives.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (128,'salade de tomates','images/salade de tomates.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (129,'salade fruits','images/salade fruits.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (130,'s''allonger','images/s''allonger.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (131,'salsifis','images/salsifis.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (132,'sardines','images/sardines.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (133,'se brosser les dents','images/se brosser les dents.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (134,'se déshabiller','images/se déshabiller.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (135,'se doucher','images/se doucher.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (136,'se moucher','images/se moucher.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (137,'se peser','images/se peser.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (138,'se reposer','images/se reposer.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (139,'s''habiller','images/s''habiller.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (140,'sport collectif','images/sport collectif.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (141,'sport santé','images/sport santé.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (142,'steack','images/steack.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (143,'tablette','images/tablette.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (144,'tarte','images/tarte.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (145,'théatre','images/théatre.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (146,'théâtre','images/théâtre.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (147,'toilettes','images/toilettes.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (148,'tourte','images/tourte.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (149,'triste','images/triste.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (150,'vaccin','images/vaccin.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (151,'viande en sauce','images/viande en sauce.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (152,'vous','images/vous.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (153,'yaourts','images/yaourts.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (154,'zumba','images/zumba.JPG')");
    tx.executeSql("INSERT INTO pictures (picture_id,picture_name,picture_url) VALUES (155,'judo','images/judo.JPG')");

    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (2,'aliments')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (3,'actions')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (4,'activités')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (5,'hygiène')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (6,'santé')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (7,'sorties')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (8,'loisirs')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (9,'humeurs')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (10,'temps')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (11,'interdit')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (12,'intéractions')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (13,'sports')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (14,'lieux')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (15,'évènements')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (16,'objets')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (17,'habits')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (18,'gestes')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (19,'intéractions avec pros')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (20,'émotions')");
    tx.executeSql("INSERT INTO categories (category_id, category_name) VALUES (21,'états')");
}

function errorCB(tx, err)
{
    alert(err);
}

function successCB()
{
    alert("success!");
}

/**
 * Fonction événement, click pour intégrer une page html (form_html.html) à la page html par défaut index.html
 */

$('#admin').on("click", function(){

    // $('#display').append('<div id="mainForm"><form method="POST" action=""><div><legend id="legende">FORMULAIRE D\'INSERTION</legend></div><div class="form-group"><label for="image">1°) SÉLECTIONNER UNE IMAGE</label><input id="inputFile" type="file" accept=".jpg, .jpeg, .png, .svg" class="form-control-file" aria-describedby="fileHelp"></div><img src="" width="200" style="display:none;"/><div id="displayImagePath"></div><hr><div class="form-group"><label for="tag">2°) SÉLECTIONNER ET/OU CRÉER UN/PLUSIEURS TAGS</label><!-- formulaire select2 --><div><select id="selectTag" class="form-control" multiple="multiple"><option selected="selected" value="orange">Orange</option><option selected="selected" value="white">White</option><option selected="selected" value="brown">Brown</option><option selected="selected" value="purple">Purple</option><option selected="selected" value="grey">Grey</option><option selected="selected" value="black">Black</option><option selected="selected" value="yellow">Yellow</option></select></div><!-- <select class="form-control" id="insertTage"><option value="_">_</option><option value="tag 1">Tag 1</option><option value="tag 2">Tag 2</option><option value="tag 3">Tag 3</option><option value="tag 4">Tag 4</option><option value="tag 5">Tag 5</option></select><button class="btn btn-success" type="button">Insérer</button><input type="text" class="form-control" placeholder="insérer un tag" id="insertTagButton"><button class="btn btn-success" type="button">Insérer</button><textarea class="form-control" id="user_entry" rows="1" placeholder="Vos tags s\'affichent ici"></textarea> --></div><hr><div class="form-group"><label for="categorie">3°) SÉLECTIONNER ET/OU CRÉER UNE CATÉGORIE</label><!-- formulaire select2 --><div><select id="selectCategory" class="form-control" multiple="multiple"><option selected="selected" value="orange">Orange</option><option selected="selected" value="white">White</option><option selected="selected" value="brown">Brown</option><option selected="selected" value="purple">Purple</option><option selected="selected" value="grey">Grey</option><option selected="selected" value="black">Black</option><option selected="selected" value="yellow">Yellow</option></select></div><!-- <select class="form-control" id="insertCategory"><option value="_">_</option><option value="hygiene">Hygiène</option><option value="sante">Santé</option><option value="sport">Sport</option><option value="aliments">Aliments</option><option value="jeux">Jeux</option></select><button class="btn btn-success" type="button">Insérer</button><input type="text" class="form-control" placeholder="Insérer une catégorie" id="insertCategoryButton"><button class="btn btn-success" type="button">Insérer</button><textarea class="form-control" id="user_entry" rows="1" placeholder="Votre catégorie s\'affiche ici"></textarea> --></div><div><button id="confirmButton" type="submit" class="btn btn-success">Enregistrer</button></div></form></div>');
    // location.href="../form_html.html";

    /* 
    * vide la div qui accueille le iframe, avant de le remplir à nouveau, ceci pour éviter des iframes multiples 
    */
    $('#display').html("");

    /* 
    * Intégration d'un iframe dans la div #display du index.html 
    */

    // utiliser cette ligne pour le "cordova run android"
    $('#display').append('<iframe width="100%" height="600" sandbox="allow-scripts allow-forms allow-same-origin allow-modals" seamless src="file:///android_asset/www/form_html.html">Le navigateur n\'est pas compatible></iframe>');
    
    // utiliser cette ligne pour le "cordova run browser"
    //$('#display').append('<iframe width="100%" height="600" sandbox="allow-scripts" seamless src="../form_html.html">Le navigateur n\'est pas compatible></iframe>');

});


/**
 * Récupérer une image du gestionnaire de fichier de la tablette
 * Nécessite l'installation du plugin cordova camera : 
 * Dans le terminal :
 * $ cordova plugin add cordova-plugin-camera 
 */

function cameraGetPicture() {
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
        targetWidth: 100,
        targetHeight: 100
    });
    
    function onSuccess(imageURL) {
        var image = document.getElementById('myImage');
        image.src = imageURL;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    
}
/**
 * Fonction événenement, au click, ouverture du gestionnaire de fichiers local
 */

function onDeviceReady(){
    // window.requestFileSystem(LocalFileSystem.PERSISTENT, 1024*1024, successCB, errorHandler);
    console.log('c\'est ok');
    $("#inputFile").on("click", cameraGetPicture);
}

document.addEventListener('deviceready', onDeviceReady, false);
