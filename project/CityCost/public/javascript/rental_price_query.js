$(document).ready(() => {
    //set a listener on textbox
    $('#input').on("click", (evt) => {

        let text = $('#myInput').val();
        let weeks = $('#weeks').val();

        let car = $('#car:checked').val();

        let housing = $('#housing:checked').val();


        //the {text:text} sends a parameter named text with the
        $.get('/apiCaller', {text:text,weeks:weeks,car:car,housing:housing})
            .done((data) => {

                output= data.result;//"<br>"+data['result'].studio+"<br>"+data['result'].one_bedroom+"<br>"+data['result'].two_bedroom+"<br>"+data['result'].three_bedroom+"<br>"+data['result'].all_homes+"<br>"+data['result'].walkscore
                $('#rental_prices').prepend('<br><h4 id = "newest">'+text+'</h4>'+output+'</li>');
                document.getElementById('newest').scrollIntoView();
                //$('#myInput').val('');

            })
            .fail((xhr) => {
                alert('Problem contacting server');
                console.log(xhr);
            });
    });

});