const { db } = require('../util/admin');

exports.simpanPesan = (request, response) => {
	if (request.body.nama.trim() === '') {
		return response.status(400).json({ nama: 'Must not be empty' });
    }    
     
    if(request.body.pesan.trim() === '') {
        return response.status(400).json({ pesan: 'Must not be empty' });
    }
    const dataPesan = {
        nama: request.body.nama,
        ibu: request.body.ibu,
        email: request.body.email,
        medsos: request.body.medsos,
        pesan: request.body.pesan,
        createdAt: new Date().toISOString()
    }
    
    db
        .collection('pesan')
        .add(dataPesan)
        .then((doc)=>{
            const responsePesan = dataPesan;
            responsePesan.id = doc.id;
            return response.json(responsePesan);
        })
        .catch((err) => {
			response.status(500).json({ error: 'Something went wrong' });
			console.error(err);
		});
};

exports.getPesan = (request, response) => {
		return response.status(200).json({ body: 'test' });
  
};