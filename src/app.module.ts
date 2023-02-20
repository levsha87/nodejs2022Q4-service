import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TrackModule } from './track/track.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';
import { FavsModule } from './favs/favs.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [UserModule, TrackModule, ArtistModule, AlbumModule, FavsModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
