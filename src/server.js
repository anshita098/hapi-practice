const Hapi = require('hapi');
// const route = require('./routes/routes')

const server = Hapi.server({
  host: 'localhost',
  port: 3000,
})


server.route(
  {
    method: 'GET',
    path: '/k',
    handler: function (request, reply) {
      return ('1')
    }
  },
  {
    method: 'POST',
    path: '/a',
    handler: function (request, reply) {
      const name = request.name;
      return (name);
    }
  },
  {
    method: 'DELETE',
    path: '/s',
    handler: function (request, reply) {
      return ('4')
    },
  },
  {
    method: 'GET',
    path: '/f',
    handler: function (request, reply) {
      return ('2.1')
    }
  });

async function start() {

  try {
    await server.start();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();