import '../css/index.css';
import moment from 'moment';
import $ from 'jquery';

(function(){
    let [a=3,b=2,c=1] = [1,2,3];
    document.writeln(`result equal ${a+b+c}<br>`);
    document.writeln(moment().format());
    console.log(111)



    $.ajax({
        url: '/api/home',
        type: 'get',
        success: function(data){
            console.log(data)
        }
    })


})()

