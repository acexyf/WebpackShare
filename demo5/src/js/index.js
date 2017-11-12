import '../css/index.css';
import moment from 'moment';

(function(){
    let [a=3,b=2,c=1] = [1,2,3];
    document.writeln(`result equal ${a+b+c}<br>`);
    document.writeln(moment().format())
})()

