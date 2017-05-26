import Ember from 'ember';
import db from '../utils/db';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),

  actions: {
    // retrieve streams, add them to db, and notify route to update
    addStreams(stream) {
      const result = this.get('ajax').request(
        `https://api.twitch.tv/kraken/search/streams?query=${stream}`, {
          accepts: 'application/vnd.twitchtv.v5+json',
          headers: {
            'Client-ID': '8wp5eczr3myb0gzot5u7yyeyv2ixju'
          },
          method: 'GET'
      });
      db.addStream(stream);
      this.send('modelUpdated');
      return result;
    },

    toggleLoading() {
      db.setLoading();
      this.send('modelUpdated');
    }
  }
});
