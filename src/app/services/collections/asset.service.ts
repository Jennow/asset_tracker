import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../../model/Asset';
import { AbstractCollectionService } from './abstractcollection.service';

@Injectable({
  providedIn: 'root'
})
export class AssetService extends AbstractCollectionService {
  getCards(): Observable<Asset[]> {
    const url = this.apiService.getApiUrl() + 'assets?highlighted=true';
    return this.http.get<Asset[]>(url)
  }
}
