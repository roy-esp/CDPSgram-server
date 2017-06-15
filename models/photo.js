/* 

Modelo de datos de canciones (photo)

photo_id: {
	name: nombre de la canción,
	url: url del fichero de audio
} 

*/
exports.photos = {
	1: {
		name: 'Wood',
		url: photos_url + '/photos/photo1.jpg'
	}
}; 

var photos_url = process.env.PHOTOS_URL || "http://10.1.3.1:8000"
