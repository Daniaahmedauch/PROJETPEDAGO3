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
    tx.executeSql('CREATE TABLE IF NOT EXISTS "pictures" ( `picture_id` INTEGER PRIMARY KEY AUTOINCREMENT, `picture_name` TEXT, `picture_url` TEXT, `created_at` TEXT, `updated_at` TEXT )');
    tx.executeSql('DROP TABLE IF EXISTS "pictures"');
    
    }


function errorCB(tx, err)
{
    alert("Error processing SQL: "+err);
}


function successCB()
{
    alert("success!");
}



