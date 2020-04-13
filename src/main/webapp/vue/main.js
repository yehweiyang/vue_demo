Vue.component('my-first-component',{
    template : `<h1>test</h1>`
})
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello , 狼若回頭，必有緣由．不是報恩，就是報仇．!',
        foo: 'bar',
        created: () => console.log(this.a),
        msg: 'TEST',
        see: false,
        nums : ['YEH','LIN',3],
        val : '',
        items :['213','abc','ppap'],
        selected:false,
        count:0,
        a : 0,
        b : 0,
        password:'',
        checked: false,
        nums:{
            x:10,
            y:20,
        },numbers:[1,2,3,4,5,6,7,8],
        posts:[],
        val : 0,
        image: '',
        file:'',
    },
    methods: {
        fileUpload(event){
            this.file = event.target.files.item(0);
            const reader = new FileReader();
            reader.addEventListener('load',this.imageLoad)
            reader.readAsDataURL(this.file);
            console.log(this.file)
        },
        imageLoad(event){
            this.image = event.target.result;
        },
        move(){
            this.val+=1;
        },
        fetchData() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(posts=>this.posts = posts);
        },
        even(){
            this.numbers = this.numbers.filter(num=>num%2===0)
        },
        action(){
            this.nums.x=222
          Vue.set(this.nums,'z11',30111)
        },
        add(){
            this.foo = 'idiot';
        },
        addList(){

            this.items.push(this.val)
            //this.list.append(this.val)
        },
        removeItem(index){
            this.items.splice(index,1);
        },
        testAdd(){
            this.count+=1;
        }
    },
    computed:{
        c :{
            get(){
                return parseInt(this.a,10) + parseInt(this.b,10);
            },
            set(val){
                this.b = parseInt(val,10) - parseInt(this.a,10);
            }
        },
        strong:{
            get(){
                let score = '';
                if (this.password.length>5)
                    score= 'good';
                if (this.password.length>10)
                    score= 'great';
                if (this.password.length>15)
                    score= 'perfect';
                return score;
            }

        }
    },
    watch : {
        c: {
            handler(val, oldVal) {

            },
            immediate: true
            ,
            deep: true
        }
    }
})


const nums=['YEH','LIN',3]
let bibby;
let jelly;
[,jelly] = nums;


let a=2;
let b=1;
[a, b] = [b,a];
console.log([a, b])

const point = {
    x:100,
    y:150,
}
const {x,y,z=0} = point ;

function greet(name,num){
    console.log(`hello ,${name}  , ${num*4}`)
}
greet('bibby',50)
console.log(tmp)

const double = ()=>{
    return "double";
}

var name = 'Hello';

var sayMyName = function(){
    console.log(this.name);
}

var teacher = {
    name: 'White',
}
teacher.sayMyName = sayMyName;
console.log(document.getElementById('some_id').value);
document.getElementById('some_id').addEventListener('click',sayMyName)
