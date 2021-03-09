
const localConfig = {
    endpoint: 'http://localhost:4566',
    s3ForcePathStyle: true
}

console.log({
    credentials: {
        accessKeyId: 'XXX',
        secretAccessKey: 'XXXXXX',
    },
    region: 'eu-east-1',
    ...localConfig
})

// console.log({
//     credentials: {
//         accessKeyId: 'XXX',
//         secretAccessKey: 'XXXXXX',
//     },
//     region: 'eu-east-1',
//     localConfig
// })

