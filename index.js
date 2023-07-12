import express  from "express";
const app = express();
import multer from "multer";

import fs from "fs"
app.use(express.json())
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}_${Date.now()}`);
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  fs.readFile(file.path, 'utf8', function(err, data){
      
    // Display the file content
    console.log(data);

});
  res.send('File uploaded successfully.');
});

app.post('/merge',(req,res)=>{
  const file1 = req.body.file1
  const file2 = req.body.file2
  console.log(file1, file2);
  console.log(file1, file2);
  fs.readFile(`uploads/${file1}`, 'utf8', function(err, data1){
    fs.readFile(`uploads/${file2}`, 'utf8', function(err, data2){
      let mergeFile = `${file1.substring( 0, file1.length - 4 )}_${file2.substring(0, file2.length - 4)}${Date.now()}.txt`;
      fs.writeFile(`backup/${mergeFile}`, `${data1} ${data2}`, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        res.send('saved')
      }); 
  });
});
})
app.post('/read',(req,res)=>{
  const file = req.body.file
  fs.readFile(`backup/${file}`, 'utf8', function(err, data){
    console.log(data,'backup');
});
})

app.delete('/delete',(req,res)=>{
  const file = req.body.file
  fs.unlink(`uploads/${file}`, (err) => {
    if (err) throw err;
    console.log('path/file.txt was deleted');
  }); 
})

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
