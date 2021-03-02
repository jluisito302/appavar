import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
//IMPORTAR EL SERVICIO
import { ObraService } from '../../services/obra.service';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {
  imagen:any;
  constructor(private camera: Camera, private obrasService:ObraService) { }

  ngOnInit() {
  }

  camara(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      //mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 320,
      targetHeight: 320
    }
    
    this.camera.getPicture(options).then((imageData) => {
      this.imagen = 'data:image/jpeg;base64,' + imageData;

     }, (err) => {
      alert('error');
     });
  }

  galeria(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      //mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 320,
      targetHeight: 320
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imagen = 'data:image/jpeg;base64,' + imageData;

     }, (err) => {
      alert('error');
    });
    
  }

  upserver(){
    /*
    let postData = new FormData;
    postData.append('file', this.base64Image);

    this.obrasService.uploadimage(postData).subscribe(data=>{
      alert(data);
    }, error=>{
      alert('Error');
    });
*/
  }





}// fin de la clase
