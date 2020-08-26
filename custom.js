"use stirct"

$(".image").click(function (e) { 
    // herhangi bir (img) elementine basarsa işleme başlar
    e.preventDefault();

    $(".overlay").fadeIn();
    
    $(".image-view").fadeIn("fast");
    // image-view class'ına sahip elementi görünür yapıyor.

    var img_url = $(this).attr("src");
    // click olduktan sonra img.src içindeki linki getirip depoluyor.

    var image_view = $(".image-view img");
    //  kısayol olsun diye değişken içine atadım. 

    var index_element = $(this).index();
    // click olan elementin dizideki sırasını getiriyor. 

    var length_element = $(".image").length -1;
    //  image class'ına sahip elementin sayısını döndürüyor. 
    //  sonra 1 eksiltip depoluyor ilerde lazım olacak.

    var new_img_url;
    //  bir önceki veya bir sonraki fotoğrafa geçişi 
    //  için yeni linki depolamak için.

    image_view.attr('src',img_url);
    //  ve fotoğrafı pencerede açıyor.
    
    $(".btn[target=left").click(function (e) { 
        //  class'ı .btn olup target'i left olan 
        //  buton tıklanınca
        if(index_element <= 0){
            //  buga girmesin diye koşul ekledim geri geri 
            //  gidince 0'ın altına iniyordu onun önüne geçiyor.
            index_element = 0;
            // koşulu karşılıyorsa 0'da durduruyor
        }else{
            index_element -= 1 ;
            //  dizideki elementin sırası 1 azaltarak gidiyor 
            //  misal indexi 5 olan bir fotoğraf var geri gitmeye çalışınca 
            //  2x kez basılması gerek önüne geçmek için 1 eksilttim.

            new_img_url = $(".image:eq("+ index_element +")").attr('src');
            //  yukarda tanımını yaptım. burda da geçilmek 
            //  istenen fotoğrafın linkini alıp depoluyorum. 
            
            image_view.attr("src",new_img_url);
            //  ve sonuç.
        }
    });
    /* 
        left.buttonunda yapılanların benzeri
    */
    $(".btn[target=right").click(function (e) {

        if(index_element >= length_element){

            index_element = length_element;

        }else{

            index_element += 1 ;

            new_img_url = $(".image:eq("+ index_element +")").attr('src');

            image_view.attr("src",new_img_url);
        }
    });
});

$(".close-x").click(function (e) { 
    
    e.preventDefault();

    $(".image-view").removeClass("fullscreen");
    //  fullscreen sınıfını kaldırıyor nedeni eğer fotoğrafı 
    //  tamamen büyütüp kapadıysa fullscreen sınıfı kalıyor 
    //  yeni bir fotoğraf açıldığında büyük bir şekilde açılıyor.

    $(".image-view").fadeOut("fast");

    $(".overlay").fadeOut();
});

$(".mode").click(function (e) { 
    //  düzen seçer
    //  sm,md,lg,xl-lg
    e.preventDefault();

    var class_name = $(this).attr('data-target');

    $(".image").attr("class","image");

    $(".image").addClass(class_name);

});

$(".fullscreen").click(function (e) { 

    e.preventDefault();

    $(this).fadeOut("fast");

    $(".halfscreen").fadeIn("fast");

    $(".image-view").addClass("fullscreen");

    $(".arrow-btn").fadeOut();

});
$(".halfscreen").click(function (e) { 

    e.preventDefault();

    $(this).fadeOut("fast");

    $(".arrow-btn").fadeIn();

    $(".fullscreen").fadeIn("fast");

    $(".image-view").removeClass("fullscreen");

});

$(".overlay").click(function (e) { 
    e.preventDefault();

    $(".image-view").removeClass("fullscreen");
    
    $(this).fadeOut();
    
    $(".image-view").fadeOut("fast");
    
});
