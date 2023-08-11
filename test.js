import { menu } from "../data.js";

$(function(){
    const id = getParamValueFromUrl('id');
    console.log('Id: ', id);

    const allBrandDetails = brandDetails;
    let detail = null;

    

    if(id != null) {
        detail = (allBrandDetails.filter(brand => brand.id == id))[0];

        console.log(detail);

        if(detail != undefined){
            totalPrice = detail.price;
            $("#breadcrumbCategory").append(`<a href="cars.html?id=${detail.categoryId}">${detail.brand}</a>`);
            $("#pageTitle").text(detail.name);
            $("#breadcrumbName").text(detail.name);
            $("#detailName").text(detail.name);
            $("#brandDescription").text(detail.description);
            $("#brandPrice").text(detail.price);
            $("#carPrice").text(detail.price);
            $("#accessoriesPrice").text(0);
            $("#totalPrice").text(detail.price);
            //$("#breadcrumbCategory").text(detail.brand);

            const image = `<img src="${detail.image}" class="img-fluid">`;
            $("#brandImage").append(image);

            const detailsTable = createDetailsTable(detail.details);

            $("#detailsTable").append(detailsTable);

            const accessoriesTable = createAccesoriesTable(detail.accessories);

            $("#accesoriesTable").append(accessoriesTable);
            
            $(".form-check-input").click(function(event){
                const accessoriesPrice = calculateAccessoriesPrice();
                $("#accessoriesPrice").text(accessoriesPrice);

                totalPrice = accessoriesPrice + detail.price;
                $("#totalPrice").text(totalPrice);
            })

            // $("#submit").click(function(event) {
                
            // });
        }
    }

    prepareForm();

})