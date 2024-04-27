document.getElementById('file-input').addEventListener('change', function() {
    var fileInput = document.getElementById('file-input');
    var fileNameDisplay = document.getElementById('file-name');
  
    if (fileInput.files.length > 0) {
      var fileName = fileInput.files[0].name;
      fileNameDisplay.textContent = 'File Uploaded: ' + fileName;
      console.log('File uploaded' + fileName);
    }
  });
  
  document.getElementById('upload-btn').addEventListener('click', function() {
    document.getElementById('file-input').click();
  });