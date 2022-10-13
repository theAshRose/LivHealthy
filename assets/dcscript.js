$("#food-search-results").on("click", ".btn-small", function(event){
    // event.preventDefault();
    alert("working")
    console.log($(event.target).closest(".col").attr("id"));
    // let foodDataArray = {
    //     title: event.target.parent().
    // }
  })
  
  ///////end off dynamically generated cards//