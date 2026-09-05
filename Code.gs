const FILE_NAME = 'PuantajData.json';

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ok:true,service:'Puantaj Drive API'}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const req = JSON.parse(e.postData.contents || '{}');
    if (req.action !== 'sync') throw new Error('Geçersiz işlem');

    const files = DriveApp.getFilesByName(FILE_NAME);
    let file = files.hasNext() ? files.next() : null;
    let remote = null;

    if (file) {
      try { remote = JSON.parse(file.getBlob().getDataAsString('UTF-8')); } catch (_) {}
    }

    // Basit last-write-wins yaklaşımı: istemciden gelen veri Drive'a yazılır.
    const data = req.data || {};
    data.cloudUpdatedAt = new Date().toISOString();

    if (file) file.setContent(JSON.stringify(data, null, 2));
    else DriveApp.createFile(FILE_NAME, JSON.stringify(data, null, 2), MimeType.PLAIN_TEXT);

    return json({ok:true,data:data});
  } catch (err) {
    return json({ok:false,error:String(err)});
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
