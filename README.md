# donato
Backend for Cooking Recipes solution

## Use examples

### Get all recipes
curl --location --request GET 'localhost:3000/recipes'

GET /recipes HTTP/1.1
User-Agent: PostmanRuntime/7.26.5
Accept: */*
Postman-Token: 27f2d7f1-88f7-421a-9817-f1db9af2bf4c
Host: localhost:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 4215
ETag: W/"1077-dLvJepcGcEWjwC9wJnUsSdKTHY8"
Date: Fri, 13 Nov 2020 19:22:31 GMT
Connection: keep-alive
[{"id":1,"name":"Pollo asado en calabaza","description":"Pollo asado en calabaza","punctuation":{"values":[3,4,1,5,5,3,5,5],"average":3.875},"ingredients":[{"name":"Pollo","quantity":1,"measure":"unidad"},{"name":"Calabaza redonda","quantity":1,"measure":"unidad"},{"name":"Cebolla","quantity":2,"measure":"unidad"},{"name":"Cabeza de Ajo","quantity":1,"measure":"unidad"},{"name":"Boniato","quantity":1,"measure":"unidad"},{"name":"Jugo de Naranja","quantity":0.5,"measure":"lts"},{"name":"Manteca","quantity":50,"measure":"grs"},{"name":"Pimienta","measure":"a gusto"},{"name":"Sal","measure":"a gusto"}],"steps":[{"order":0,"description":"Mezclamos en un bol la cúrcuma, el ajo en polvo, jengibre en polvo y pimienta negra. Añadimos un poco de agua y mezclamos hasta formar una pasta."},{"order":1,"description":"Salamos el pollo y lo embadurnamos con la pasta. Reservamos en nevera."},{"order":2,"description":"Pelamos y abrimos la calabaza. Retiramos las pipas y la dejamos vacía por dentro. Reservamos la “tapa”."},{"order":3,"description":"Metemos el pollo dentro de la calabaza. Tapamos y horneamos durante 40 minutos a 180ºC."},{"order":4,"description":"Para la guarnición: Cortamos el boniato en dados (con piel). Cortamos la cebolla del mismo tamaño y pelamos y cortamos los dientes de ajo también. Lo disponemos todo en una bandeja con aceite de oliva y lo horneamos junto a la calabaza los últimos 30 minutos de cocción."},{"order":5,"description":"Para la salsa: Vertemos en un cazo el zumo de naranja y vamos cocinando hasta que reduzca."},{"order":6,"description":"Añadimos un poco de mantequilla a la salsa y cocinamos hasta que ligue bien. Lo pasamos todo por la batidora hasta que quede bien fino. Pintamos el pollo con la salsa y lo acompañamos con el puré de calabaza y con la guarnición horneada."},{"order":7,"description":"Acabamos con sal en escamas y pimienta."}],"servings":4},{"id":2,"name":"Ceviche de calamar con maracuyá","description":"Ceviche de calamar con maracuyá","punctuation":{"values":[3,4,4,5,5],"average":4.2},"ingredients":[{"name":"Calamar","quantity":1,"measure":"unidad"},{"name":"Cebolla roja","quantity":1,"measure":"unidad"},{"name":"Cilantro","quantity":1,"measure":"manojo"},{"name":"Pimiento amarillo","quantity":1,"measure":"unidad"},{"name":"Maracuyá","quantity":4,"measure":"piezas"},{"name":"Lima","quantity":4,"measure":"unidad"},{"name":"Maiz tostado picante","measure":"a gusto"}],"steps":[{"order":0,"description":"Despepitamos la maracuyá y presionamos para quedarnos con todo su jugo. Exprimimos también la lima. Mezclamos ambos zumos."},{"order":1,"description":"Limpiamos el calamar, lo cortamos en dados y lo escaldamos (reservamos las aletas)."},{"order":2,"description":"Para la leche de tigre: Metemos las aletas de calamar en un vaso túrmix con la cebolla, el ají y el cilantro. Turbinamos y colamos."},{"order":3,"description":"Lo mezclamos con unas cucharadas de la mezcla de maracuyá y lima. Al gusto."},{"order":4,"description":"Tenemos unas limas congeladas, las partimos en dos y vaciamos la pulpa (que quede en forma de cuenco)."},{"order":5,"description":"Cortamos la cebolla y la maceramos en un bol con la leche de tigre. Lo mismo con los dados de calamar."},{"order":6,"description":"Emplatado: Rellenamos las medias limas con los dados de calamar, la leche de tigre y el cilantro y el ají picados. Acabamos con un poco de cebolla morada y el maíz picante."}],"servings":2},{"id":3,"name":"Sandwich de queso y membrillo","description":"Triangulos de queso y membrillo regados con oregano y tomillo","punctuation":{"values":[3,4,1],"average":2.66},"ingredients":[{"name":"Queso semicurado","quantity":2,"measure":"laminas"},{"name":"Membrillo","quantity":1,"measure":"lamina"},{"name":"Oregano","measure":"cantidad necesaria"}],"steps":[{"order":0,"description":"Disponemos el membrillo entre las láminas de queso como si fuera un sándwich. Partimos por la mitad de tal manera que quede de forma triangular."},{"order":1,"description":"Los disponemos en un plato al gusto, aliñamos con aceite de oliva virgen extra y condimentamos con orégano fresco y un poco de tomillo limón al gusto."}],"servings":2}]


### Get recipes by search criteria

curl --location --request GET 'localhost:3000/recipes?search_text=cebolla&fields=name,description,puntuation'

GET /recipes?search_text=cebolla HTTP/1.1
User-Agent: PostmanRuntime/7.26.5
Accept: */*
Postman-Token: b4e53e37-ecfc-478f-8503-b3db79478c5e
Host: localhost:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 3481
ETag: W/"d99-1dinI4R6bJMwz52t941Hwns/sVg"
Date: Fri, 13 Nov 2020 19:24:01 GMT
Connection: keep-alive
[{"id":1,"name":"Pollo asado en calabaza","description":"Pollo asado en calabaza","punctuation":{"values":[3,4,1,5,5,3,5,5],"average":3.875},"ingredients":[{"name":"Pollo","quantity":1,"measure":"unidad"},{"name":"Calabaza redonda","quantity":1,"measure":"unidad"},{"name":"Cebolla","quantity":2,"measure":"unidad"},{"name":"Cabeza de Ajo","quantity":1,"measure":"unidad"},{"name":"Boniato","quantity":1,"measure":"unidad"},{"name":"Jugo de Naranja","quantity":0.5,"measure":"lts"},{"name":"Manteca","quantity":50,"measure":"grs"},{"name":"Pimienta","measure":"a gusto"},{"name":"Sal","measure":"a gusto"}],"steps":[{"order":0,"description":"Mezclamos en un bol la cúrcuma, el ajo en polvo, jengibre en polvo y pimienta negra. Añadimos un poco de agua y mezclamos hasta formar una pasta."},{"order":1,"description":"Salamos el pollo y lo embadurnamos con la pasta. Reservamos en nevera."},{"order":2,"description":"Pelamos y abrimos la calabaza. Retiramos las pipas y la dejamos vacía por dentro. Reservamos la “tapa”."},{"order":3,"description":"Metemos el pollo dentro de la calabaza. Tapamos y horneamos durante 40 minutos a 180ºC."},{"order":4,"description":"Para la guarnición: Cortamos el boniato en dados (con piel). Cortamos la cebolla del mismo tamaño y pelamos y cortamos los dientes de ajo también. Lo disponemos todo en una bandeja con aceite de oliva y lo horneamos junto a la calabaza los últimos 30 minutos de cocción."},{"order":5,"description":"Para la salsa: Vertemos en un cazo el zumo de naranja y vamos cocinando hasta que reduzca."},{"order":6,"description":"Añadimos un poco de mantequilla a la salsa y cocinamos hasta que ligue bien. Lo pasamos todo por la batidora hasta que quede bien fino. Pintamos el pollo con la salsa y lo acompañamos con el puré de calabaza y con la guarnición horneada."},{"order":7,"description":"Acabamos con sal en escamas y pimienta."}],"servings":4},{"id":2,"name":"Ceviche de calamar con maracuyá","description":"Ceviche de calamar con maracuyá","punctuation":{"values":[3,4,4,5,5],"average":4.2},"ingredients":[{"name":"Calamar","quantity":1,"measure":"unidad"},{"name":"Cebolla roja","quantity":1,"measure":"unidad"},{"name":"Cilantro","quantity":1,"measure":"manojo"},{"name":"Pimiento amarillo","quantity":1,"measure":"unidad"},{"name":"Maracuyá","quantity":4,"measure":"piezas"},{"name":"Lima","quantity":4,"measure":"unidad"},{"name":"Maiz tostado picante","measure":"a gusto"}],"steps":[{"order":0,"description":"Despepitamos la maracuyá y presionamos para quedarnos con todo su jugo. Exprimimos también la lima. Mezclamos ambos zumos."},{"order":1,"description":"Limpiamos el calamar, lo cortamos en dados y lo escaldamos (reservamos las aletas)."},{"order":2,"description":"Para la leche de tigre: Metemos las aletas de calamar en un vaso túrmix con la cebolla, el ají y el cilantro. Turbinamos y colamos."},{"order":3,"description":"Lo mezclamos con unas cucharadas de la mezcla de maracuyá y lima. Al gusto."},{"order":4,"description":"Tenemos unas limas congeladas, las partimos en dos y vaciamos la pulpa (que quede en forma de cuenco)."},{"order":5,"description":"Cortamos la cebolla y la maceramos en un bol con la leche de tigre. Lo mismo con los dados de calamar."},{"order":6,"description":"Emplatado: Rellenamos las medias limas con los dados de calamar, la leche de tigre y el cilantro y el ají picados. Acabamos con un poco de cebolla morada y el maíz picante."}],"servings":2}]

