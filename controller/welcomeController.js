const WelcomeService = require('../services/welcomeService')
const welcomeMessage = (req,res)=>{
    const welcomeMessage = new WelcomeService();
res.send(welcomeMessage.welcomeGreetings())
}
module.exports = {
    welcomeMessage
}