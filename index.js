// Objects
var student ={
    name:'Mehek',
    age:20,
    address:'Chikmagakur',
    mobile:8088005931,
 }
 console.log(student)
 console.log(student.name)
 console.log(student.age)
 console.log(student.address)
 console.log(student.mobile)
 
 var student ={
    name:'Mehek',
    age:20,
    mobile:8088005931,
    address:{
        city:'Chikmagalur',
        place:'Karnataka',
        pin:577548,

    }
 }
 console.log(student)
 
 console.log(student.address.pin)
 console.log(student.address.city)
 console.log(student.address.place)

 var student2=student;

 student2.graduated=true
 console.log(student2)
console.log(student)


  var video={
      name:'access101 JS Tutorials',
      play: function(){
          console.log('Video Played')
      },
      timer:[0,20,80]

  }
  
  console.log(video.name)
  console.log(video.play())
  console.log(video.timer)
