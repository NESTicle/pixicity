import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export abstract class IHttpFavoritosService {
    abstract getLastFavoritos(count: number): Observable<any>;
    abstract deleteFavorito(favoritoId: number): Observable<any>;
}
