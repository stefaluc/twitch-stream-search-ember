import Ember from 'ember';

export default Ember.Object.create({

  _records: [],

  isLoading: false,

  streams() {
    return Ember.copy(this._records);
  },

  loading() {
    return this.isLoading;
  },

  setLoading() {
    this.isLoading = !this.isLoading;
  },

  addStream(stream) {
    this._records.push(stream);
  },

  removeStream(stream) {
    const index = this._records.indexOf(stream);
    this._records.splice(index, 1);
  }
});
