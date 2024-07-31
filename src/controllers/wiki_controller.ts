import { Controller, http, textResult } from 'fortjs';

export class WikiController extends Controller {
  @http.get('/')
  retrieveWikipedia() {
    return textResult('hello world!!!!');
  }
}
