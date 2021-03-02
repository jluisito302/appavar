export interface Mantenimiento{ 	
    id?:number;
    equipo:string;
    tipo_servicio: string;
    lugar_mtto:string;
    quien_realiza:string;
    descripcion_mantenimiento?:string;
    insumo_id1:string;
    insumo_id2:string;
    insumo_id3:string;
    insumo_id4:string;
    insumo_id5:string;
    insumo1?:string;
    insumo2?:string;
    insumo3?:string;
    insumo4?:string;
    insumo5?:string;
    quien_reporta:string;
    fecha: string;
    created_at?:string;
    updated_at?:string;



}