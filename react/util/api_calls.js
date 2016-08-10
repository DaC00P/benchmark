module.exports = {

  sendMethods(data, action, errorAction){
    $.ajax({
      url: "api/algos",
      type: "POST",
      data: {algos: data},
      dataType: 'json',
      success(resp){
        action(resp);
      },
      error(resp){
        errorAction(resp);
      }
    });
  }
};
