// ຟັງຊັນອັບໂຫຼດຮູບໄປ Firebase
async function uploadImageToFirebase(file, path) {
    const storageRef = firebase.storage().ref(path + '/' + Date.now() + '_' + file.name);
    const snapshot = await storageRef.put(file);
    const downloadURL = await snapshot.ref.getDownloadURL();
    return downloadURL;
}

// ຟັງຊັນບັນທຶກ URL ລົງ Database
async function saveImageUrlToDatabase(dbPath, imageUrl) {
    await firebase.database().ref(dbPath).set({
        imageUrl: imageUrl,
        updatedAt: new Date().toISOString()
    });
}