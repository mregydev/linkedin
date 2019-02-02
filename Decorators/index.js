
const app = require('express')()

//this is the decroator function
function endpoint(options) {

    //this is the decorator function
    return (target, name, descriptor) => {

        let { verb, url } = options

        app[verb].apply(app, [url, (req, res) => res.send(descriptor.value.apply())])
    }
}


class StudentController {

    //function for name endpoint
    @endpoint({ verb: "get", url: "/name" })
    getName() {
        return "mregydev"
    }

    //function for age endpoint
    @endpoint({ verb: "get", url: "/age" })
    getAge() {
        return "12"
    }
}


app.listen(8080)

