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

    tx.executeSql('CREATE TABLE IF NOT EXISTS "categories" ( `category_id` INTEGER PRIMARY KEY AUTOINCREMENT, `category_name` TEXT)');

    tx.executeSql('INSERT INTO `categories` VALUES (2,'aliments','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (3,'actions','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (4,'activités','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (5,'hygiène','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (6,'santé','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (7,'sorties','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (8,'loisirs','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (9,'humeurs','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (10,'temps','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (11,'interdit','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (12,'intéractions','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (13,'sports','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (14,'lieux','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (15,'évènements','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (16,'objets','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (17,'habits','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (18,'gestes','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (19,'intéractions avec pros','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (20,'émotions','','')');
    tx.executeSql('INSERT INTO `categories` VALUES (21,'états','','')');
}


function errorCB(tx, err)
{
    alert("Error processing SQL: "+err);
}


function successCB()
{
    alert("success!");
}



