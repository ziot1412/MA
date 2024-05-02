fetch("profile.json")
  .then((response) => response.json())
  .then((data) => {
    const charList = document.getElementById("main-content");

    // Loop through the data and create HTML elements
    data.forEach((profile) => {
      const charItem = document.createElement("div");

      const charContent = `
                  <div class="block-header">
                    <h2 class="title">${profile.name}</h2>
                    <p>Artist: ${profile.by}</p>
                  </div>
                  <div class="block-profile justify-content-center">
                    <div class="row">
                      <img
                        src="${profile.image}"
                      />
                    </div>
                    <div class="row description1" style="width: 100%">
                      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">${profile.description1}</div>
                      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                    </div> 
                    <div class="row description" style="width: 100%">
                      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">${profile.description}</div>
                      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                    </div> 
                  </div>
                `;

      charItem.innerHTML = charContent;
      charList.appendChild(charItem);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
