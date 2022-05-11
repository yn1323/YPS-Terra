import { NestFactory } from '@nestjs/core'
import { firebaseInit } from './firebase/common'
import { AppModule } from './modules/app.module'

async function bootstrap() {
  firebaseInit()
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  })
  await app.listen(3000)
}
bootstrap()
