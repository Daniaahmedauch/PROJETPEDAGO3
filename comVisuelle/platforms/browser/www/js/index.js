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
        console.log(result.rows[0]);
    });
}




function populateDB(tx)
{
    tx.executeSql('DROP TABLE IF EXISTS to_belong');
    tx.executeSql('CREATE TABLE IF NOT EXISTS "to_belong" ( CREATE TABLE "to_belong" ( `fk_picture` INTEGER, `fk_category` INTEGER, FOREIGN KEY(`fk_picture`) REFERENCES `pictures`(`picture_id`), FOREIGN KEY(`fk_category`) REFERENCES `categories`(`category_id`) )');
    // tx.executeSql('INSERT INTO categories (category_id, category_name) VALUES (1, "aliments")');
    // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
}


function errorCB(tx, err)
{
    alert("Error processing SQL: "+err);
}


function successCB()
{
    alert("success!");
}



