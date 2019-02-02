
const app = require('express')()

app.get('/name',(req,res)=>res.send('mregydev'))

app.get('/age',(res,res)=>res.send("12"))

//this is the decroator function
function endpoint(options) {

    //this is the decorator function
    return (target) => {

        let { verb, url } = options

        app[verb].apply(app, [url, (req, res) => res.send(target.descriptor.value.apply())])
    }
}



class StudentController {

    //function for name endpoint
    @action({ verb: "get", url: "/name" })
    getName() {
        return "mregydev"
    }

    //function for age endpoint
    @action({ verb: "get", url: "/age" })
    getAge() {
        return "12"
    }
}


app.listen(8080)

console.log("service is listening")