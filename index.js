let express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const uppy = require("uppy-server");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

//initialize uppy
function initUppy() {
    uppyOptions = {
        providerOptions: {
            google: {
                key: "your google client id/key",
                secret: "your google client secret"
            },
            dropbox: {
                key: "your Dropbox client id/key",
                secret: "your Dropbox client secret"
            },
            s3: {
                key: "Your S3 key",
                secret: "Your S3 secret",
                bucket: "Your S3 bucket url",//e.g. mybucket123
                region: "Your S3 region "// e.g. ap-south-1 they skipped this one in their official doc. Don't forget to pass this.
            }
        },
        server: {
            host: "localhost:5000",//your host. could be yoursite.com
            protocol: "http"//your protocol. http or https.
        },
        filePath: "./downloads",//filepath to store users' temporary files, before uploading them.
        secret: "some-secret",//could be any string.
        debug: false//set true to recieve uppy logs.
    };

    app.use(uppy.app(uppyOptions));//instantiate uppy server.
    uppy.socket(app.listen(PORT), uppyOptions);//move your app.listen here.
}
initUppy();//run uppy instantiation function

module.exports = app;
