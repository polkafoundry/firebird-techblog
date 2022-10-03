import s3 from "./s3_storage"
import Const from "./constant"
import fs from "fs"

const uploadImageToS3 = async (file: any) => {
    const uploadedImage = await s3.upload({
        ACL: 'public-read',
        Bucket: Const.S3_BUCKET_NAME,
        Key: file.name,
        Body: file.data,
        ContentType: file.mimetype,
    }).promise()
    return uploadedImage.Location
}

const uploadImageToLocalStorage = async (file: any) => {
    await fs.writeFileSync(`public/images/${file.name}`, file.data)
    return Promise.resolve(`${Const.BASE_URL}/images/${file.name}`)
}

const uploadImage = async (req: any, res: any) => {
    try {
        console.log('upload images')
        const image = req.files?.file
        if (!image) return console.log('asjdhsakjdsa')

        const imageUrl = process.env.NODE_ENV == "production" ? uploadImageToS3(image) : await uploadImageToLocalStorage(image)

        return res.send({ url: imageUrl })
    } catch (error: any) {
        console.log('error: ', error.message)
        res.status(400).send(error.message)
    }
}

export default {
    uploadImage
}