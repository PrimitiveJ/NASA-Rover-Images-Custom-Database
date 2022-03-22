// fetch('https://fakestoreapi.com/products').then((data)=>{
//     // console.log(data) json format
//     return data.json();
// }).then((objectData)=>{
//     console.log(objectData[0].title);
//     let tableData="";
//     objectData.map((values)=>{
//         tableData+=`<tr>
//         <td>${values.title}</td>
//         <td>${values.description}</td>
//         <td>${values.price}</td>
//         <td><img src="${values.image}"/></td>
//     </tr>`;
//     });
//            document.getElementById("table_body").innerHTML = tableData;
// }).catch((err)=>{
//     console.log(err);
// })

fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=dxwjycipNYHVG5GFEqsuu5FUnCwarfVqN0Qmc6R0').then((data)=>{
    // console.log(data) 
    return data.json();
}).then((objectData)=>{
    console.log(objectData.photos);
    let tableData="";
    objectData.photos.map((values)=>{
        tableData+=`<tr>
        <td><img src="${values.img_src}"/></td>
        <td>${values.id}</td>
        <td>${values.rover.name}
    </tr>`;
    });
           document.getElementById("table_body").innerHTML = tableData;
}).catch((err)=>{
    console.log(err); // I'M A FIYA STARTAH!
})
