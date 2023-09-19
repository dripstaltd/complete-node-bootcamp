const fs = require('fs');
const superagent = require('superagent');

// Function that takes a file name and returns a promise that resolves/ returns the data object.
const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('error reading file 😒');
      // NOTE: resolve function return data that can be accessed by .then() method
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('error writing file😒');
      resolve('success');
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res1Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    const imgs = all.map(el => el.body.message);
    console.log(imgs);

    await writeFilePro('dog-img.txt', imgs.join('\n'));
    console.log('Random dog image saved to file successfully!😁');
  } catch (err) {
    // console.log(err);

    throw err;
  }
  return '2: READY 🐕';
};

(async () => {
  try {
    console.log('1: Will get dogPic!');
    const x = await getDogPic();
    console.log(x);
    console.log('3: done getting dogPic!');
  } catch (err) {
    console.log('💀 ERROR');
  }
})();

/*
console.log('1: Will get dogPic!');
getDogPic()
  .then(x => {
    console.log(x);
    console.log('3: done getting dogPic!');
  })
  .catch(err => {
    console.log('💀 ERROR');
  });
*/

//NOTE: example of chaining then methods on promises
/*
readFilePro(`${__dirname}/dog.txt`)
  // readFulePro returns a promise that we can use .then() to resolve
  .then(data => {
    console.log(`Breed: ${data}`);
    // return promise
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then(res => {
    console.log(res.body.message);
    // return promise
    return writeFilePro('dog-img.txt', res.body.message);
  })
  .then(() => {
    console.log('Random dog image saved to file successfully!😁');
  })
  .catch(err => {
    console.log(err);
  });
*/
