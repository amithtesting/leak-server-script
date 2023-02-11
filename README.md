# leak-server-script
Use this script in conjuction with `ngrok` to simulate a leak server.

To install ngrok, use - 
```
brew install ngrok
```

To prepare this script for execution use - 
```
npm install
```

To run the server, run `npm start`, and in another window, run `ngrok http 3000`.

To see an example of a leak output, run -
```
curl "http://<ADDRESS-SHOWN-IN-NGROK>?hello=world"
```

You should see the following output - 
```
> leak-server-script@1.0.0 start
> node index.js

Leak web server listening on port 3000
[11/Feb/2023:15:13:59 +0000] GET /?hello=world HTTP/1.1
Query parameters - {"hello":"world"}
```

Happy hunting!
