$("#add_type_machine").submit(function (event){
    alert("Data inserted")
});

$("#add_machine").submit(function (event){
    alert("Data inserted")
});


$("#update_type_machine").submit(function (event){
    event.preventDefault();

    let unindexedArray = $(this).serializeArray();
    let data = {};
    $.map(unindexedArray, function (n,i){
        data[n['name']] = n['value']
    })

    let request = {
        'url': 'http://localhost:3000/api/type-machine/' + data.id,
        "method": 'PUT',
        "data": data
    }
    $.ajax(request).done(function (response){
        alert("You have updated a row");
    })
});

$("#update_machine").submit(function (event){
    event.preventDefault();

    let unindexedArray = $(this).serializeArray();
    let data = {};
    $.map(unindexedArray, function (n,i){
        data[n['name']] = n['value']
    })

    let request = {
        'url': 'http://localhost:3000/api/machine/' + data.id,
        "method": 'PUT',
        "data": data
    }
    $.ajax(request).done(function (response){
        alert("You have updated a row");
    })
});

if(window.location.pathname == '/type-machine'){
    $ondelete = $("table tbody td a.delete");
    $ondelete.click(function (){
        var id = $(this).attr("data-id")

        let request = {
            'url': 'http://localhost:3000/api/type-machine/' + id,
            "method": 'DELETE'
        }

        if(confirm("Do you really want to delete this row?")){
            $.ajax(request).done(function (response){
                alert("You have deleted a row");
                location.reload()
            })
        }
    })
}

if(window.location.pathname == '/machine'){
    $ondelete = $("table tbody td a.delete-machine");
    $ondelete.click(function (){
        var id = $(this).attr("data-id")

        let request = {
            'url': 'http://localhost:3000/api/machine/' + id,
            "method": 'DELETE'
        }

        if(confirm("Do you really want to delete this row?")){
            $.ajax(request).done(function (response){
                alert("You have deleted a row");
                location.reload()
            })
        }
    })
}
