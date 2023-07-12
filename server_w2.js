// ------------------------------------------- TALLER 2 - NODE JS - MODULO GLOBAL HTTP Y FS ------------------------------------------- //

// 1. IMPORTACION DE LOS MODULOS GLOBALES //
const http = require('http'); 
const fs = require('fs');

// 2. CREACION DEL SERVIDOR //
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;


    // 3. ROUTING // 
    // 3.1. Rout 0 -> "/ventartemis"
    if(url === '/ventartemis'){
        res.write('<html>');
        res.write('<head><title>Ventartemis</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></head>');
        res.write('<body class="d-flex flex-column align-items-center">');
        res.write('<h1>VENTARTEMIS</h1>');
        res.write('<h5>Las mejores ventas de todo el pais</h5>');
        res.write('<a href="/ventartemis" class="btn btn-info" class="btn btn-info">HOME</a><br>');
        res.write('<form action="/" method="POST"><button class="btn btn-warning">ARTEMIS LANDS</button></form><br>');
        res.write('<a href="/users" class="btn btn-success">USERS</a><br>');
        res.write('<a href="/categories" class="btn btn-warning">CATEGORIES</a><br>');
        res.write('<a href="/products" class="btn btn-success">PRODUCTS</a><br>');
        res.write('<a href="/employees" class="btn btn-warning">EMPLOYEES</a><br>');
        res.write('<a href="/customers" class="btn btn-success">CUSTOMENRS</a><br>');
        res.write('<a href="/sales" class="btn btn-warning">SALES</a><br>');
        res.write('<a href="/shopping" class="btn btn-success">SHOPPING</a><br>');
        res.write('</body>');
        res.write('</html>');
    }

    
    // 3.2. Rout 1 -> "/"
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Ventartemis</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></head>');
        res.write('<body class="d-flex flex-column align-items-center">');
        res.write('<h1>VENTARTEMIS</h1>');
        res.write('<a href="/ventartemis" class="btn btn-info">HOME</a>');
        res.write('<h3>Informacion de la empresa</h3>');
        res.write('<p>Nombre: ARTEMIS LANDS</p>');
        res.write('<p>Telefono: 312 390 9829 </p>');
        res.write('<p>Direccion: Edificio Zenit, Piso 6, Zona Franca, Floridablanca, Santander </p>');
        res.write('<p>Co-fundador: Andres Lizarazo Mendoza </p>'); 
        res.write('<p>Co-fundador: Diego Toloza </p>'); 
        res.write('</body>');
        res.write('</html>');
    }

    // 6. CREACION DE UN ARCHIVO CUANDO HAYA REQUEST DE "/" // 
    if(url === '/' && method === 'POST'){
        fs.writeFileSync('data.txt', 'Informacion de la empresa = Nombre: ARTEMIS LANDS; Telefono: 312 390 9829; Direccion: Edificio Zenit, Piso 6, Zona Franca, Floridablanca, Santander; Co-fundador: Andres Lizarazo Mendoza; Co-fundador: Diego Toloza  ');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    // 3.3. Rout 2 -> "/users"
    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>Ventartemis</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></head>');
        res.write('<body class="d-flex flex-column align-items-center">');
        res.write('<h1>VENTARTEMIS</h1>');
        res.write('<a href="/ventartemis" class="btn btn-info">HOME</a>');
        res.write('<h2>Usuarios</h2>');
        res.write('<p> 1. Jose Arley Pabon Celis</p>');
        res.write('<p> 2. Jessyca Yulianna Avila Almeida </p>');
        res.write('<p> 3. Jeimy Natalia Avila Almeida </p>');
        res.write('<p> 4. Zhair Jose Arias Caballero </p>');
        res.write('<p> 5. Jhon Anderson Guerrero Amado </p>');
        res.write('<p> 6. Libia Mejia Noguera  </p>');
        res.write('<p> 7. Nelsy Celis Suarez </p>');
        res.write('<p> 8. Silvia Juliana Suarez Celis  </p>');
        res.write('<p> 9. Diego Andres Chapeta Pabon  </p>');
        res.write('<p> 10. Amparo Pabon Pabon </p>');
        res.write('</body>');
        res.write('</html>');
    }
    
    // 3.4. Rout 3 -> "/categories"
    if(url === '/categories'){
        res.write('<html>');
        res.write('<head><title>Ventartemis</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></head>');
        res.write('<body class="d-flex flex-column align-items-center">');
        res.write('<h1>VENTARTEMIS</h1>');
        res.write('<a href="/ventartemis" class="btn btn-info">HOME</a>');
        res.write('<h2>Categorias</h2>');
        res.write('<table style="width: 50%;border: 1px solid #000;">');
        res.write('<thead>');
        res.write('<tr><th style="border: 1px solid #000; text-align: center; width: 25%; border-spacing: 0;">Categoria</th><th style="border: 1px solid #000; text-align: center; width: 25%; border-spacing: 0;">Cantidad de productos</th><th style="border: 1px solid #000; text-align: center; width: 25%; border-spacing: 0;">Inversion (COP)</th><th style="border: 1px solid #000; text-align: center; width: 25%; border-spacing: 0;">Productos vendidos</th></tr>');
        res.write('</thead>');
        res.write('<tbody>');
        res.write('<tr><td style="border: 1px solid #000; text-align: center;  width: 25%; border-spacing: 0;">Verduras</td><td style="border: 1px solid #000; text-align: center;  width: 25%; border-spacing: 0;">30</td><td style="border: 1px solid #000; text-align: center;  width: 25%; border-spacing: 0;">5.000.000</td><td style="border: 1px solid #000; text-align: center;  width: 25%; border-spacing: 0;">18</td></tr>');
        res.write('<tr><td style="border: 1px solid #000; text-align: center;  width: 25%; border-spacing: 0;">Utiles de aseo</td><td style="border: 1px solid #000; text-align: center;  width: 25%; border-spacing: 0;">100</td><td style="border: 1px solid #000; text-align: center;  width: 25%; border-spacing: 0;">20.000.000</td><td style="border: 1px solid #000; text-align: center;  width: 25%; border-spacing: 0;">62</td></tr>');
        res.write('<tr><td style="border: 1px solid #000; text-align: center;  width: 25%; border-spacing: 0;">Enlatados</td><td style="border: 1px solid #000; text-align: center;  width: 25%; border-spacing: 0;">15</td><td style="border: 1px solid #000; text-align: center;  width: 25%; border-spacing: 0;">650.000</td><td style="border: 1px solid #000; text-align: center;  width: 25%; border-spacing: 0;">8</td></tr>');
        res.write('</tbody>');
        res.write('</table>');
        res.write('</body>');
        res.write('</html>');
    }

    // 3.5. Rout 4 -> "/products"
    if(url === '/products'){
        res.write('<html>');
        res.write('<head><title>Ventartemis</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></head>');
        res.write('<body class="d-flex flex-column align-items-center">');
        res.write('<h1>VENTARTEMIS</h1>');
        res.write('<a href="/ventartemis" class="btn btn-info">HOME</a>');
        res.write('<h2>Productos</h2>');
        res.write('</body>');
        res.write('</html>');
    }

    // 3.6. Rout 5 -> "/employees"
    if(url === '/employees'){
        res.write('<html>');
        res.write('<head><title>Ventartemis</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></head>');
        res.write('<body class="d-flex flex-column align-items-center">');
        res.write('<h1>VENTARTEMIS</h1>');
        res.write('<a href="/ventartemis" class="btn btn-info">HOME</a>');
        res.write('<h2>Empleados</h2>');
        res.write('</body>');
        res.write('</html>');
    }

    // 3.7. Rout 6 -> "/customers"
    if(url === '/customers'){
        res.write('<html>');
        res.write('<head><title>Ventartemis</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></head>');
        res.write('<body class="d-flex flex-column align-items-center">');
        res.write('<h1>VENTARTEMIS</h1>');
        res.write('<a href="/ventartemis" class="btn btn-info">HOME</a>');
        res.write('<h2>Clientes</h2>');
        res.write('<form action="/create-customer" method="POST" class="row"><div class="col-md-20 d-flex flex-column align-items-center"><div class="form-floating mb-3 border border-primary border-5 rounded"><input type="text" class="form-control" id="nombreCliente" placeholder="Digite el nombre completo"><label for="nombreCliente">Nombre Cliente</label></div><div class="form-floating mb-3 border border-primary border-5 rounded"><input type="number" class="form-control" id="documento" placeholder="Documento de identidad"><label for="documento">Documento de identidad</label></div><div class="form-floating mb-3 border border-primary border-5 rounded "><input type="number" class="form-control" id="edad" placeholder="edad"><label for="edad">Edad</label></div><div class="form-floating mb-3 border border-primary border-5 rounded"><input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"><label for="floatingInput">Email address</label></div><button type="submit" class="form-floating mb-3 btn btn-info border border-5 rounded">Agregar Nuevo Cliente</button></div></form>');
        res.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>')
        res.write('</body>');
        res.write('</html>');
    }

        // 3.7.1 Rout 6.1 -> "/create-customer"
        if(url === '/create-customer'){
            res.write('<html>');
            res.write('<head><title>Ventartemis</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></head>');
            res.write('<body class="d-flex flex-column align-items-center">');
            res.write('<h1>VENTARTEMIS</h1>');
            res.write('<a href="/ventartemis" class="btn btn-info">HOME</a>');
            res.write('<h2>Cliente agregado satisfactotiamente</h2>');
            res.write('</body>');
            res.write('</html>');
        }


    // 5. CREACION DE UN ARCHIVO CUANDO HAYA REQUEST DE "/customers" // 
    if(url === '/create-customer' && method === 'POST'){
        fs.writeFileSync('new_customer.txt', 'Nuevo Cliente Agregado Satisfactoriamente');
        res.statusCode = 302;
        res.setHeader('Location', '/customers');
        return res.end();
    }

    // 3.8. Rout 7 -> "/sales"
    if(url === '/sales'){
        res.write('<html>');
        res.write('<head><title>Ventartemis</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></head>');
        res.write('<body class="d-flex flex-column align-items-center">');
        res.write('<h1>VENTARTEMIS</h1>');
        res.write('<a href="/ventartemis" class="btn btn-info">HOME</a>');
        res.write('<h2>Ofertas</h2>');
        res.write('</body>');
        res.write('</html>');
    }

    // 3.9. Rout 8 -> "/shopping"
    if(url === '/shopping'){
        res.write('<html>');
        res.write('<head><title>Ventartemis</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></head>');
        res.write('<body class="d-flex flex-column align-items-center">');
        res.write('<h1>VENTARTEMIS</h1>');
        res.write('<a href="/ventartemis" class="btn btn-info">HOME</a>');
        res.write('<h2>Nuestra Tienda</h2>');
        res.write('</body>');
        res.write('</html>');
    }

})

// 4. PUERTO POR EL QUE LLEGA LA REQ
server.listen(8000);


