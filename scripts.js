
const data = {
  heads: [
    {
      type: 'robot',
      colors: ['red', 'silver', 'black'],
      eyes: 2,
      horns: 0,
      nose: false,
      mouth: 'grill',
      img: 'https://cdn0.iconfinder.com/data/icons/black-logistics-icons/256/Robot_head.png'
    },
    {
      type: 'animal',
      colors: ['orange', 'black'],
      eyes: 2,
      horns: 0,
      nose: true,
      mouth: 'fanged',
      img: 'https://pbs.twimg.com/profile_images/601966649013501952/eHJIo7cP.png'
    },
    {
      type: 'animal',
      colors: ['orange', 'black'],
      eyes: 2,
      horns: 0,
      nose: true,
      mouth: 'fanged',
      img: 'https://pbs.twimg.com/profile_images/601966649013501952/eHJIo7cP.png'
    },
    {
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
    const headList = data.heads.map((obj) => obj.img);
    console.log(headList);
    partsView.init();
    partsView.render(headList);
  }
}
  


const partsView = {
  init: function() {
    this.cranium = document.getElementsByClassName('partRow')[0];
    const torso = document.getElementsByClassName('torsoRow')[0];
  },
  render: function(headList) {
    headList.forEach(function(url) {
     let head = document.createElement('img');
     head.src = url;
     this.cranium.appendChild(head);
    }, this);
  }
}
controller.init();