
const data = {
  heads: [
    {
      name: 'robot',
      type: 'robot',
      colors: ['red', 'silver', 'black'],
      eyes: 2,
      horns: 0,
      nose: false,
      mouth: 'grill',
      img: 'https://cdn0.iconfinder.com/data/icons/black-logistics-icons/256/Robot_head.png'
    },
    {
      name: 'tiger',
      type: 'animal',
      colors: ['orange', 'black'],
      eyes: 2,
      horns: 0,
      nose: true,
      mouth: 'fanged',
      img: 'https://pbs.twimg.com/profile_images/601966649013501952/eHJIo7cP.png'
    },
    {
      name: 'kitten',
      type: 'animal',
      colors: ['orange', 'black'],
      eyes: 2,
      horns: 0,
      nose: true,
      mouth: 'fanged',
      img: 'https://pbs.twimg.com/profile_images/601966649013501952/eHJIo7cP.png'
    },
    {
      name: 'monster',
      type: 'animal',
      colors: ['orange', 'black'],
      eyes: 2,
      horns: 0,
      nose: true,
      mouth: 'fanged',
      img: 'https://pbs.twimg.com/profile_images/601966649013501952/eHJIo7cP.png'
    }
  ],
  bodies: [
    {
      type: 'robot',
      colors: ['red', 'silver', 'black'],
      arms: 2,
      legs: 2
    },
    {
      type: 'animal',
      colors: ['orange', 'black'],
      arms: 2,
      legs: 2
    }
  ],
  arms: [
    {
      type: 'robot',
      colors: ['red', 'black', 'silver']
    }
  ]
}


const controller = {
  init: function() {
    partsView.init();
  }
}
  

const globalTestArray = [
  'https://cdn0.iconfinder.com/data/icons/black-logistics-icons/256/Robot_head.png',
'https://cdn0.iconfinder.com/data/icons/black-logistics-icons/256/Robot_head.png',
'https://cdn0.iconfinder.com/data/icons/black-logistics-icons/256/Robot_head.png','https://cdn0.iconfinder.com/data/icons/black-logistics-icons/256/Robot_head.png'
]

const partsView = {
  init: function() {
    this.headRow = document.getElementsByClassName('headRow')[0];
    this.render(data.heads);

  },
  render: function(array) {
    array.map(function(obj) {
      let newImage = document.createElement('img');
      newImage.src = obj.img;
      newImage.id = obj.name;
      // newImage.height = 120px;
      // newImage.width = 160px;
      newImage.draggable = 'true';
      newImage.onDragStart = 'drag(event)';
    })
  }
}

controller.init();