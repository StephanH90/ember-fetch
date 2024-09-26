import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class PostsComponent extends Component {
  @tracked posts = [];
  @service store;

  constructor(owner, args) {
    super(owner, args);
    this.posts = this.store.findAll('post');

    const a = fetch('https://swapi.dev/api/planets/1/')
  }
}
