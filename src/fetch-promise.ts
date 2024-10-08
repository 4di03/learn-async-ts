const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
console.log(fetchPromise1);
  
fetchPromise1.then((response: Response) => {
    console.log(`Received response? ${response.ok? 'yes' : 'no'}`);
    console.log(`Response Status: ${response.status}`);
});
  
console.log("Started request…");
  