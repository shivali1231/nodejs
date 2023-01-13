const zod  = require("zod")

const schemaValidation  = zod.object({
    body:zod.object({
        name : zod.string().min(3).max(6),
        email : zod.string().email()

    }).strict()
})
module.exports = schemaValidation