module.exports = {
 port: process.env.PORT || 8080,  // establecemos nuestro puerto
 host: process.env.HOST || '0.0.0.0',
 db: process.env.MONGODB_URI ||  'mongodb://cosmosnode-16:unPZvGxoir0hAL4FVQzNptl756YtRRAvFvY6H6D8sfbLhq7kGKQQAFZGI6sYp7kW6RXjoHr0rNDaiZyccFkbsw==@cosmosnode-16.documents.azure.com:10250/mean?ssl=true&sslverifycertificate=false'
 
 //uri: 'mongodb://cosmosnode-16:unPZvGxoir0hAL4FVQzNptl756YtRRAvFvY6H6D8sfbLhq7kGKQQAFZGI6sYp7kW6RXjoHr0rNDaiZyccFkbsw==@cosmosnode-16.documents.azure.com:10250/mean?ssl=true&sslverifycertificate=false'

}