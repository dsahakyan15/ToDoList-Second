// AIzaSyDgnqFWIo0Cr7wo-cvmwBUR6cRmT6s9l1I

const URL = 'https://tasks.googleapis.com'

class APIService{
    constructor(){

    }

    async Push(){
        let promise = fetch('https://tasks.googleapis.com/tasks/v1/users/@me/lists/{tasklist}',{
            method:'GET'
        })

    }
    
}