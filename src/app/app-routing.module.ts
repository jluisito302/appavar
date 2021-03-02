import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//IMPORTADO
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'rcheckretro',
    loadChildren: () => import('./pages/rcheckretro/rcheckretro.module').then( m => m.RcheckretroPageModule)
  },
  {
    path: 'rcheckv',
    loadChildren: () => import('./pages/rcheckv/rcheckv.module').then( m => m.RcheckvPageModule)
  },
  {
    path: 'allcheckv',
    loadChildren: () => import('./pages/allcheckv/allcheckv.module').then( m => m.AllcheckvPageModule)
  },
  {
    path: 'editcheck/:id',
    loadChildren: () => import('./pages/editcheck/editcheck.module').then( m => m.EditcheckPageModule)
  },
  {
    path: 'vercheckv/:id',
    loadChildren: () => import('./pages/vercheckv/vercheckv.module').then( m => m.VercheckvPageModule)
  },
  {
    path: 'ultcheckv',
    loadChildren: () => import('./pages/ultcheckv/ultcheckv.module').then( m => m.UltcheckvPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'rordenesv',
    loadChildren: () => import('./pages/rordenesv/rordenesv.module').then( m => m.RordenesvPageModule)
  },
  {
    path: 'ordenesvr',
    loadChildren: () => import('./pages/ordenesvr/ordenesvr.module').then( m => m.OrdenesvrPageModule)
  },
  {
    path: 'allordenesv',
    loadChildren: () => import('./pages/allordenesv/allordenesv.module').then( m => m.AllordenesvPageModule)
  },
  {
    path: 'editotv/:id',
    loadChildren: () => import('./pages/editotv/editotv.module').then( m => m.EditotvPageModule)
  },
  {
    path: 'verotv/:id',
    loadChildren: () => import('./pages/verotv/verotv.module').then( m => m.VerotvPageModule)
  },
  {
    path: 'allcheckr',
    loadChildren: () => import('./pages/allcheckr/allcheckr.module').then( m => m.AllcheckrPageModule)
  },
  {
    path: 'editcheckr/:id',
    loadChildren: () => import('./pages/editcheckr/editcheckr.module').then( m => m.EditcheckrPageModule)
  },
  {
    path: 'vercheckr/:id',
    loadChildren: () => import('./pages/vercheckr/vercheckr.module').then( m => m.VercheckrPageModule)
  },
  {
    path: 'ultcheckr',
    loadChildren: () => import('./pages/ultcheckr/ultcheckr.module').then( m => m.UltcheckrPageModule)
  },
  {
    path: 'rordretro',
    loadChildren: () => import('./pages/rordretro/rordretro.module').then( m => m.RordretroPageModule)
  },
  {
    path: 'verotretro/:id',
    loadChildren: () => import('./pages/verotretro/verotretro.module').then( m => m.VerotretroPageModule)
  },
  {
    path: 'allotretro',
    loadChildren: () => import('./pages/allotretro/allotretro.module').then( m => m.AllotretroPageModule)
  },
  {
    path: 'recotretro',
    loadChildren: () => import('./pages/recotretro/recotretro.module').then( m => m.RecotretroPageModule)
  },
  {
    path: 'editotret/:id',
    loadChildren: () => import('./pages/editotret/editotret.module').then( m => m.EditotretPageModule)
  },
  {
    path: 'ultotretro',
    loadChildren: () => import('./pages/ultotretro/ultotretro.module').then( m => m.UltotretroPageModule)
  },
  {
    path: 'rchecktele',
    loadChildren: () => import('./pages/rchecktele/rchecktele.module').then( m => m.RchecktelePageModule)
  },
  {
    path: 'allchecktele',
    loadChildren: () => import('./pages/allchecktele/allchecktele.module').then( m => m.AllchecktelePageModule)
  },
  {
    path: 'ultchecktele',
    loadChildren: () => import('./pages/ultchecktele/ultchecktele.module').then( m => m.UltchecktelePageModule)
  },
  {
    path: 'editchecktele/:id',
    loadChildren: () => import('./pages/editchecktele/editchecktele.module').then( m => m.EditchecktelePageModule)
  },
  {
    path: 'verchecktele/:id',
    loadChildren: () => import('./pages/verchecktele/verchecktele.module').then( m => m.VerchecktelePageModule)
  },
  {
    path: 'rottele',
    loadChildren: () => import('./pages/rottele/rottele.module').then( m => m.RottelePageModule)
  },
  {
    path: 'editottele/:id',
    loadChildren: () => import('./pages/editottele/editottele.module').then( m => m.EditottelePageModule)
  },
  {
    path: 'verottele/:id',
    loadChildren: () => import('./pages/verottele/verottele.module').then( m => m.VerottelePageModule)
  },
  {
    path: 'allottele',
    loadChildren: () => import('./pages/allottele/allottele.module').then( m => m.AllottelePageModule)
  },
  {
    path: 'ultottele',
    loadChildren: () => import('./pages/ultottele/ultottele.module').then( m => m.UltottelePageModule)
  },
  {
    path: 'rcheckplanta',
    loadChildren: () => import('./pages/rcheckplanta/rcheckplanta.module').then( m => m.RcheckplantaPageModule)
  },
  {
    path: 'editcheckplanta/:id',
    loadChildren: () => import('./pages/editcheckplanta/editcheckplanta.module').then( m => m.EditcheckplantaPageModule)
  },
  {
    path: 'allcheckplanta',
    loadChildren: () => import('./pages/allcheckplanta/allcheckplanta.module').then( m => m.AllcheckplantaPageModule)
  },
  {
    path: 'ultcheckplanta',
    loadChildren: () => import('./pages/ultcheckplanta/ultcheckplanta.module').then( m => m.UltcheckplantaPageModule)
  },
  {
    path: 'rotplanta',
    loadChildren: () => import('./pages/rotplanta/rotplanta.module').then( m => m.RotplantaPageModule)
  },
  {
    path: 'editotplanta/:id',
    loadChildren: () => import('./pages/editotplanta/editotplanta.module').then( m => m.EditotplantaPageModule)
  },
  {
    path: 'verotplanta/:id',
    loadChildren: () => import('./pages/verotplanta/verotplanta.module').then( m => m.VerotplantaPageModule)
  },
  {
    path: 'ultotplanta',
    loadChildren: () => import('./pages/ultotplanta/ultotplanta.module').then( m => m.UltotplantaPageModule)
  },
  {
    path: 'allotplanta',
    loadChildren: () => import('./pages/allotplanta/allotplanta.module').then( m => m.AllotplantaPageModule)
  },
  {
    path: 'vercheckplanta/:id',
    loadChildren: () => import('./pages/vercheckplanta/vercheckplanta.module').then( m => m.VercheckplantaPageModule)
  },
  {
    path: 'rotobra',
    loadChildren: () => import('./pages/rotobra/rotobra.module').then( m => m.RotobraPageModule)
  },
  {
    path: 'editotobra/:id',
    loadChildren: () => import('./pages/editotobra/editotobra.module').then( m => m.EditotobraPageModule)
  },
  {
    path: 'verotobra/:id',
    loadChildren: () => import('./pages/verotobra/verotobra.module').then( m => m.VerotobraPageModule)
  },
  {
    path: 'allotobra',
    loadChildren: () => import('./pages/allotobra/allotobra.module').then( m => m.AllotobraPageModule)
  },
  {
    path: 'ultotobra',
    loadChildren: () => import('./pages/ultotobra/ultotobra.module').then( m => m.UltotobraPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'adduser',
    loadChildren: () => import('./pages/adduser/adduser.module').then( m => m.AdduserPageModule)
  },
  {
    path: 'edituser/:id',
    loadChildren: () => import('./pages/edituser/edituser.module').then( m => m.EdituserPageModule)
  },
  {
    path: 'checkvinformacion',
    loadChildren: () => import('./pages/checkvinformacion/checkvinformacion.module').then( m => m.CheckvinformacionPageModule)
  },
  {
    path: 'checkretroinfo',
    loadChildren: () => import('./pages/checkretroinfo/checkretroinfo.module').then( m => m.CheckretroinfoPageModule)
  },
  {
    path: 'checkplantainfo',
    loadChildren: () => import('./pages/checkplantainfo/checkplantainfo.module').then( m => m.CheckplantainfoPageModule)
  },
  {
    path: 'checkteleinfo',
    loadChildren: () => import('./pages/checkteleinfo/checkteleinfo.module').then( m => m.CheckteleinfoPageModule)
  },
  {
    path: 'activvehiinfo',
    loadChildren: () => import('./pages/activvehiinfo/activvehiinfo.module').then( m => m.ActivvehiinfoPageModule)
  },
  {
    path: 'activretroinfo',
    loadChildren: () => import('./pages/activretroinfo/activretroinfo.module').then( m => m.ActivretroinfoPageModule)
  },
  {
    path: 'activplantainfo',
    loadChildren: () => import('./pages/activplantainfo/activplantainfo.module').then( m => m.ActivplantainfoPageModule)
  },
  {
    path: 'activteleinfo',
    loadChildren: () => import('./pages/activteleinfo/activteleinfo.module').then( m => m.ActivteleinfoPageModule)
  },
  {
    path: 'activobrainfo',
    loadChildren: () => import('./pages/activobrainfo/activobrainfo.module').then( m => m.ActivobrainfoPageModule)
  },
  {
    path: 'rmantto',
    loadChildren: () => import('./pages/rmantto/rmantto.module').then( m => m.RmanttoPageModule)
  },
  {
    path: 'vermtto',
    loadChildren: () => import('./pages/vermtto/vermtto.module').then( m => m.VermttoPageModule)
  },
  {
    path: 'editarmtto/:id',
    loadChildren: () => import('./pages/editarmtto/editarmtto.module').then( m => m.EditarmttoPageModule)
  },
  {
    path: 'observarmtto/:id',
    loadChildren: () => import('./pages/observarmtto/observarmtto.module').then( m => m.ObservarmttoPageModule)
  },
  {
    path: 'asistencias',
    loadChildren: () => import('./pages/asistencias/asistencias.module').then( m => m.AsistenciasPageModule)
  },
  {
    path: 'rasistencia',
    loadChildren: () => import('./pages/rasistencia/rasistencia.module').then( m => m.RasistenciaPageModule)
  },
  {
    path: 'misasistencias',
    loadChildren: () => import('./pages/misasistencias/misasistencias.module').then( m => m.MisasistenciasPageModule)
  },
  {
    path: 'repadministracion',
    loadChildren: () => import('./pages/repadministracion/repadministracion.module').then( m => m.RepadministracionPageModule)
  },
  {
    path: 'repmantenimiento',
    loadChildren: () => import('./pages/repmantenimiento/repmantenimiento.module').then( m => m.RepmantenimientoPageModule)
  },
  {
    path: 'repalmacen',
    loadChildren: () => import('./pages/repalmacen/repalmacen.module').then( m => m.RepalmacenPageModule)
  },
  {
    path: 'reprh',
    loadChildren: () => import('./pages/reprh/reprh.module').then( m => m.ReprhPageModule)
  },
  {
    path: 'cobrosgenerales',
    loadChildren: () => import('./pages/cobrosgenerales/cobrosgenerales.module').then( m => m.CobrosgeneralesPageModule)
  },
  {
    path: 'cobrosfechafecha',
    loadChildren: () => import('./pages/cobrosfechafecha/cobrosfechafecha.module').then( m => m.CobrosfechafechaPageModule)
  },
  {
    path: 'estatuscreditos',
    loadChildren: () => import('./pages/estatuscreditos/estatuscreditos.module').then( m => m.EstatuscreditosPageModule)
  },
  {
    path: 'acredespecificos',
    loadChildren: () => import('./pages/acredespecificos/acredespecificos.module').then( m => m.AcredespecificosPageModule)
  },
  {
    path: 'nominasprfechas',
    loadChildren: () => import('./pages/nominasprfechas/nominasprfechas.module').then( m => m.NominasprfechasPageModule)
  },
  {
    path: 'nominaspsemanas',
    loadChildren: () => import('./pages/nominaspsemanas/nominaspsemanas.module').then( m => m.NominaspsemanasPageModule)
  },
  {
    path: 'listarfechas',
    loadChildren: () => import('./pages/listarfechas/listarfechas.module').then( m => m.ListarfechasPageModule)
  },
  {
    path: 'listarsemanas',
    loadChildren: () => import('./pages/listarsemanas/listarsemanas.module').then( m => m.ListarsemanasPageModule)
  },
  {
    path: 'costoseqgenerales',
    loadChildren: () => import('./pages/costoseqgenerales/costoseqgenerales.module').then( m => m.CostoseqgeneralesPageModule)
  },
  {
    path: 'costosmttorfechas',
    loadChildren: () => import('./pages/costosmttorfechas/costosmttorfechas.module').then( m => m.CostosmttorfechasPageModule)
  },
  {
    path: 'dieselconsgeneral',
    loadChildren: () => import('./pages/dieselconsgeneral/dieselconsgeneral.module').then( m => m.DieselconsgeneralPageModule)
  },
  {
    path: 'dieselconfechas',
    loadChildren: () => import('./pages/dieselconfechas/dieselconfechas.module').then( m => m.DieselconfechasPageModule)
  },
  {
    path: 'inversionobras',
    loadChildren: () => import('./pages/inversionobras/inversionobras.module').then( m => m.InversionobrasPageModule)
  },
  {
    path: 'administracion',
    loadChildren: () => import('./pages/administracion/administracion.module').then( m => m.AdministracionPageModule)
  },
  {
    path: 'histnominas',
    loadChildren: () => import('./pages/histnominas/histnominas.module').then( m => m.HistnominasPageModule)
  },
  {
    path: 'histabonos',
    loadChildren: () => import('./pages/histabonos/histabonos.module').then( m => m.HistabonosPageModule)
  },
  {
    path: 'moviliario',
    loadChildren: () => import('./pages/moviliario/moviliario.module').then( m => m.MoviliarioPageModule)
  },
  {
    path: 'verproveedores',
    loadChildren: () => import('./pages/verproveedores/verproveedores.module').then( m => m.VerproveedoresPageModule)
  },
  {
    path: 'regabonos',
    loadChildren: () => import('./pages/regabonos/regabonos.module').then( m => m.RegabonosPageModule)
  },
  {
    path: 'showcobros',
    loadChildren: () => import('./pages/showcobros/showcobros.module').then( m => m.ShowcobrosPageModule)
  },
  {
    path: 'rentampesada',
    loadChildren: () => import('./pages/rentampesada/rentampesada.module').then( m => m.RentampesadaPageModule)
  },
  {
    path: 'rentmligera',
    loadChildren: () => import('./pages/rentmligera/rentmligera.module').then( m => m.RentmligeraPageModule)
  },
  {
    path: 'recursoshumanos',
    loadChildren: () => import('./pages/recursoshumanos/recursoshumanos.module').then( m => m.RecursoshumanosPageModule)
  },
  {
    path: 'empleados',
    loadChildren: () => import('./pages/empleados/empleados.module').then( m => m.EmpleadosPageModule)
  },
  {
    path: 'antiguedad',
    loadChildren: () => import('./pages/antiguedad/antiguedad.module').then( m => m.AntiguedadPageModule)
  },
  {
    path: 'mantenimiento',
    loadChildren: () => import('./pages/mantenimiento/mantenimiento.module').then( m => m.MantenimientoPageModule)
  },
  {
    path: 'vermttos',
    loadChildren: () => import('./pages/vermttos/vermttos.module').then( m => m.VermttosPageModule)
  },
  {
    path: 'regdecostos',
    loadChildren: () => import('./pages/regdecostos/regdecostos.module').then( m => m.RegdecostosPageModule)
  },
  {
    path: 'vermttoreg',
    loadChildren: () => import('./pages/vermttoreg/vermttoreg.module').then( m => m.VermttoregPageModule)
  },
  {
    path: 'mttoexternos',
    loadChildren: () => import('./pages/mttoexternos/mttoexternos.module').then( m => m.MttoexternosPageModule)
  },
  {
    path: 'vermtexterno/:id',
    loadChildren: () => import('./pages/vermtexterno/vermtexterno.module').then( m => m.VermtexternoPageModule)
  },
  {
    path: 'almacen',
    loadChildren: () => import('./pages/almacen/almacen.module').then( m => m.AlmacenPageModule)
  },
  {
    path: 'stockarticulos',
    loadChildren: () => import('./pages/stockarticulos/stockarticulos.module').then( m => m.StockarticulosPageModule)
  },
  {
    path: 'entradas',
    loadChildren: () => import('./pages/entradas/entradas.module').then( m => m.EntradasPageModule)
  },
  {
    path: 'salidas',
    loadChildren: () => import('./pages/salidas/salidas.module').then( m => m.SalidasPageModule)
  },
  {
    path: 'herramientas',
    loadChildren: () => import('./pages/herramientas/herramientas.module').then( m => m.HerramientasPageModule)
  },
  {
    path: 'herrprestadas',
    loadChildren: () => import('./pages/herrprestadas/herrprestadas.module').then( m => m.HerrprestadasPageModule)
  },
  {
    path: 'maqligera',
    loadChildren: () => import('./pages/maqligera/maqligera.module').then( m => m.MaqligeraPageModule)
  },
  {
    path: 'verhprestada/:id',
    loadChildren: () => import('./pages/verhprestada/verhprestada.module').then( m => m.VerhprestadaPageModule)
  },
  {
    path: 'verificacion',
    loadChildren: () => import('./pages/verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  },
  {
    path: 'cotizaciones',
    loadChildren: () => import('./pages/cotizaciones/cotizaciones.module').then( m => m.CotizacionesPageModule)
  },
  {
    path: 'obrasproceso',
    loadChildren: () => import('./pages/obrasproceso/obrasproceso.module').then( m => m.ObrasprocesoPageModule)
  },
  {
    path: 'obrasterminadas',
    loadChildren: () => import('./pages/obrasterminadas/obrasterminadas.module').then( m => m.ObrasterminadasPageModule)
  },
  {
    path: 'listasrayas',
    loadChildren: () => import('./pages/listasrayas/listasrayas.module').then( m => m.ListasrayasPageModule)
  },
  {
    path: 'estatusbaja',
    loadChildren: () => import('./pages/estatusbaja/estatusbaja.module').then( m => m.EstatusbajaPageModule)
  },
  {
    path: 'invrubrosfechas',
    loadChildren: () => import('./pages/invrubrosfechas/invrubrosfechas.module').then( m => m.InvrubrosfechasPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'cobradetallado/:id',
    loadChildren: () => import('./pages/cobradetallado/cobradetallado.module').then( m => m.CobradetalladoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
