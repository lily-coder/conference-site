const speakers = [
  {
    name: 'Henry Martin',
    title: 'Director of WedDev Solutions',
    bio: 'Henry is an experienced developer who has worked for both large companies and startups. He has a PhD in Computer Science',
    image: {
      imageUrl: './assets/speaker-1.jpg',
      imageAlt: 'project preview image',
    },
  },

  {
    name: 'Henry Martin',
    title: 'Director of WedDev Solutions',
    bio: 'Henry is an experienced developer who has worked for both large companies and startups. He has a PhD in Computer Science',
    image: {
      imageUrl: './assets/speaker-8.jpg',
      imageAlt: 'project preview image',
    },
  },

  {
    name: 'Henry Martin',
    title: 'Director of WedDev Solutions',
    bio: 'Henry is an experienced developer who has worked for both large companies and startups. He has a PhD in Computer Science',
    image: {
      imageUrl: './assets/speaker-3.jpg',
      imageAlt: 'project preview image',
    },
  },

  {
    name: 'Henry Martin',
    title: 'Director of WedDev Solutions',
    bio: 'Henry is an experienced developer who has worked for both large companies and startups. He has a PhD in Computer Science',
    image: {
      imageUrl: './assets/speaker-4.jpg',
      imageAlt: 'project preview image',
    },
  },

  {
    name: 'Henry Martin',
    title: 'Director of WedDev Solutions',
    bio: 'Henry is an experienced developer who has worked for both large companies and startups. He has a PhD in Computer Science',
    image: {
      imageUrl: './assets/speaker-7.jpg',
      imageAlt: 'project preview image',
    },
  },

  {
    name: 'Henry Martin',
    title: 'Director of WedDev Solutions',
    bio: 'Henry is an experienced developer who has worked for both large companies and startups. He has a PhD in Computer Science',
    image: {
      imageUrl: './assets/speaker-6.jpg',
      imageAlt: 'project preview image',
    },
  },
];

function speakerCards(works) {
  const cardMenu = `<div class="featured-speaker">
                      <img src="${works.image.imageUrl}" alt="${works.image.imageUrl}">
                      <div>
                          <p class="black">${works.name}</p>
                          <p class="orange italics">${works.title}</p>
                          <p>${works.bio}</p>
                      </div>
                  </div>`;

  return cardMenu;
}

const modalCard = document.querySelector('#my-popup');
function insertHtml() {
  const myWorks = Object.keys(speakers);
  const myWorksLength = Object.keys(speakers).length;

  for (let i = 0; i < myWorksLength; i += 1) {
    modalCard.innerHTML += speakerCards(speakers[myWorks[i]], i);
  }
}
modalCard.onload = insertHtml();