### Get recipe by id

curl --location --request GET 'localhost:3000/recipes/2'

GET /recipes/2 HTTP/1.1
User-Agent: PostmanRuntime/7.26.5
Accept: */*
Postman-Token: c5601538-c2f9-4b03-84c4-ccdf3dae6ad6
Host: localhost:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 1559
ETag: W/"617-YAAsaMbzA19FU2Zx2517ugAhOrc"
Date: Fri, 13 Nov 2020 19:25:38 GMT
Connection: keep-alive
{"id":2,"name":"Ceviche de calamar con maracuyá","description":"Ceviche de calamar con maracuyá","punctuation":{"values":[3,4,4,5,5],"average":4.2},"ingredients":[{"name":"Calamar","quantity":1,"measure":"unidad"},{"name":"Cebolla roja","quantity":1,"measure":"unidad"},{"name":"Cilantro","quantity":1,"measure":"manojo"},{"name":"Pimiento amarillo","quantity":1,"measure":"unidad"},{"name":"Maracuyá","quantity":4,"measure":"piezas"},{"name":"Lima","quantity":4,"measure":"unidad"},{"name":"Maiz tostado picante","measure":"a gusto"}],"steps":[{"order":0,"description":"Despepitamos la maracuyá y presionamos para quedarnos con todo su jugo. Exprimimos también la lima. Mezclamos ambos zumos."},{"order":1,"description":"Limpiamos el calamar, lo cortamos en dados y lo escaldamos (reservamos las aletas)."},{"order":2,"description":"Para la leche de tigre: Metemos las aletas de calamar en un vaso túrmix con la cebolla, el ají y el cilantro. Turbinamos y colamos."},{"order":3,"description":"Lo mezclamos con unas cucharadas de la mezcla de maracuyá y lima. Al gusto."},{"order":4,"description":"Tenemos unas limas congeladas, las partimos en dos y vaciamos la pulpa (que quede en forma de cuenco)."},{"order":5,"description":"Cortamos la cebolla y la maceramos en un bol con la leche de tigre. Lo mismo con los dados de calamar."},{"order":6,"description":"Emplatado: Rellenamos las medias limas con los dados de calamar, la leche de tigre y el cilantro y el ají picados. Acabamos con un poco de cebolla morada y el maíz picante."}],"servings":2}

### Add Punctuation to a recipe

curl --location --request POST 'localhost:3000/recipes/2/punctuations' \
--header 'Content-Type: application/json' \
--data-raw '{ "value":"3" }'

POST /recipes/2/punctuations HTTP/1.1
Content-Type: text/plain
User-Agent: PostmanRuntime/7.26.5
Accept: */*
Postman-Token: bc006509-f369-4731-8c88-a3c144a71069
Host: localhost:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 15
{ "value":"3" }

HTTP/1.1 201 Created
X-Powered-By: Express
Date: Fri, 13 Nov 2020 19:32:57 GMT
Connection: keep-alive
Content-Length: 0
