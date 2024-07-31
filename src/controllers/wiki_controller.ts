import { Controller, http } from 'fortjs';

export class WikiController extends Controller {
  @http.post('/')
  retrieveWikipedia() {
    return true;
  }
}
