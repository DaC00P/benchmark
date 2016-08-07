module.exports = {

  sendMethods(data, action){
    $.ajax({
      url: "api/algos",
      type: "POST",
      data: {algos: data},
      dataType: 'json',
      success(resp){
        action(resp);
      }
    });
  }
};
