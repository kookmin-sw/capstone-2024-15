import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const uploadObjectToS3 = async (body: Buffer) => {
  const s3 = new S3Client({ region: 'ap-northeast-2' });
  const s3ObjectName = Math.random().toString(36).slice(2);
  const putObjectCommand = new PutObjectCommand({
    Bucket: 'beginergain',
    Body: body,
    Key: `${process.env.MODE}/${s3ObjectName}`,
  });
  await s3.send(putObjectCommand);

  return `${s3ObjectName}`;
};

export const getS3ObjectUrl = async (s3ObjectName: string) => {
  const s3 = new S3Client({ region: 'ap-northeast-2' });

  const getObjectCommand = new GetObjectCommand({
    Bucket: 'beginergain',
    Key: `${process.env.MODE}/${s3ObjectName}`,
  });

  return await getSignedUrl(s3, getObjectCommand, {
    expiresIn: 60 * 60 * 24,
  });
};
