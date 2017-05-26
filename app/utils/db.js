import Ember from 'ember';

export default Ember.Object.create({

  _records: [],

  streams() {
    return Ember.copy(this._records);
  },

  addStream(stream) {
    this._records.push(stream);
  },

  removeStream(stream) {
    const index = this._records.indexOf(stream);
    this._records.splice(index, 1);
  }
});
