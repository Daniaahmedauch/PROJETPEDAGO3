// reset application on startup STANDBY !
//  function resetForm()
//     {
//     document.getElementById('#user_entry').reset();
// }
//
// resetForm();

// display and creation of tags in the same input
$('#selectTag').select2(
    {
    placeholder: "Sélectionner / saisir un tag",
    tags: true,
    tokenSeparators: [',', ' ']
});

// display and creation of categories in the same input
$('#selectCategory').select2(
    {
    placeholder: "Sélectionner / saisir une catégorie",
    tags: true,
    tokenSeparators: [',', ' ']
});

// display images on the console
$("#insertImagegit pu").on("select2:select", function (e)
    { 
    var select_value_tag = $(e.currentTarget).val();
    console.log(select_value_tag)
});

// display tags on the console
$("#selectTag").on("select2:select", function (e)
    { 
    var select_value_tag = $(e.currentTarget).val();
    console.log(select_value_tag)
});

// display categories on the console
$("#selectCategory").on("select2:select", function (e)
    { 
    var select_value_category = $(e.currentTarget).val();
    console.log(select_value_category)
});