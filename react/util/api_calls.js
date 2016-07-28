module.exports = {

  sendMethods(data, action){
    $.ajax({
      url: "api/algos",
      type: "POST",
      data: {algos: data},
      dataType: 'json',
      success(resp){
        console.log(resp);
        action(resp);
      }
    });
  }
};
