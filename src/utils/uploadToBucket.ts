import {PutObjectCommand, S3Client} from "@aws-sdk/client-s3";
import {logger} from "@/utils/logger";

type UseBucketProps = {
    image: Buffer<ArrayBuffer>;
    imageName: string;
    imageType: string;
}

export async function uploadToBucket({image, imageType, imageName}: UseBucketProps) {
    const S3 = new S3Client({
        region: "auto",
        endpoint: `https://${process.env.ACCOUNT_ID}.r2.cloudflarestorage.com`,
        credentials: {
            accessKeyId: process.env.ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET_ACCESS_KEY,
        },
    });

    try {
        await S3.send(new PutObjectCommand({
            Bucket: process.env.BUCKET_NAME,
            Key: imageName,
            Body: image,
            ACL: "public-read",
            ContentType: imageType,
        }));

        return `https://pub-ea54a22116d24059a44b9e9880dba19b.r2.dev/${imageName}`;
    } catch (error) {
        logger.error("[SERVER]: Error uploading to bucket:", error)
        throw new Error("Failed to upload image to bucket");
    }
}