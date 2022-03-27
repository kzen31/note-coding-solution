// 1. add new key value in javascript Object:
var obj = {
    key1: value1,
    key2: value2
};

// solution
obj.key3 = "value3"; // or
obj["key3"] = "value3";


// 2. Get query param HAPI JS
// want to get query param value of "nama" >>> /api?nama={example}

// solution
server.route({
    method: "GET",
    path: "/api",
    handler: function(request, h) {
      var namaQuery = request.query.nama;
    }
})

// 3. force migrate HAPI JS
//   npm run migrate up --no-check-order
//   npm run migrate down --no-check-order