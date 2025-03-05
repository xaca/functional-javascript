function getShortMessages(messages) {
    // SOLUTION GOES HERE
    let respuesta = messages.map(function(message){
        return message.message;
    }).filter(function(message){
        return message.length<50;
    });
    return respuesta;
  }

  //getShortMessages([{message: 'Tempor quis esse consequat sunt ea eiusmod.'},{message: 'Id culpa ad proident ad nulla laborum in nostrud.'},{message: 'Ullamco in ea et ad anim anim ullamco est.'}]);

  module.exports = getShortMessages