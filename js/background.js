const image = [
  {
    id: 0,
    URL: "https://images.unsplash.com/photo-1722329907664-f0d07d670721?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    URL: "https://images.unsplash.com/photo-1722325057587-b7cf43890d68?q=80&w=2908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    URL: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    URL: "https://images.unsplash.com/photo-1722218424232-14a9d128524f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    URL: "https://images.unsplash.com/photo-1471691118458-a88597b4c1f5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    URL: "https://images.unsplash.com/photo-1720832657295-68f54a7ed4e9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    URL: "https://images.unsplash.com/photo-1721519342375-b01de76a4e93?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const randomImage = image[Math.floor(Math.random() * image.length)];

document.body.style.backgroundImage = `url(${randomImage.URL})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment = "fixed";

/* 
const bgImage = document.createElement('img');
bgImage.src = `img/${randomImage}`;
document.body.appendChild(bgImage);

createElement 또는 innerHTML 이용해서 이렇게 코드를 짤 수도 있음
*/
