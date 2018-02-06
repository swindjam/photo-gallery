
module.exports = {

  getAllPhotos: function() {
    //Get every photo


    //CouchDB Login - username: photo_gallery password:J3rs3yButt3r

    return JSON.stringify({
      photos: [
        {
          url: '',
          name: 'Corbiere Lighthouse',
          tags: ['Jersey', 'Channel Islands']
        },
        {
          url: '',
          name: 'Scafell Pike',
          tags: ['Mountains', 'Lake District']
        }
      ]
    })
  }

};
