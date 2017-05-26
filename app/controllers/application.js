import Ember from 'ember';
import db from '../utils/db';

export default Ember.Controller.extend({
  actions: {
    search(streamName) {
      db.addStream(streamName);
      this.send('modelUpdated');
    }
  }
});
