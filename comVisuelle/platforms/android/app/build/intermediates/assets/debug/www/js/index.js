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
    tx.executeSql('SELECT * FROM categories;', [], function(tx, result)
    {
        console.log('acces effectue');
        console.log(result.rows[0]);
    });
}




function populateDB(tx)
{
    tx.executeSql('DROP TABLE IF EXISTS "pictures"');
    tx.executeSql('CREATE TABLE "pictures" ( `picture_id` INTEGER PRIMARY KEY AUTOINCREMENT, `picture_name` TEXT, `picture_url` TEXT, `created_at` TEXT, `updated_at` TEXT )');

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



