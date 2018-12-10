document.addEventListener('deviceready', start, false);


var db;



function start()
{
    db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
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
    tx.executeSql('SELECT * FROM DEMO;', [], function(tx, result){
        console.log('acces effectue');
        console.log(result.rows[0]);
    });
}




function populateDB(tx)
{
    tx.executeSql('DROP TABLE IF EXISTS DEMO');
    tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
}


function errorCB(tx, err)
{
    alert("Error processing SQL: "+err);
}


function successCB()
{
    alert("success!");
}