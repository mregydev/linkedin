
const app = require('express')()


//this is the decroator function
function action(options) {

    return (target) => {

        let { verb, url } = options

        app[verb].apply(app, [url, (req, res) => res.send(target.descriptor.value.apply())])
    }
}



class StudentController {

    @action({ verb: "get", url: "/name" })
    getName() {
        return "mregydev"
    }


    @action({ verb: "get", url: "/age" })
    getAge() {
        return "12"
    }


}


app.listen(8080)

console.log("service is listening")