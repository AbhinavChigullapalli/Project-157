AFRAME.registerComponent("comics", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "comic_book_1",
          title: "ComicBook_1",
          url: "./Assets/ComicBook_1.jpg",
        },
        {
          id: "comic_book_2",
          title: "ComicBook_2",
          url: "./Assets/ComicBook_2.jpg",
        },
  
        {
          id: "comic_book_3",
          title: "ComicBook_3",
          url: "./Assets/ComicBook_3.jpg",
        },
        {
          id: "comic_book_4",
          title: "ComicBook_4",
          url: "./Assets/ComicBook_4.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id)
        
        // Thumbnail Element
        const thumbnail = this.createThumbnail(item)
        borderEl.appendChild(thumbnail)
        
        // Title Text Element
        const titleE1 = this.createTitle(position, item)
        borderEl.appendChild(titleE1)
        
        this.placesContainer.appendChild(borderEl);
      }
    },
  
    createBorder:function(position, id){
      const entityE1 = document.createElement("a-entity")
      entityE1.setAttribute("id", id)
      entityE1.setAttribute("visible", true)
      entityE1.setAttribute("geometry", {
        primitive:"plane",
        width:21,
        height:29
      })
      entityE1.setAttribute("position", position)
      entityE1.setAttribute("material", {
        color:"#00vcd4",
        opacity:0.4
      })
      return entityE1
    },
  
    createThumbnail:function(item){
      const entityE1 = document.createElement("a-entity")
      entityE1.setAttribute("visible", true)
      entityE1.setAttribute("geometry", {
        primitive:"plane",
        width:20,
        height:28
      })
      entityE1.setAttribute("material", {
        src:item.url
      })
      return entityE1
    },
  
    createTitle:function(position, item){
      const entityE1 = document.createElement("a-entity")
      entityE1.setAttribute("text", 
      { font: "exo2bold",
        align: "center",
        width: 70, color: "#e65100", 
        value: item.title, });
        const elPosition = position
        elPosition.y = -30
        entityE1.setAttribute("position", elPosition)
        entityE1.setAttribute("visible", true)
        return entityE1
    }
    
  });
  